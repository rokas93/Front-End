let hamburgerElement = document.querySelector(".fa-bars");
let menuElement = document.querySelector(".header__nav");

hamburgerElement.addEventListener("click", () =>
  menuElement.classList.toggle("active")
);
