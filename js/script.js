$(document).ready(function () {
    //  Text typer
    var typed = new Typed(".auto-type", {
        strings: ["Web Developer", "Mobile App Developer", "UI/UX Designer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // // Project Counter
    jQuery(document).ready(function ($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    })

 //Active Menu
    const a = document.querySelectorAll(".links");
    const sec = document.querySelectorAll("section");
    function activeMenu() {
        let len = sec.length;
        while (--len && window.scrollY + 2.5 < sec[len].offsetTop) { }
        a.forEach(ltx => ltx.classList.remove("active"));
        a[len].classList.add("active");
    }
    activeMenu();
    window.addEventListener("scroll", activeMenu);
   
});
