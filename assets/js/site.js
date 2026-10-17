(() => {
  "use strict";

  const scriptUrl = document.currentScript.src;
  const siteBase = new URL("../../", scriptUrl);
  const app = document.getElementById("app");
  const portfolio = window.PORTFOLIO;
  const page = app.dataset.page;
  const siteUrl = (path) => new URL(path, siteBase).href;
  const imageUrl = (path) => siteUrl(`assets/images/${path}`);
  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);

  const engineeringItems = ["volvo", "satcube", "formula-student", "autobike"];
  const hobbyItems = ["campervan", "3d-design", "music", "outdoors"];

  function linkFor(slug) {
    return siteUrl(portfolio.articles[slug].path);
  }

  function renderDropdown(label, id, items, includeOthers = false) {
    const entries = items.map((slug) => {
      const article = portfolio.articles[slug];
      return `<a class="dropdown-link" href="${linkFor(slug)}">${escapeHtml(article.label)}</a>`;
    }).join("");
    const others = includeOthers
      ? `<div class="dropdown-group"><span class="dropdown-heading">Others</span><a class="dropdown-link" href="${linkFor("quadcopter")}">Quadcopter</a><a class="dropdown-link" href="${linkFor("raysafe")}">RaySafe</a></div>`
      : "";
    return `<div class="nav-dropdown" data-dropdown>
      <button class="nav-trigger" type="button" aria-expanded="false" aria-controls="${id}">${label}<span class="chevron" aria-hidden="true"></span></button>
      <div class="dropdown-panel" id="${id}" hidden>${entries}${others}</div>
    </div>`;
  }

  function renderHeader() {
    return `<header class="site-header">
      <div class="header-inner">
        <a class="wordmark" href="${siteUrl("index.html")}" aria-label="${escapeHtml(portfolio.name)} — home">
          <span class="wordmark-mark" aria-hidden="true">AA</span><span>${escapeHtml(portfolio.name)}</span>
        </a>
        <button class="mobile-menu-button" type="button" aria-expanded="false" aria-controls="primary-navigation">
          <span class="menu-icon" aria-hidden="true"></span><span class="mobile-menu-label">Menu</span>
        </button>
        <nav class="primary-navigation" id="primary-navigation" aria-label="Main navigation">
          ${renderDropdown("Experience", "experience-menu", engineeringItems, true)}
          ${renderDropdown("Hobbies &amp; Free Time", "hobbies-menu", hobbyItems)}
          <a class="nav-link ${page === "cv" ? "active" : ""}" href="${siteUrl("cv.html")}">CV</a>
          <button class="nav-link email-trigger" type="button" aria-expanded="false" aria-controls="email-panel">Email <span aria-hidden="true">↗</span></button>
          <div class="email-panel" id="email-panel" hidden>
            <span class="eyebrow">Get in touch</span>
            <a class="email-address" href="mailto:${escapeHtml(portfolio.email)}">${escapeHtml(portfolio.email)}</a>
            <a class="email-compose" href="mailto:${escapeHtml(portfolio.email)}?subject=Hello%20Ayman">Compose an email <span aria-hidden="true">↗</span></a>
            <p class="copy-status" role="status" aria-live="polite"></p>
          </div>
        </nav>
      </div>
    </header>`;
  }

  function renderFooter() {
    return `<footer class="site-footer">
      <div class="footer-inner">
        <a class="footer-name" href="${siteUrl("index.html")}">${escapeHtml(portfolio.name)}</a>
        <p>Systems, control &amp; automation</p>
        <a href="mailto:${escapeHtml(portfolio.email)}">${escapeHtml(portfolio.email)}</a>
        <span class="footer-note">Built from real projects, one detail at a time.</span>
      </div>
    </footer>
    <dialog class="lightbox" aria-label="Image viewer">
      <form method="dialog"><button class="lightbox-close" aria-label="Close image viewer">Close <span aria-hidden="true">×</span></button></form>
      <button class="lightbox-step lightbox-previous" type="button" aria-label="Previous image">←</button>
      <figure><img class="lightbox-image" alt=""><figcaption class="lightbox-caption"></figcaption></figure>
      <button class="lightbox-step lightbox-next" type="button" aria-label="Next image">→</button>
    </dialog>`;
  }

  function renderChips(values = []) {
    if (!values.length) return "";
    return `<ul class="tag-list">${values.map((value) => `<li>${escapeHtml(value)}</li>`).join("")}</ul>`;
  }

  function renderHome() {
    const featured = portfolio.home.selected.map((slug, index) => {
      const article = portfolio.articles[slug];
      const image = article.hero
        ? `<img src="${imageUrl(article.hero.src)}" alt="${escapeHtml(article.hero.alt)}" loading="lazy">`
        : `<div class="card-placeholder"><span>${String(index + 1).padStart(2, "0")}</span><i aria-hidden="true"></i></div>`;
      return `<a class="project-card" href="${linkFor(slug)}">
        <div class="project-card-image">${image}<span class="card-arrow" aria-hidden="true">↗</span></div>
        <div class="project-card-copy"><span class="eyebrow">${escapeHtml(article.label)}</span><h3>${escapeHtml(article.title)}</h3><p>${escapeHtml(article.summary)}</p></div>
      </a>`;
    }).join("");
    const personal = portfolio.home.beyond.map((slug) => {
      const article = portfolio.articles[slug];
      return `<a class="personal-link" href="${linkFor(slug)}"><span>${escapeHtml(article.label)}</span><span aria-hidden="true">↗</span></a>`;
    }).join("");

    return `<main id="main-content">
      <section class="hero section-shell">
        <div class="hero-copy">
          <p class="eyebrow"><span class="status-dot"></span> Engineering portfolio · Sweden</p>
          <h1>Systems thinker.<br><em>Hands-on</em> engineer.</h1>
          <p class="hero-lede">${escapeHtml(portfolio.home.intro)}</p>
          <div class="hero-actions">
            <a class="button button-dark" href="${siteUrl("pages/volvo.html")}">Explore my work <span aria-hidden="true">↗</span></a>
            <a class="text-link" href="${siteUrl("cv.html")}">View my CV <span aria-hidden="true">↗</span></a>
          </div>
          <div class="hero-meta"><span>MSc · Systems, Control &amp; Mechatronics</span><span>Chalmers University of Technology</span></div>
        </div>
        <div class="hero-visual">
          <div class="hero-photo"><img src="${imageUrl("profile/portrait.webp")}" alt="Portrait of Ayman Alzein" fetchpriority="high"></div>
          <div class="hero-index"><span>01</span><span>Model → build → verify</span></div>
          <div class="hero-stamp" aria-hidden="true"><span>MAKE</span><span>IT</span><span>WORK</span></div>
        </div>
        <div class="hero-bottom"><span>Curious by nature</span><span>Focused on what works</span><span>Scroll to explore ↓</span></div>
      </section>

      <section class="about-section section-shell" id="about">
        <div class="section-marker"><span>01</span><span>PROFILE</span></div>
        <div class="about-content">
          <div><p class="eyebrow">A little about me</p><h2>From system models<br>to the real world.</h2></div>
          <div class="about-copy"><p>${escapeHtml(portfolio.home.about)}</p><p>Whether I am tracing a vehicle fault, comparing control strategies or fitting out a van, I like work where careful thinking leads to a useful result.</p>
            <a class="text-link" href="${siteUrl("cv.html")}">A closer look at my background <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div class="skill-strip"><span>Automation</span><span>Control design</span><span>Diagnostics</span><span>Sensor fusion</span><span>Prototyping</span></div>
      </section>

      <section class="projects-section section-shell" id="projects">
        <div class="section-heading"><div><div class="section-marker"><span>02</span><span>SELECTED WORK</span></div><h2>Engineering in context.</h2></div><a class="text-link" href="${siteUrl("pages/satcube.html")}">Explore all projects <span aria-hidden="true">↗</span></a></div>
        <div class="project-grid">${featured}</div>
      </section>

      <section class="beyond-section">
        <div class="section-shell beyond-inner">
          <div class="section-marker"><span>03</span><span>OUTSIDE THE WORKSHOP</span></div>
          <div class="beyond-content"><div><p class="eyebrow">Curiosity doesn't clock out</p><h2>Made by hand.<br>Found outdoors.</h2><p class="beyond-intro">A campervan built one weekend at a time, CAD designs turned into real objects, music and long days outside — the personal projects that make me, me.</p></div>
            <div class="personal-list">${personal}</div>
          </div>
        </div>
      </section>

      <section class="contact-section section-shell">
        <div class="section-marker"><span>04</span><span>LET'S CONNECT</span></div>
        <div class="contact-content"><div><p class="eyebrow">Have a project in mind?</p><h2>Good work starts<br>with a conversation.</h2></div><div class="contact-actions"><a class="button button-accent" href="mailto:${escapeHtml(portfolio.email)}">Email me <span aria-hidden="true">↗</span></a><a class="text-link" href="${siteUrl("cv.html")}">Open my CV <span aria-hidden="true">↗</span></a></div></div>
      </section>
    </main>`;
  }

  function renderSections(article) {
    if (!article.sections?.length) return "";
    return `<div class="article-body">${article.sections.map((section, index) => `
      <section class="article-section"><div class="section-number">${String(index + 1).padStart(2, "0")}</div><div><h2>${escapeHtml(section.title)}</h2>${(section.paragraphs || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}${section.bullets ? `<ul class="detail-list">${section.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}</div></section>
    `).join("")}</div>`;
  }

  function renderGallery(gallery) {
    if (!gallery?.length) return "";
    return `<section class="gallery-section"><div class="section-heading"><div><p class="eyebrow">In pictures</p><h2>Details from the project.</h2></div><span class="gallery-count">${String(gallery.length).padStart(2, "0")} images</span></div>
      <div class="gallery-grid">${gallery.map((image, index) => `<figure class="gallery-item ${index === 0 ? "gallery-featured" : ""}">
        <button class="gallery-open" type="button" data-gallery-index="${index}" aria-label="View image ${index + 1}: ${escapeHtml(image.alt)}">
          <img src="${imageUrl(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy"><span class="gallery-zoom" aria-hidden="true">↗</span>
        </button><figcaption>${escapeHtml(image.caption || image.alt)}</figcaption>
      </figure>`).join("")}</div></section>`;
  }

  function renderResources(resources) {
    if (!resources?.length) return "";
    return `<section class="resource-section"><p class="eyebrow">Further reading</p><div class="resource-list">${resources.map((resource) => {
      const href = resource.external ? resource.href : siteUrl(resource.href);
      const attributes = resource.external ? ' target="_blank" rel="noopener noreferrer"' : resource.download ? " download" : "";
      return `<a class="resource-link" href="${href}"${attributes}><span>${escapeHtml(resource.label)}</span><span aria-hidden="true">↗</span></a>`;
    }).join("")}</div></section>`;
  }

  function renderRelated(slugs) {
    if (!slugs?.length) return "";
    return `<section class="related-section"><p class="eyebrow">Keep exploring</p><div class="related-links">${slugs.map((slug) => `<a href="${linkFor(slug)}">${escapeHtml(portfolio.articles[slug].label)} <span aria-hidden="true">↗</span></a>`).join("")}</div></section>`;
  }

  function renderArticle(article) {
    const facts = [
      article.role ? `<div><span>Role</span><strong>${escapeHtml(article.role)}</strong></div>` : "",
      article.period ? `<div><span>Period</span><strong>${escapeHtml(article.period)}</strong></div>` : ""
    ].filter(Boolean).join("");
    const hero = article.hero
      ? `<figure class="article-hero-image"><img src="${imageUrl(article.hero.src)}" alt="${escapeHtml(article.hero.alt)}" fetchpriority="high"><figcaption>${escapeHtml(article.hero.alt)}</figcaption></figure>`
      : "";
    const note = article.note ? `<aside class="editorial-note">${escapeHtml(article.note)}</aside>` : "";

    return `<main id="main-content" class="article-page">
      <section class="article-intro section-shell">
        <a class="back-link" href="${siteUrl("index.html")}">← Home</a>
        <div class="article-intro-grid"><div><p class="eyebrow"><span class="status-dot"></span>${escapeHtml(article.group || "Portfolio")} / ${escapeHtml(article.label)}</p><h1>${escapeHtml(article.title)}</h1><p class="article-deck">${escapeHtml(article.summary)}</p></div>
        <div class="article-side"><div class="side-index"><span>PROJECT NOTE</span><span>${escapeHtml(article.label.toUpperCase())}</span></div>${facts ? `<div class="article-facts">${facts}</div>` : ""}${renderChips(article.disciplines)}</div></div>
      </section>
      ${hero}
      <section class="article-content section-shell">
        <div class="article-lede"><p class="eyebrow">Overview</p><p>${escapeHtml(article.intro)}</p></div>
        ${note}
        ${renderSections(article)}
        ${renderResources(article.resources)}
        ${renderRelated(article.related)}
      </section>
      <div class="section-shell">${renderGallery(article.gallery)}</div>
    </main>`;
  }

  function renderCv() {
    const cvUrl = siteUrl(portfolio.documents.cv);
    return `<main id="main-content" class="cv-page section-shell">
      <section class="cv-heading"><a class="back-link" href="${siteUrl("index.html")}">← Home</a><p class="eyebrow">Curriculum vitae</p><h1>Experience, at a glance.</h1><p>View or download the available CV file. A PDF preview appears here when a PDF version is available.</p>
        <div class="hero-actions"><a class="button button-dark" href="${cvUrl}" download>Download original CV <span aria-hidden="true">↓</span></a></div>
      </section>
      <div id="cv-preview" aria-live="polite"><p class="pdf-fallback">Checking for a PDF version…</p></div>
    </main>`;
  }

  function render() {
    if (!portfolio || !app) return;
    const article = portfolio.articles[page];
    const content = page === "home" ? renderHome() : page === "cv" ? renderCv() : article ? renderArticle(article) : null;
    if (!content) {
      app.innerHTML = `${renderHeader()}<main id="main-content" class="not-found section-shell"><p class="eyebrow">Page not found</p><h1>This page isn't in the portfolio.</h1><a class="button button-dark" href="${siteUrl("index.html")}">Return home</a></main>${renderFooter()}`;
    } else {
      app.innerHTML = `${renderHeader()}${content}${renderFooter()}`;
    }
    bindNavigation();
    bindGallery();
    if (page === "cv") bindCv();
  }

  function bindNavigation() {
    const nav = document.querySelector(".primary-navigation");
    const menuButton = document.querySelector(".mobile-menu-button");
    const closeDropdowns = (except = null) => {
      document.querySelectorAll("[data-dropdown]").forEach((dropdown) => {
        if (dropdown === except) return;
        dropdown.classList.remove("open");
        dropdown.querySelector(".nav-trigger").setAttribute("aria-expanded", "false");
        dropdown.querySelector(".dropdown-panel").hidden = true;
      });
    };

    document.querySelectorAll("[data-dropdown]").forEach((dropdown) => {
      const button = dropdown.querySelector(".nav-trigger");
      const panel = dropdown.querySelector(".dropdown-panel");
      const open = () => {
        closeDropdowns(dropdown);
        dropdown.classList.add("open");
        button.setAttribute("aria-expanded", "true");
        panel.hidden = false;
      };
      const close = () => {
        dropdown.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
        panel.hidden = true;
      };
      button.addEventListener("click", () => {
        if (window.matchMedia("(min-width: 721px)").matches) {
          open();
          return;
        }
        if (button.getAttribute("aria-expanded") === "true") close();
        else open();
      });
      dropdown.addEventListener("mouseenter", () => {
        if (window.matchMedia("(min-width: 721px)").matches) open();
      });
      dropdown.addEventListener("mouseleave", () => {
        if (window.matchMedia("(min-width: 721px)").matches && !dropdown.contains(document.activeElement)) close();
      });
      dropdown.addEventListener("focusin", () => {
        if (window.matchMedia("(min-width: 721px)").matches) open();
      });
      dropdown.addEventListener("focusout", (event) => {
        if (window.matchMedia("(min-width: 721px)").matches && !dropdown.contains(event.relatedTarget)) close();
      });
    });

    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("mobile-open", !open);
    });

    const emailButton = document.querySelector(".email-trigger");
    const emailPanel = document.querySelector(".email-panel");
    const emailStatus = document.querySelector(".copy-status");
    emailButton.addEventListener("click", async () => {
      const open = emailButton.getAttribute("aria-expanded") === "true";
      emailButton.setAttribute("aria-expanded", String(!open));
      emailPanel.hidden = open;
      if (open) return;
      try {
        if (!navigator.clipboard?.writeText) throw new Error("Clipboard access is unavailable.");
        await navigator.clipboard.writeText(portfolio.email);
        emailStatus.textContent = "Copied to clipboard. Use the link above to compose a message.";
      } catch {
        emailStatus.textContent = "Clipboard access is unavailable here. The address and email link above are ready to use.";
      }
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".primary-navigation")) {
        closeDropdowns();
        emailPanel.hidden = true;
        emailButton.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      closeDropdowns();
      emailPanel.hidden = true;
      emailButton.setAttribute("aria-expanded", "false");
      if (menuButton.getAttribute("aria-expanded") === "true") {
        nav.classList.remove("mobile-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.focus();
      }
    });
    nav.querySelectorAll("a").forEach((anchor) => anchor.addEventListener("click", () => {
      nav.classList.remove("mobile-open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  function bindGallery() {
    const dialog = document.querySelector(".lightbox");
    const image = document.querySelector(".lightbox-image");
    const caption = document.querySelector(".lightbox-caption");
    const buttons = [...document.querySelectorAll(".gallery-open")];
    const gallery = buttons.map((button) => {
      const item = button.closest(".gallery-item");
      return {
        src: button.querySelector("img").src,
        alt: button.querySelector("img").alt,
        caption: item.querySelector("figcaption").textContent
      };
    });
    let current = 0;

    const show = (index) => {
      current = (index + gallery.length) % gallery.length;
      image.src = gallery[current].src;
      image.alt = gallery[current].alt;
      caption.textContent = gallery[current].caption;
    };
    buttons.forEach((button) => button.addEventListener("click", () => {
      show(Number(button.dataset.galleryIndex));
      dialog.showModal();
    }));
    document.querySelector(".lightbox-previous").addEventListener("click", () => show(current - 1));
    document.querySelector(".lightbox-next").addEventListener("click", () => show(current + 1));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") show(current - 1);
      if (event.key === "ArrowRight") show(current + 1);
    });
  }

  async function bindCv() {
    const preview = document.getElementById("cv-preview");
    const pdfPath = portfolio.documents.cvPdf;
    if (!pdfPath) {
      preview.innerHTML = `<section class="cv-missing-note" aria-labelledby="cv-pdf-status"><p class="eyebrow">Browser preview</p><h2 id="cv-pdf-status">PDF not supplied</h2><p>The original DOCX is available to download above. Add a PDF at <code>assets/documents/Ayman-Alzein-CV.pdf</code> and set <code>documents.cvPdf</code> in <code>assets/js/data.js</code> to enable the embedded viewer.</p></section>`;
      return;
    }
    const pdfUrl = siteUrl(pdfPath);
    try {
      const response = await fetch(pdfUrl, { method: "HEAD" });
      if (!response.ok) {
        preview.innerHTML = `<section class="cv-missing-note" aria-labelledby="cv-pdf-status"><p class="eyebrow">Browser preview</p><h2 id="cv-pdf-status">PDF not available</h2><p>The original DOCX is available to download above. Check that <code>${escapeHtml(pdfPath)}</code> is present.</p></section>`;
        return;
      }
      preview.innerHTML = `<div class="pdf-actions"><a class="button button-dark" href="${pdfUrl}" target="_blank" rel="noopener noreferrer">Open PDF <span aria-hidden="true">↗</span></a><a class="text-link" href="${pdfUrl}" download>Download PDF <span aria-hidden="true">↓</span></a></div><div class="pdf-frame"><iframe src="${pdfUrl}#toolbar=1&amp;view=FitH" title="Ayman Alzein's curriculum vitae"></iframe></div>`;
    } catch {
      preview.innerHTML = `<section class="cv-missing-note" aria-labelledby="cv-pdf-status"><p class="eyebrow">Browser preview unavailable</p><h2 id="cv-pdf-status">PDF could not be checked</h2><p>The original DOCX is available to download above. Check that <code>${escapeHtml(pdfPath)}</code> is present and the site is online.</p></section>`;
    }
  }

  render();
})();
