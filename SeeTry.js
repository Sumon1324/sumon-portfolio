var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
    typeSpeed: 80,
    backSpeed: 80,
});

const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
