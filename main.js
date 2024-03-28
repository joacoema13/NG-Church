document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.querySelector(".nav__links");

  menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
  });
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__container a", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
      el: ".swiper-pagination",
  },
});
