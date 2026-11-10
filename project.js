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

  const id = new URLSearchParams(location.search).get("p");
  const p = PROJECTS.find((x) => x.id === id);
  const root = $("#project");

  const back = el("a", "back", "\u2190 All projects");
  back.href = "index.html#work";
  root.appendChild(back);

  if (!p) {
    root.append(el("h1", "", "Project not found"), el("p", "sub", "Pick a project from the home page."));
    return;
  }

  document.title = p.title + " | " + SITE.name;
  root.append(el("p", "eyebrow", p.category), el("h1", "", p.title), el("p", "lead", p.summary));

  // Video (60-90 sec, per project)
  const video = el("div", "video");
  if (p.video) {
    const f = document.createElement("iframe");
    f.src = p.video; f.title = p.title + " demo"; f.allowFullscreen = true; f.loading = "lazy";
    video.appendChild(f);
  } else {
    video.textContent = "Video coming soon";
  }
  root.appendChild(video);

  // Problem
  root.append(el("h2", "", "The problem"), el("p", "", p.problem));

  // Steps
  if (p.steps && p.steps.length) {
    root.appendChild(el("h2", "", "How it works"));
    const ol = el("ol", "steps");
    p.steps.forEach((s) => ol.appendChild(el("li", "", s)));
    root.appendChild(ol);
  }
  if (p.next) root.append(el("h2", "", "Next"), el("p", "", p.next));

  // Tools + links
  root.appendChild(el("h2", "", "Built with"));
  const tags = el("div", "tags");
  p.tags.forEach((t) => tags.appendChild(el("span", "tag", t)));
  root.appendChild(tags);

  if (p.repo) {
    const a = el("a", "btn ghost", "View code on GitHub");
    a.href = p.repo; a.target = "_blank"; a.rel = "noopener";
    root.appendChild(el("p")).appendChild(a);
  }
})();
