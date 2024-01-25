"use strict"

/* HERO SECTION */

const navIconEl = document.querySelector(".hero-section__nav-icon");
const navLinksEl = document.querySelector(".hero-section__nav-links");

navIconEl.addEventListener("click", switchIcon);


function switchIcon() {
  navIconEl.classList.toggle("nav--icon");

  if (navIconEl.classList.contains("nav--icon")) {
    navLinksEl.style.transform = `translateX(0)`;
  }

  else {
    navLinksEl.style.transform = `translateX(1000px)`;

  }

}