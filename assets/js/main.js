// src/js/main.js
// Use the CDN Alpine that was loaded via <script src="/assets/alpine.min.js">
import { BOOKING_ENABLED } from "./config.js";
import { BIZ } from "./biz-data.js";

// Alpine is global from the CDN build
const A = window.Alpine;

// Set global stores so any component/page can read them
A.store("flags", { booking: BOOKING_ENABLED });
A.store("biz", BIZ);

document.addEventListener("DOMContentLoaded", () => {
  // Mark that reveal JS is loaded (used by CSS fail-safe)
  document.documentElement.classList.add("has-reveal-js");

  const elements = document.querySelectorAll("[data-reveal], .reveal");

  // --- iOS / Safari blank-screen fix ---
  const ua = window.navigator.userAgent || "";
  const isIOS =
    /iP(hone|ad|od)/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  // Helper: immediately show all reveal elements
  const revealAllNow = () => {
    elements.forEach((el) => el.classList.add("reveal--in"));
  };

  if (!("IntersectionObserver" in window)) {
    // Just show everything immediately to avoid any rendering bugs.
    revealAllNow();
  } 
  else {
    // Normal behavior for other browsers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const delay = parseFloat(el.getAttribute("data-reveal-delay") || "0");

          setTimeout(() => {
            el.classList.add("reveal--in");
          }, delay);

          observer.unobserve(el);
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
  }

  // ---- HERO PHONE (homepage) ----
  const heroPhone = document.querySelector("#hero-phone");
  if (heroPhone) {
    // visible text
    heroPhone.textContent = BIZ.phone || "";

    // tap-to-call link
    if (BIZ.phone_link) {
      heroPhone.href = `tel:${BIZ.phone_link}`;
    } else {
      heroPhone.removeAttribute("href");
    }
  }

  // Extra tiny Safari repaint nudge (harmless elsewhere)
  requestAnimationFrame(() => {
    document.body.style.webkitTransform = "translateZ(0)";
    requestAnimationFrame(() => {
      document.body.style.webkitTransform = "";
    });
  });
});

// Start Alpine
window.Alpine.start();
