(function () {
  "use strict";

  var SUPPORTED = ["en", "de"];
  var STORAGE_KEY = "gg-lang";

  function detect() {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("de") === 0 ? "de" : "en";
  }

  window.GG_LANG = detect();

  window.ggSetLang = function (lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    window.GG_LANG = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    window.dispatchEvent(new CustomEvent("gg-langchange", { detail: { lang: lang } }));
  };

  function injectToggle() {
    var nav = document.getElementById("game-nav");
    if (!nav || document.getElementById("gg-lang-toggle")) return;

    var sep = document.createElement("span");
    sep.setAttribute("aria-hidden", "true");
    sep.style.color = "#5a6072";
    sep.textContent = "·";

    var btn = document.createElement("button");
    btn.id = "gg-lang-toggle";
    btn.type = "button";
    btn.title = "Switch language";
    btn.style.cssText =
      "background:none;border:none;padding:0;margin:0;font:inherit;color:#8fd8e8;cursor:pointer";
    btn.textContent = window.GG_LANG.toUpperCase();

    btn.addEventListener("click", function () {
      window.ggSetLang(window.GG_LANG === "en" ? "de" : "en");
    });

    window.addEventListener("gg-langchange", function (e) {
      btn.textContent = e.detail.lang.toUpperCase();
    });

    nav.appendChild(sep);
    nav.appendChild(btn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectToggle);
  } else {
    injectToggle();
  }
})();
