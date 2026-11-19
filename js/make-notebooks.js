// Usage: node make-notebooks.js
// Reads course-data.js and writes notebooks/day-01.ipynb, day-02.ipynb ... for Google Colab.
const fs = require("fs"), vm = require("vm"), path = require("path");
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, "course-data.js"), "utf8") + ";this.COURSE = COURSE;", ctx);
const lines = t => t.split("\n").map((l, i, a) => (i < a.length - 1 ? l + "\n" : l));
const md = t => ({ cell_type: "markdown", metadata: {}, source: lines(t) });
const code = t => ({ cell_type: "code", metadata: {}, execution_count: null, outputs: [], source: lines(t) });
fs.mkdirSync(path.join(__dirname, "notebooks"), { recursive: true });

ctx.COURSE.days.forEach(d => {
  const cells = [md("# Day " + d.day + ": " + d.title + "\n\n" + d.subtitle + "\n\n**Goals**\n" + d.goals.map(g => "- " + g).join("\n") +
    "\n\nRun the cells from top to bottom. They share variables, like the website lesson.")];
  d.sections.forEach(s => {
    const pyBlocks = s.blocks.filter(b => b.type === "code" && b.lang === "python");
    if (!pyBlocks.length) return;
    cells.push(md("## " + s.icon + " " + s.title));
    pyBlocks.forEach(b => cells.push(code(b.code)));
  });
  if (d.finalProgram) {
    cells.push(md("## 🏁 Final Program: " + d.finalProgram.title + "\n\n" + d.finalProgram.description));
    cells.push(code(d.finalProgram.code));
  }
  (d.practice || []).forEach((p, i) => {
    cells.push(md("## 💪 Practice " + (i + 1) + ": " + p.title + " (" + p.level + ")\n\n" + p.description + "\n\n" +
      p.tasks.map((t, j) => (j + 1) + ". " + t).join("\n") + "\n\n**Hint:** " + p.hint));
    cells.push(code(p.starter));
  });
  const nb = { nbformat: 4, nbformat_minor: 5,
    metadata: { colab: { name: "day-" + String(d.day).padStart(2, "0") + ".ipynb" }, kernelspec: { name: "python3", display_name: "Python 3" }, language_info: { name: "python" } },
    cells };
  const f = path.join(__dirname, "notebooks", "day-" + String(d.day).padStart(2, "0") + ".ipynb");
  fs.writeFileSync(f, JSON.stringify(nb, null, 1));
  console.log("wrote", path.basename(f), cells.length + " cells");
});
