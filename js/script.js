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
    var re = /(#.*$)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')|\b(import|from|as|print|input|float|int|for|in|if|else|def|return|None|True|False|len|range)\b|\b(\d+\.?\d*)\b/gm;
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
        return '<div class="codebox"><div class="codebar"><span>' + esc(b.title || b.lang) + '</span>' +
          '<span>' + (b.file ? '<button class="copy dl" type="button" data-file="' + esc(b.file) + '">Download</button> ' : "") + '<button class="copy" type="button">Copy</button></span></div>' +
          '<pre><code class="src">' + highlight(b.code, b.lang) + "</code></pre>" +
          (b.output ? '<div class="out"><span class="lbl">Output</span><pre>' + esc(b.output) + "</pre></div>" : "") + "</div>";
      case "details":
        return "<details><summary>" + esc(b.summary) + "</summary>" + b.blocks.map(block).join("") + "</details>";
      default: return "";
    }
  }

  /* Lesson renderer */
  function renderLesson(n) {
    var d = findDay(n);
    if (!d) { location.hash = "#/"; return; }
    var prev = findDay(n - 1), next = findDay(n + 1);

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
        block({ type: "code", lang: "python", title: f.file, file: f.file, code: f.code, output: f.output }) + "</article>";
    }
    (d.practice || []).forEach(function (p, i) {
      var k = i + 1;
      tocExtra += '<button type="button" data-t="practice' + k + '">💪 Practice ' + k + "</button>";
      extra += '<article class="box" id="s-practice' + k + '"><h2>💪 Practice ' + k + ": " + esc(p.title) + "</h2>" +
        '<div class="meta">' + esc(p.level) + "</div><p>" + esc(p.description) + "</p>" +
        block({ type: "list", items: p.tasks }) + block({ type: "callout", tone: "tip", text: "Hint: " + p.hint }) +
        block({ type: "code", lang: "python", title: p.file + " (starter)", file: p.file, code: p.starter }) +
        block({ type: "details", summary: "Show solution", blocks: [
          { type: "code", lang: "python", title: "Solution", code: p.solution, output: p.output }
        ].concat(p.note ? [{ type: "callout", tone: "info", text: p.note }] : []) }) + "</article>";
    });
    toc = toc.replace('<button type="button" data-t="checklist">', tocExtra + '<button type="button" data-t="checklist">');

    lesson.innerHTML =
      '<div class="lesson-head"><a class="back" href="#/">← All days</a><br>' +
      '<span class="daybadge">DAY ' + d.day + " / " + TOTAL + "</span><h1>" + esc(d.title) + "</h1><p>" + esc(d.subtitle) + "</p>" +
      '<div class="meta-row"><span>🎓 ' + esc(d.level) + "</span><span>⏱ " + esc(d.duration) + "</span></div>" +
      '<div class="tags">' + d.tags.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div></div>" +
      '<div class="layout"><nav class="toc">' + toc + "</nav><div class=\"content\">" +
      '<article class="box goals"><h2>🎯 Goal of Today</h2><p>By the end of today you will:</p><ul>' +
      d.goals.map(function (g) { return "<li>" + esc(g) + "</li>"; }).join("") + "</ul></article>" + secs +
      extra + '<article class="box" id="s-checklist"><h2>✅ End of Day ' + d.day + ' Checklist</h2><div id="checkList"></div><div class="done-msg" id="doneMsg"></div></article>' +
      '<article class="box" id="s-quiz"><h2>❓ Quick Quiz</h2><div id="quiz"></div><p class="score" id="score"></p></article>' +
      '<div class="pager">' + (prev ? '<a class="btn" href="#/day/' + prev.day + '">← Day ' + prev.day + "</a>" : "<span></span>") +
      (next ? '<a class="btn primary" href="#/day/' + next.day + '">Day ' + next.day + " →</a>" : '<span class="pill">More days coming soon</span>') +
      "</div></div></div>";

    bindCopy(); bindToc(); renderChecklist(d); renderQuiz(d);
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
    lesson.querySelectorAll(".copy:not(.dl)").forEach(function (btn) {
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