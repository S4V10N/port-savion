window.addEventListener('load', () => {
    window.scrollTo(0, 0);
})
const seeMore = document.querySelector("#expand");
const seeLess = document.querySelector("#shrink");
const accordion = document.querySelector(".projects__expand");
const menu = document.querySelector(".hamburger")
const menuHand = document.querySelectorAll(".hamburger div");
const hamburgerMenu = document.querySelector(".hamburger__menu");
const nav = document.querySelector("nav");

seeMore.addEventListener("click", () => {
    accordion.classList.add("visible");
    seeMore.classList.add("hidden");
})
seeLess.addEventListener("click" ,() => {
    accordion.classList.remove("visible");
    seeMore.classList.remove("hidden");
})
function xBtn() {
    menuHand[0].classList.add("x-one")
    menuHand[1].classList.add("x-none")
    menuHand[2].classList.add("x-two")
}
function hamburger() {
    menuHand[0].classList.remove("x-one")
    menuHand[1].classList.remove("x-none")
    menuHand[2].classList.remove("x-two")
}
function dropDown() {
    hamburgerMenu.style.display = "flex";
    xBtn()
}
function closeBtn() {
    hamburgerMenu.style.display = "none";
    hamburger()
}
function openTab() {
    menu.addEventListener("click", () => {
    dropDown();
    menu.addEventListener("click", () => {
        closeBtn();
        openTab();
    })
    });
}
openTab();