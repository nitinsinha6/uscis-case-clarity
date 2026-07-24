"use strict";

(function initializeSite() {
  const config = window.SITE_CONFIG || {};
  const extensionUrl = config.extensionUrl || "#";
  const donationUrl = config.donationUrl || "#";
  const contactEmail = config.contactEmail || "";

  document.querySelectorAll("[data-extension-url]").forEach((element) => {
    element.href = extensionUrl;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
  });

  document.querySelectorAll("[data-donation-url]").forEach((element) => {
    element.href = donationUrl;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
  });

  document.querySelectorAll("[data-contact-email]").forEach((element) => {
    if (contactEmail) {
      element.href = `mailto:${contactEmail}`;
    }
  });

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const menuButton = document.getElementById("menuButton");
  const siteNav = document.getElementById("siteNav");

  if (menuButton && siteNav) {
    menuButton.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        siteNav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }
})();

(function emailSignup() {
  const emailInput = document.getElementById('emailInput');
  const saveBtn = document.getElementById('saveEmailBtn');
  if (!emailInput || !saveBtn) return;

  const stored = localStorage.getItem('userEmail');
  if (stored) {
    emailInput.value = stored;
    saveBtn.textContent = 'Saved';
    saveBtn.disabled = true;
  }

  function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

  saveBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (!validEmail(email)) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return;
    }
    localStorage.setItem('userEmail', email);
    saveBtn.textContent = 'Saved';
    saveBtn.disabled = true;
  });
})();
