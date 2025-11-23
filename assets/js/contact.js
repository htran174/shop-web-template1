// /assets/js/contact.js
import { BIZ } from "/assets/js/biz-data.js";

const $ = (sel) => document.querySelector(sel);
const setText = (el, t) => el && (el.textContent = t || "");

document.addEventListener("DOMContentLoaded", () => {
  // Name
  setText($("#biz-name"), BIZ.name || "Diva Nails");

  // Address
  const addrEl = $("#biz-address");
  if (addrEl) {
    addrEl.href = BIZ.map_link || "#";
    addrEl.textContent = BIZ.address || "";
  }

  // Phone
  const phoneEl = $("#biz-phone");
  if (phoneEl) {
    const telRaw = (BIZ.phone_link || BIZ.phone || "").replace(/[^+\d]/g, "");
    phoneEl.href = telRaw ? `tel:${telRaw}` : "#";
    phoneEl.textContent = BIZ.phone || "";
  }

  // BOOK NOW Button (from BIZ.socials.Facebook)
  const bookBtn = $("#biz-book");
  if (bookBtn && BIZ.socials?.Facebook) {
    bookBtn.href = BIZ.socials.Facebook;
  }

  // Hours
  const hoursEl = $("#biz-hours");
  if (hoursEl && Array.isArray(BIZ.hours)) {
    hoursEl.innerHTML = BIZ.hours
      .map(h => `<li class="flex justify-between gap-8 text-[#f5f5f5]/90">
                  <span class="text-[#aaaaaa]">${h.label}</span>
                  <span>${h.value}</span>
                </li>`)
      .join("");
  }

  // Socials
  const socialsEl = $("#biz-socials");
  if (socialsEl && BIZ.socials) {
    socialsEl.innerHTML = Object.entries(BIZ.socials)
      .filter(([, url]) => !!url)
      .map(([name, url]) => `
        <a href="${url}" target="_blank" rel="noopener" class="social-link-gold" aria-label="${name}">
          ${icon(name.toLowerCase())}
        </a>
      `)
      .join("");
  }
});

function icon(kind) {
  switch (kind) {
    case "instagram":
      return `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5"></rect>
        <circle cx="12" cy="12" r="3.5"></circle>
        <circle cx="17.5" cy="6.5" r="1"></circle>
      </svg>`;
    case "facebook":
      return `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M14 9h3V6h-3a3 3 0 00-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9a1 1 0 011-1z"></path>
      </svg>`;
    case "tiktok":
      return `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M14 4v7.5a4.5 4.5 0 11-3.6-4.41"></path>
        <path d="M14 4c1.1 1.9 3 3.3 5 3.6"></path>
      </svg>`;
    default:
      return `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="9"></circle>
      </svg>`;
  }
}
