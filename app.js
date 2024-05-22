let burger = document.querySelector(".burger")
let close = document.querySelector(".close")
let modal = document.querySelector(".modal")

burger.addEventListener("click", () => {
    modal.classList.add("show");
});
close.addEventListener("click", () => {
     modal.classList.remove("show");
});

