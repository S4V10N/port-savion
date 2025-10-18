console.log("js is working");
const seeMore = document.querySelector("#expand");
const seeLess = document.querySelector("#shrink");
const accordion = document.querySelector(".projects__expand");

seeMore.addEventListener("click", () => {
    accordion.classList.add("visible");
    seeMore.classList.add("hidden");
})
seeLess.addEventListener("click" ,() => {
    accordion.classList.remove("visible");
        seeMore.classList.remove("hidden");
})