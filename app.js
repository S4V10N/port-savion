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
const inputLabel = document.querySelectorAll("label");
const textInput = document.querySelector("textarea");
const submitBtn = document.querySelector("#showbtn");
const socials = document.querySelector(".socials");

seeMore.addEventListener("click", () => {
    accordion.classList.add("height");
    seeMore.classList.add("hidden");
});
seeLess.addEventListener("click", () => {
    accordion.classList.remove("height");
    seeMore.classList.remove("hidden");
});
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
    menu.addEventListener("click", () => {
        dropDown();
        menu.addEventListener("click", () => {
            closeBtn();
            openTab();
        });
    });
}
openTab();

for (let i = 0; i < hamburgerLinks.length; i++) {
    hamburgerLinks[i].addEventListener("click", () => {
        closeBtn();
    });
}

function openFormBtn() {
    openForm.addEventListener("click", () => {
        socials.classList.add("hidden");
        form.classList.add("height");
        openForm.innerHTML = "close contact form";
        openForm.addEventListener("click", () => {
            setTimeout(() => {
                openForm.innerHTML = "fill contact form";
            }, 2000);
            form.classList.remove("height");
            socials.classList.remove("hidden");
            openFormBtn();
        });
    });
}
openFormBtn();
function displayLabel(input, number) {
    input.addEventListener("click", () => {
        inputLabel[number].classList.add("active");
    });
}
displayLabel(input[0], 0);
displayLabel(input[1], 1);
displayLabel(textInput, 2);

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
                status.innerHTML = "";
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
    form.reset();
}

submitBtn.addEventListener("submit", () => {
    handleSubmit();
    try {
        input[0].value = "";
        input[1].value = "";
        textInput.value = "";
        inputLabel[0].classList.remove("active");
    } catch {
        console.error("error");
    }
});
console.log(socials);
