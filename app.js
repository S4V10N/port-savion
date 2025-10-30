const seeMore = document.querySelector("#expand");
const seeLess = document.querySelector("#shrink");
const accordion = document.querySelector(".accordion");
const menu = document.querySelector(".hamburger");
const menuHand = document.querySelectorAll(".hamburger div");
const hamburgerMenu = document.querySelector(".hamburger__menu");
const hamburgerLinks = document.querySelectorAll(".hamburger__menu div a");
const openForm = document.querySelector("#contact-form");
const form = document.querySelector("#my-form");
const input = document.querySelectorAll("input");
const accordionItem = document.querySelectorAll(
    ".accordion .projects__expand .projects"
);
console.log(accordionItem);
const submitBtn = document.querySelector("#showbtn");
const socials = document.querySelector(".socials");
const successBtn = document.querySelector(".my-form");

function xBtn() {
    menuHand[0].classList.add("x-one");
    menuHand[1].classList.add("x-none");
    menuHand[2].classList.add("x-two");
}
function hamburger() {
    menuHand[0].classList.remove("x-one");
    menuHand[1].classList.remove("x-none");
    menuHand[2].classList.remove("x-two");
}
function dropDown() {
    hamburgerMenu.style.display = "flex";
    xBtn();
}
function closeBtn() {
    hamburgerMenu.style.display = "none";
    hamburger();
}
function openTab() {
    if (hamburgerMenu.style.display == "none") {
        dropDown();
    } else {
        closeBtn();
    }
}
menu.onclick = openTab;

for (let i = 0; i < hamburgerLinks.length; i++) {
    hamburgerLinks[i].addEventListener("click", () => {
        closeBtn();
    });
}
function openFormBtn() {
    if (getComputedStyle(form).height == "0px") {
        form.classList.add("height");
        openForm.innerHTML = "close contact form";
        socials.classList.add("hidden");
    } else {
        form.classList.remove("height");
        openForm.innerHTML = "fill contact form";
        setTimeout(() => {
            socials.classList.remove("hidden");
        }, 900);
        input;
    }
}
openForm.onclick = openFormBtn;

seeMore.addEventListener("click", () => {
    accordion.classList.add("hidden");
    seeMore.classList.add("hidden");
});
seeLess.addEventListener("click", () => {
    accordion.classList.remove("hidden");
    seeMore.classList.remove("hidden");
});
