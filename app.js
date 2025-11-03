const seeLess = document.querySelector("#shrink");
const menu = document.querySelector(".hamburger");
const menuHand = document.querySelectorAll(".hamburger div");
const hamburgerMenu = document.querySelector(".hamburger__menu");
const hamburgerLinks = document.querySelectorAll(".hamburger__menu div a");
const openForm = document.querySelector("#contact-form");
const form = document.querySelector("#my-form");
const input = document.querySelectorAll(".input");
const socials = document.querySelector(".socials");
const statusBar = document.querySelector(".btn");

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
        statusBar.classList.remove("visible");
    }
}
openForm.onclick = openFormBtn;

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                status.innerHTML = "Thanks for your submission!";
                form.reset();
            } else {
                response.json().then((data) => {
                    if (Object.hasOwn(data, "errors")) {
                        status.innerHTML = data["errors"]
                            .map((error) => error["message"])
                            .join(", ");
                    } else {
                        status.innerHTML =
                            "Oops! There was a problem submitting your form";
                    }
                });
            }
        })
        .catch(() => {
            status.innerHTML = "Oops! There was a problem submitting your form";
        });
    for (let i = 0; i < input.length; i++) {
        input[i].value = "";
    }
    setTimeout(() => {
        statusBar.classList.add("visible");
    }, 1000);
    document.querySelector("submit").style.color = "white";
}
form.addEventListener("submit", handleSubmit);
