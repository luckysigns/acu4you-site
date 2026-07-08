/* Five Element Acupuncture — shared behaviour */
(function () {
  "use strict";

  /* mark that JS is running — enables the fade-up hidden state in CSS */
  document.documentElement.classList.add("js");

  /* ----- mobile menu ----- */
  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    var closeBtn = mobileNav.querySelector(".close-btn");
    var open = function () {
      mobileNav.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      var first = mobileNav.querySelector("a, button");
      if (first) first.focus();
    };
    var close = function () {
      mobileNav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      toggle.focus();
    };
    toggle.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    mobileNav.addEventListener("click", function (e) {
      if (e.target === mobileNav) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNav.classList.contains("open")) close();
    });
  }

  /* ----- reveal compact links in the top bar once the tree scrolls away ----- */
  var banner = document.querySelector(".tree-banner");
  if (banner && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      document.body.classList.toggle("scrolled", !entries[0].isIntersecting);
    }, { threshold: 0.05 }).observe(banner);
  }

  /* ----- gentle falling petals in the banner ----- */
  if (banner && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    for (var i = 0; i < 7; i++) {
      var petal = document.createElement("span");
      petal.className = "falling-petal";
      petal.style.left = (6 + Math.random() * 88) + "%";
      petal.style.animationDuration = (7 + Math.random() * 7) + "s";
      petal.style.animationDelay = (Math.random() * 9) + "s";
      banner.appendChild(petal);
    }
  }

  /* ----- fade-up on scroll ----- */
  var faders = document.querySelectorAll(".fade-up");
  if (faders.length && "IntersectionObserver" in window) {
    var fadeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          fadeObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    faders.forEach(function (el) { fadeObs.observe(el); });
  } else {
    faders.forEach(function (el) { el.classList.add("in"); });
  }

  /* ----- placeholder forms (until a form service is connected) -----
     Forms with data-placeholder="true" have no backend yet.
     Connect a service (e.g. Formspree/Basin), set the form's action URL,
     and remove the data-placeholder attribute. See README.md. */
  document.querySelectorAll("form[data-placeholder='true']").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      if (status) {
        status.textContent =
          "This form isn’t connected yet — please call 503.998.4281 and Hilarey will be happy to help.";
        status.classList.add("visible");
        status.setAttribute("role", "alert");
      }
    });
  });
})();
