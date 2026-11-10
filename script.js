(function () {
  const $ = (s) => document.querySelector(s);

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  $("#year").textContent = new Date().getFullYear();

  // Mobile menu
  const menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  // Contact links
  $("#emailBtn").href = "mailto:" + SITE.email;
  $("#ghBtn").href = SITE.github;
  if (SITE.linkedin) { const li = $("#liBtn"); li.href = SITE.linkedin; li.hidden = false; }

  // Now building (one main project)
  $("#nowTitle").textContent = NOW.title;
  $("#nowDesc").textContent = NOW.description;

  // Stats
  const stats = $("#stats");
  STATS.forEach((s) => {
    const c = el("div", "card stat" + (s.todo ? " is-todo" : ""));
    c.append(el("div", "stat-value", s.value), el("p", "stat-label", s.label));
    if (s.url) {
      const a = el("a", "stat-note", s.note);
      a.href = s.url; a.target = "_blank"; a.rel = "noopener";
      c.appendChild(a);
    } else {
      c.appendChild(el("p", "stat-note", s.note));
    }
    stats.appendChild(c);
  });

  // Project cards + filter tabs
  const grid = $("#projects"), tabs = $("#tabs");
  function card(p) {
    const c = el("article", "card proj");
    c.append(el("div", "cat", p.category), el("h3", "", p.title), el("p", "problem", p.problem), el("p", "", p.summary));
    const tags = el("div", "tags");
    p.tags.forEach((t) => tags.appendChild(el("span", "tag", t)));
    c.appendChild(tags);
    const a = el("a", "more", "How it works \u2192");
    a.href = "project.html?p=" + encodeURIComponent(p.id);
    c.appendChild(a);
    return c;
  }
  function render(filter) {
    grid.textContent = "";
    PROJECTS.filter((p) => filter === "All" || p.category === filter).forEach((p) => grid.appendChild(card(p)));
  }
  ["All"].concat([...new Set(PROJECTS.map((p) => p.category))]).forEach((c, i) => {
    const b = el("button", "tab" + (i === 0 ? " active" : ""), c);
    b.setAttribute("role", "tab");
    b.addEventListener("click", () => {
      tabs.querySelectorAll(".tab").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      render(c);
    });
    tabs.appendChild(b);
  });
  render("All");
})();
