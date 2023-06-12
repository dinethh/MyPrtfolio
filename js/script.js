
$(document).ready(function () {
    // Gallery Slider
    let scrollContainer = document.querySelector(".gallery");
    let backbtn = document.getElementById("back-btn");
    let forwardbtn = document.getElementById("forward-btn");

    backbtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 900;
    });
    forwardbtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 1000;
    });
}
);


 //Toggle menu
$(document).ready(function () {
    const hamber = document.querySelector(".hamber");
    const navMenu = document.querySelector(".navMenu");
    hamber.addEventListener("click", () => {
        hamber.classList.toggle("active");
        navMenu.classList.toggle("active");
    })
    document.querySelector(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamber.classList.remove("active");
        navMenu.classList.remove("active");
    }));
});
