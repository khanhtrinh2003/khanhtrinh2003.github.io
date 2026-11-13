(function () {
  var KEY = "cv-lang";
  var btns = document.querySelectorAll(".lang-toggle button");
  var items = document.querySelectorAll("[data-en]");
  var dl = document.querySelector("[data-href-en]");
  var titleFr = document.title;
  var titleEn = "Nguyen Trinh – Curriculum Vitae (English)";

  function apply(lang) {
    document.documentElement.lang = lang;
    items.forEach(function (el) {
      if (el.dataset.fr === undefined) el.dataset.fr = el.innerHTML;
      el.innerHTML = lang === "en" ? el.dataset.en : el.dataset.fr;
    });
    if (dl) {
      if (dl.dataset.hrefFr === undefined) dl.dataset.hrefFr = dl.getAttribute("href");
      dl.setAttribute("href", lang === "en" ? dl.dataset.hrefEn : dl.dataset.hrefFr);
    }
    document.title = lang === "en" ? titleEn : titleFr;
    btns.forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
    });
  }

  var lang = "fr";
  try {
    var q = new URLSearchParams(location.search).get("lang");
    var saved = localStorage.getItem(KEY);
    if (q === "en" || q === "fr") lang = q;
    else if (saved === "en" || saved === "fr") lang = saved;
  } catch (e) {}
  apply(lang);

  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      apply(b.dataset.lang);
      try { localStorage.setItem(KEY, b.dataset.lang); } catch (e) {}
    });
  });
})();
