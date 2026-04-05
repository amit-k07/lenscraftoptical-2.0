function makeCall() {
    if (confirm("Do you want to call the clinic?")) {
        window.location.href = "tel:+917040778485";
    }
}

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});