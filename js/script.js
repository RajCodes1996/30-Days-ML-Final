(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };

  /* Safe storage (can be blocked in some browsers) */
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };


  /* ===== Python workspace (Pyodide runs Python inside the browser) ===== */
  var PYODIDE_URL = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
  var pyPromise = null, pyReady = false, sessions = {}, reg = [], currentDay = 0;
  var PRELUDE = [
    "import builtins, io, base64",
    "import matplotlib",
    "matplotlib.use('Agg')",
    "import matplotlib.pyplot as plt",
    "if not hasattr(builtins, '_plot_figs'):",
    "    builtins._plot_figs = []",
    "def _pg_show(*args, **kwargs):",
    "    for n in plt.get_fignums():",
    "        buf = io.BytesIO()",
    "        plt.figure(n).savefig(buf, format='png', dpi=100, bbox_inches='tight')",
    "        builtins._plot_figs.append(base64.b64encode(buf.getvalue()).decode())",
    "    plt.close('all')",
    "plt.show = _pg_show"
  ].join("\n");

  function getPy() {
    if (pyPromise) return pyPromise;
    pyPromise = new Promise(function (resolve, reject) {
      var start = function () { window.loadPyodide({ indexURL: PYODIDE_URL }).then(resolve, reject); };
      if (window.loadPyodide) return start();
      var sc = document.createElement("script");
      sc.src = PYODIDE_URL + "pyodide.js";
      sc.onload = start;
      sc.onerror = function () { reject(new Error("Could not load the Python runtime. Check your internet connection.")); };
      document.head.appendChild(sc);
    }).then(function (py) { pyReady = true; return py; }, function (e) { pyPromise = null; throw e; });
    return pyPromise;
  }

  function tidy(err) {
    var i = err.indexOf('File "<exec>"');
    return i > 0 ? "Traceback (most recent call last):\n  " + err.slice(i).trim() : err.trim();
  }

  async function runCode(code, key, prereqs) {
    var py = await getPy(), out = [], err = null;
    py.setStdin({ stdin: function () { var v = window.prompt("Python is asking for input():"); return v === null ? undefined : v; } });
    try {
      if (!sessions[key]) {
        sessions[key] = py.globals.get("dict")();
        if (prereqs && prereqs.length) {            /* fresh session: silently run the earlier steps first */
          py.setStdout({ batched: function () {} });
          py.setStderr({ batched: function () {} });
          for (var i = 0; i < prereqs.length; i++) {
            try {
              await py.loadPackagesFromImports(prereqs[i]);
              if (/matplotlib|pyplot/.test(prereqs[i])) await py.runPythonAsync(PRELUDE);
              await py.runPythonAsync(prereqs[i], { globals: sessions[key] });
            } catch (e) {}
          }
          try { py.runPython("import builtins\nbuiltins._plot_figs = []"); } catch (e) {}
        }
      }
      py.setStdout({ batched: function (t) { out.push(t); } });
      py.setStderr({ batched: function (t) { out.push(t); } });
      await py.loadPackagesFromImports(code);
      if (/matplotlib|pyplot/.test(code)) await py.runPythonAsync(PRELUDE);
      await py.runPythonAsync(code, { globals: sessions[key] });
    } catch (e) { err = tidy(String((e && e.message) || e)); }
    var figs = [];
    try {
      figs = JSON.parse(py.runPython("import json, builtins\n_r = json.dumps(getattr(builtins, '_plot_figs', []))\nbuiltins._plot_figs = []\n_r"));
    } catch (e) {}
    return { text: out.join("\n"), figs: figs, error: err };
  }

  /* Plain-language help for common Python errors */
  function friendlyHint(err) {
    var last = err.trim().split("\n").pop();
    if (/NameError/.test(last)) return "A name is not defined. Check the spelling, make sure you wrote the import (like import pandas as pd), and that the code that creates it ran first.";
    if (/SyntaxError|IndentationError|TabError/.test(last)) return "Python cannot read this line. Check brackets, quotes, colons and indentation near the line shown above.";
    if (/KeyError/.test(last)) return "That column or key does not exist. Check the spelling and capital letters of the column name.";
    if (/ModuleNotFoundError|ImportError/.test(last)) return "That library is not available here. Check the spelling of the import line.";
    if (/TypeError/.test(last)) return "A value has the wrong type for this operation. Check what you are passing to the function.";
    if (/ValueError/.test(last)) return "A value is not acceptable here. Check the numbers and the lengths of your lists or columns.";
    if (/AttributeError/.test(last)) return "That object has no such method or attribute. Check the spelling (for example df.head, not df.header).";
    return "Read the last line of the error first. It names the problem. The line number above shows where it happened.";
  }

  function normLines(t) {
    return t.split("\n").map(function (l) { return l.replace(/\s+$/, ""); })
      .filter(function (l) { return l && !/^memory usage/.test(l); });
  }
  function compareOutput(got, exp) {
    var a = normLines(got), b = normLines(exp), n = Math.max(a.length, b.length);
    for (var i = 0; i < n; i++) if (a[i] !== b[i]) return { ok: false, line: i + 1, got: a[i] || "(nothing)", exp: b[i] || "(nothing)" };
    return { ok: true };
  }

  function pgHTML(i, title, open) {
    var r = reg[i], rows = Math.min(24, Math.max(5, r.code.split("\n").length + 1));
    return '<div class="pg" data-reg="' + i + '"' + (open ? "" : " hidden") + '>' +
      '<div class="pg-bar"><span>🧪 ' + esc(title) + '</span><span>' +
      '<button type="button" class="pg-btn pg-run" title="Ctrl+Enter">▶ Run</button>' +
      (r.output ? '<button type="button" class="pg-btn pg-check">✔ Check output</button>' : "") +
      '<button type="button" class="pg-btn pg-reset">↺ Reset code</button>' +
      '<button type="button" class="pg-btn pg-fresh" title="Forget all variables">⟲ Fresh session</button></span></div>' +
      '<textarea class="pg-editor" spellcheck="false" rows="' + rows + '">' + esc(r.code) + "</textarea>" +
      '<div class="pg-out" hidden><div class="pg-status"></div><pre class="pg-text"></pre><div class="pg-figs"></div><div class="pg-check-msg"></div></div></div>';
  }

  function bindPg(el) {
    var r = reg[+el.dataset.reg], key = r.session + "-" + currentDay;
    var ta = $(".pg-editor", el), out = $(".pg-out", el), status = $(".pg-status", el), text = $(".pg-text", el),
        figs = $(".pg-figs", el), chk = $(".pg-check-msg", el), runBtn = $(".pg-run", el), chkBtn = $(".pg-check", el);

    async function run() {
      runBtn.disabled = true; if (chkBtn) chkBtn.disabled = true;
      out.hidden = false; text.textContent = ""; text.className = "pg-text"; figs.innerHTML = ""; chk.textContent = ""; chk.className = "pg-check-msg";
      status.textContent = pyReady ? "⏳ Running..." : "⏳ Loading Python (first run takes 10-30 seconds)...";
      var t0 = Date.now(), res;
      var myI = +el.dataset.reg, pre = [];
      if (r.session === "lesson") reg.forEach(function (x, idx) { if (idx < myI && x.session === "lesson") pre.push(x.code); });
      try { res = await runCode(ta.value, key, pre); }
      catch (e) { res = { text: "", figs: [], error: String(e.message || e) }; }
      var msg = res.text;
      if (res.error) {
        msg += (msg ? "\n" : "") + res.error;
        msg += "\n\n💡 " + friendlyHint(res.error);
        if (/NameError/.test(res.error) && r.session === "lesson") msg += " If you changed earlier code, press Fresh session and run again.";
        text.className = "pg-text err";
      }
      if (!msg && !res.figs.length) {
        msg = /TODO/.test(ta.value)
          ? "Nothing printed yet. This workspace still has # TODO steps. Write your code under each TODO, then press Run."
          : "Your code ran without errors but printed nothing. Add print(...) to see values, or plt.show() to see a chart.";
        text.className = "pg-text note";
      }
      text.textContent = msg;
      res.figs.forEach(function (b64) { var im = document.createElement("img"); im.src = "data:image/png;base64," + b64; im.alt = "Chart output"; figs.appendChild(im); });
      status.textContent = (res.error ? "❌ Error" : "✅ Done") + " in " + ((Date.now() - t0) / 1000).toFixed(1) + " s";
      runBtn.disabled = false; if (chkBtn) chkBtn.disabled = false;
      return res;
    }

    runBtn.addEventListener("click", run);
    if (chkBtn) chkBtn.addEventListener("click", async function () {
      var res = await run();
      if (res.error) { chk.textContent = "Fix the error first, then check again."; chk.className = "pg-check-msg bad"; return; }
      var c = compareOutput(res.text, r.output);
      if (c.ok) { chk.textContent = "✅ Your output matches the expected output. Great work!"; chk.className = "pg-check-msg good"; }
      else {
        chk.textContent = "⚠ Not the same yet. First difference at line " + c.line + ". Expected: " + c.exp + " | Yours: " + c.got +
          " (A different approach can still be correct. Compare with the full expected output in the solution.)";
        chk.className = "pg-check-msg bad";
      }
    });
    $(".pg-reset", el).addEventListener("click", function () { ta.value = r.code; });
    $(".pg-fresh", el).addEventListener("click", function () {
      if (sessions[key]) { try { sessions[key].destroy(); } catch (e) {} delete sessions[key]; }
      out.hidden = false; status.textContent = "🧹 Session cleared. All variables forgotten."; text.textContent = ""; figs.innerHTML = ""; chk.textContent = "";
    });
    ta.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        e.preventDefault();
        var a = ta.selectionStart, b = ta.selectionEnd;
        ta.value = ta.value.slice(0, a) + "    " + ta.value.slice(b);
        ta.selectionStart = ta.selectionEnd = a + 4;
      } else if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); run(); }
    });
  }

  function bindPlayground() {
    lesson.querySelectorAll(".pg:not([data-bound])").forEach(function (el) { el.dataset.bound = "1"; bindPg(el); });
    lesson.querySelectorAll(".try").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var box = btn.closest(".codebox"), nxt = box.nextElementSibling;
        if (nxt && nxt.classList.contains("pg")) { nxt.hidden = !nxt.hidden; return; }
        box.insertAdjacentHTML("afterend", pgHTML(+btn.dataset.reg, "Try it yourself", true));
        var el = box.nextElementSibling; el.dataset.bound = "1"; bindPg(el);
      });
    });
    lesson.querySelectorAll(".pg-dl").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var ta = $(".pg-editor", btn.closest(".pg"));
        try {
          var a = document.createElement("a");
          a.href = URL.createObjectURL(new Blob([ta.value], { type: "text/plain" }));
          a.download = btn.dataset.file; a.click();
          setTimeout(function () { URL.revokeObjectURL(a.href); }, 500);
        } catch (e) {}
      });
    });
  }

  var home = $("#home"), lesson = $("#lesson");
  var days = COURSE.days, TOTAL = COURSE.total;

  /* Progress helpers */
  function checks(n) { var d = findDay(n); return store.get("ml30:check:" + n, d ? d.checklist.map(function () { return false; }) : []); }
  function isDone(n) { var c = checks(n); return c.length > 0 && c.every(Boolean); }
  function doneCount() { return days.filter(function (d) { return isDone(d.day); }).length; }
  function findDay(n) { return days.filter(function (d) { return d.day === n; })[0]; }

  function updateProgress() {
    var done = doneCount(), pct = Math.round((done / TOTAL) * 100);
    $("#topProgress").textContent = done + " / " + TOTAL + " days";
    $("#heroBar").style.width = pct + "%";
    $("#heroText").textContent = pct + "% complete";
  }

  /* Roadmap */
  function renderRoadmap() {
    var html = "";
    for (var n = 1; n <= TOTAL; n++) {
      var d = findDay(n), done = d && isDone(n);
      if (d) {
        html += '<a class="card open' + (done ? " done" : "") + '" href="#/day/' + n + '">' +
          '<span class="num">DAY ' + n + "</span><h3>" + esc(d.title) + "</h3>" +
          '<span class="state">' + (done ? "✅ Completed" : "▶ Start lesson") + "</span></a>";
      } else {
        html += '<div class="card locked"><span class="num">DAY ' + n + "</span><h3>Coming soon</h3>" +
          '<span class="state">🔒 Locked</span></div>';
      }
    }
    $("#roadmapGrid").innerHTML = html;
  }

  /* Minimal Python highlighter */
  function highlight(code, lang) {
    if (lang !== "python") return esc(code);
    var re = /(#.*$)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')|\b(import|from|as|print|input|float|int|for|in|if|else|def|return|None|True|False|len|range|lambda)\b|\b(\d+\.?\d*)\b/gm;
    var out = "", last = 0, m;
    while ((m = re.exec(code))) {
      out += esc(code.slice(last, m.index));
      var c = m[1] ? "c" : m[2] ? "s" : m[3] ? "k" : "n";
      out += '<span class="t-' + c + '">' + esc(m[0]) + "</span>";
      last = m.index + m[0].length;
    }
    return out + esc(code.slice(last));
  }

  /* Block renderer */
  function block(b) {
    switch (b.type) {
      case "p": return "<p>" + esc(b.text) + "</p>";
      case "list": return "<ul>" + b.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
      case "callout": return '<div class="callout ' + b.tone + '">' + esc(b.text) + "</div>";
      case "table":
        return '<div class="tbl"><table><thead><tr>' + b.head.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") +
          "</tr></thead><tbody>" + b.rows.map(function (r) {
            return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>";
          }).join("") + "</tbody></table></div>";
      case "code":
        var tryBtn = "";
        if (b.lang === "python") {
          var ri = reg.push({ code: b.code, output: b.output || "", session: b.session || "lesson" }) - 1;
          tryBtn = '<button class="copy try" type="button" data-reg="' + ri + '">▶ Try it</button> ';
        }
        return '<div class="codebox"><div class="codebar"><span>' + esc(b.title || b.lang) + '</span>' +
          '<span>' + tryBtn + (b.file ? '<button class="copy dl" type="button" data-file="' + esc(b.file) + '">Download</button> ' : "") + '<button class="copy" type="button">Copy</button></span></div>' +
          '<pre><code class="src">' + highlight(b.code, b.lang) + "</code></pre>" +
          (b.output ? '<div class="out"><span class="lbl">Output</span><pre>' + esc(b.output) + "</pre></div>" : "") + "</div>";
      case "image":
        return '<figure class="fig"><img src="' + esc(b.src) + '" alt="' + esc(b.alt || "") + '" loading="lazy">' +
          (b.caption ? "<figcaption>" + esc(b.caption) + "</figcaption>" : "") + "</figure>";
      case "details":
        return "<details><summary>" + esc(b.summary) + "</summary>" + b.blocks.map(block).join("") + "</details>";
      default: return "";
    }
  }

  function practiceWorkspace(p, k) {
    var ri = reg.push({ code: p.starter, output: p.output, session: "practice" + k, file: p.file }) - 1;
    var h = pgHTML(ri, p.file + " (your workspace)", true);
    return h.replace('<button type="button" class="pg-btn pg-reset">',
      '<button type="button" class="pg-btn pg-dl" data-file="' + esc(p.file) + '">⬇ Download</button><button type="button" class="pg-btn pg-reset">');
  }

  /* Lesson renderer */
  function renderLesson(n) {
    var d = findDay(n);
    if (!d) { location.hash = "#/"; return; }
    var prev = findDay(n - 1), next = findDay(n + 1);
    reg.length = 0; currentDay = n;

    var toc = d.sections.map(function (s) {
      return '<button type="button" data-t="' + s.id + '">' + s.icon + " " + esc(s.title.replace(/^Step \d+: /, "")) + "</button>";
    }).join("") + '<button type="button" data-t="checklist">✔ Checklist</button><button type="button" data-t="quiz">❓ Quiz</button>';

    var secs = d.sections.map(function (s) {
      return '<article class="box" id="s-' + s.id + '"><h2>' + s.icon + " " + esc(s.title) + "</h2>" +
        (s.meta ? '<div class="meta">' + esc(s.meta) + "</div>" : "") + s.blocks.map(block).join("") + "</article>";
    }).join("");

    var extra = "";
    var tocExtra = "";
    if (d.finalProgram) {
      var f = d.finalProgram;
      tocExtra += '<button type="button" data-t="final">🏁 Final Program</button>';
      extra += '<article class="box final" id="s-final"><h2>🏁 Final Program: ' + esc(f.title) + "</h2>" +
        '<div class="meta">Everything from Day ' + d.day + " in one file</div><p>" + esc(f.description) + "</p>" +
        '<div class="tags">' + f.concepts.map(function (c) { return '<span class="tag">' + esc(c) + "</span>"; }).join("") + "</div>" +
        block({ type: "code", lang: "python", title: f.file, file: f.file, code: f.code, output: f.output, session: "final" }) +
        (f.images || []).map(function (im) { return block({ type: "image", src: im.src, alt: im.alt, caption: im.caption }); }).join("") + "</article>";
    }
    (d.practice || []).forEach(function (p, i) {
      var k = i + 1;
      tocExtra += '<button type="button" data-t="practice' + k + '">💪 Practice ' + k + "</button>";
      extra += '<article class="box" id="s-practice' + k + '"><h2>💪 Practice ' + k + ": " + esc(p.title) + "</h2>" +
        '<div class="meta">' + esc(p.level) + "</div><p>" + esc(p.description) + "</p>" +
        block({ type: "list", items: p.tasks }) + block({ type: "callout", tone: "tip", text: "Hint: " + p.hint }) +
        practiceWorkspace(p, k) +
        block({ type: "details", summary: "Show solution", blocks: [
          { type: "code", lang: "python", title: "Solution", code: p.solution, output: p.output, session: "sol" + k }
        ].concat((p.images || []).map(function (im) { return { type: "image", src: im.src, alt: im.alt, caption: im.caption }; })).concat(p.note ? [{ type: "callout", tone: "info", text: p.note }] : []) }) + "</article>";
    });
    toc = toc.replace('<button type="button" data-t="checklist">', tocExtra + '<button type="button" data-t="checklist">');

    lesson.innerHTML =
      '<div class="lesson-head"><a class="back" href="#/">← All days</a><br>' +
      '<span class="daybadge">DAY ' + d.day + " / " + TOTAL + "</span><h1>" + esc(d.title) + "</h1><p>" + esc(d.subtitle) + "</p>" +
      '<div class="meta-row"><span>🎓 ' + esc(d.level) + "</span><span>⏱ " + esc(d.duration) + "</span>" +
      (COURSE.colabBase ? '<a class="btn colab" target="_blank" rel="noopener" href="' + esc(COURSE.colabBase + "day-" + (d.day < 10 ? "0" : "") + d.day + ".ipynb") + '">Open in Colab ↗</a>' : "") + "</div>" +
      '<div class="tags">' + d.tags.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div></div>" +
      '<div class="layout"><nav class="toc">' + toc + "</nav><div class=\"content\">" +
      '<article class="box goals"><h2>🎯 Goal of Today</h2><p>By the end of today you will:</p><ul>' +
      d.goals.map(function (g) { return "<li>" + esc(g) + "</li>"; }).join("") + "</ul></article>" + secs +
      extra + '<article class="box" id="s-checklist"><h2>✅ End of Day ' + d.day + ' Checklist</h2><div id="checkList"></div><div class="done-msg" id="doneMsg"></div></article>' +
      '<article class="box" id="s-quiz"><h2>❓ Quick Quiz</h2><div id="quiz"></div><p class="score" id="score"></p></article>' +
      '<div class="pager">' + (prev ? '<a class="btn" href="#/day/' + prev.day + '">← Day ' + prev.day + "</a>" : "<span></span>") +
      (next ? '<a class="btn primary" href="#/day/' + next.day + '">Day ' + next.day + " →</a>" : '<span class="pill">More days coming soon</span>') +
      "</div></div></div>";

    bindCopy(); bindToc(); bindPlayground(); renderChecklist(d); renderQuiz(d);
  }

  function bindCopy() {
    lesson.querySelectorAll(".dl").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var text = btn.closest(".codebox").querySelector(".src").textContent;
        try {
          var a = document.createElement("a");
          a.href = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
          a.download = btn.dataset.file; a.click();
          setTimeout(function () { URL.revokeObjectURL(a.href); }, 500);
        } catch (e) {}
      });
    });
    lesson.querySelectorAll(".copy:not(.dl):not(.try)").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var text = btn.closest(".codebox").querySelector(".src").textContent;
        var ok = function () { btn.textContent = "Copied ✓"; setTimeout(function () { btn.textContent = "Copy"; }, 1400); };
        try { navigator.clipboard.writeText(text).then(ok, function () { btn.textContent = "Press Ctrl+C"; }); }
        catch (e) { btn.textContent = "Press Ctrl+C"; }
      });
    });
  }

  function bindToc() {
    var btns = lesson.querySelectorAll(".toc button");
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        var el = $("#s-" + b.dataset.t);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function renderChecklist(d) {
    var state = checks(d.day), box = $("#checkList");
    box.innerHTML = d.checklist.map(function (c, i) {
      return '<label class="check"><input type="checkbox" data-i="' + i + '"' + (state[i] ? " checked" : "") + "><span>" + esc(c) + "</span></label>";
    }).join("");
    var msg = function () { $("#doneMsg").textContent = state.every(Boolean) ? "🎉 Day " + d.day + " complete! Great work." : ""; };
    box.querySelectorAll("input").forEach(function (inp) {
      inp.addEventListener("change", function () {
        state[+inp.dataset.i] = inp.checked;
        store.set("ml30:check:" + d.day, state);
        msg(); updateProgress(); renderRoadmap();
      });
    });
    msg();
  }

  function renderQuiz(d) {
    var correct = 0, answered = 0, box = $("#quiz");
    box.innerHTML = d.quiz.map(function (q, qi) {
      return '<div class="q" data-q="' + qi + '"><h4>' + (qi + 1) + ". " + esc(q.q) + '</h4><div class="opts">' +
        q.options.map(function (o, oi) { return '<button type="button" class="opt" data-o="' + oi + '">' + esc(o) + "</button>"; }).join("") +
        '</div><div class="why" hidden>' + esc(q.why) + "</div></div>";
    }).join("");
    box.querySelectorAll(".q").forEach(function (qEl) {
      var q = d.quiz[+qEl.dataset.q];
      qEl.querySelectorAll(".opt").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var pick = +btn.dataset.o;
          qEl.querySelectorAll(".opt").forEach(function (b) {
            b.disabled = true;
            if (+b.dataset.o === q.answer) b.classList.add("right");
          });
          if (pick !== q.answer) btn.classList.add("wrong"); else correct++;
          qEl.querySelector(".why").hidden = false;
          answered++;
          $("#score").textContent = "Score: " + correct + " / " + d.quiz.length + (answered === d.quiz.length ? " 🏁" : "");
        });
      });
    });
  }

  /* Router */
  function route() {
    var m = location.hash.match(/^#\/day\/(\d+)/);
    if (m) {
      home.hidden = true; lesson.hidden = false;
      renderLesson(+m[1]); window.scrollTo(0, 0);
    } else {
      lesson.hidden = true; home.hidden = false;
      renderRoadmap(); updateProgress();
    }
  }

  /* Theme */
  function applyTheme(t) { if (t) document.documentElement.setAttribute("data-theme", t); }
  applyTheme(store.get("ml30:theme", null));
  $("#themeBtn").addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    if (!cur) cur = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    var next = cur === "dark" ? "light" : "dark";
    applyTheme(next); store.set("ml30:theme", next);
  });

  $("#year").textContent = new Date().getFullYear();
  window.addEventListener("hashchange", function () { route(); updateProgress(); });
  updateProgress(); route();
})();