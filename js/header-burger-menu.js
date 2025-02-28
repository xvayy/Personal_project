const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav");
const body = document.querySelector("body");

burger.addEventListener("click", function () {
    menu.classList.toggle("header__nav--active");
    burger.classList.toggle("header__burger--active");
    body.classList.toggle("lock");
});