console.log("js is working");
const seeMore = document.querySelector("#expand");
const seeLess = document.querySelector("#shrink");
const accordion = document.querySelector(".projects__expand");
const menu = document.querySelector(".hamburger")
const menuHand = document.querySelectorAll(".hamburger div");

seeMore.addEventListener("click", () => {
    accordion.classList.add("visible");
    seeMore.classList.add("hidden");
})
seeLess.addEventListener("click" ,() => {
    accordion.classList.remove("visible");
    seeMore.classList.remove("hidden");
    window.scrollTo({
        top: 3000,
        left: 0,
        behavior: "smooth"
    });
})
function xBtn () {
    menuHand[0].classList.add("x-one")
    menuHand[1].classList.add("x-none")
    menuHand[2].classList.add("x-two")
}
function hamburgerBtn () {
    menuHand[0].classList.remove("x-one")
    menuHand[1].classList.remove("x-none")
    menuHand[2].classList.remove("x-two")
}
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
})