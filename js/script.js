$(document).ready(function () {
    //  Text typer
    // var typed = new Typed(".auto-type", {
    //     strings: ["Web Developer", "Mobile App Developer", "UI/UX Designer"],
    //     typeSpeed: 50,
    //     backSpeed: 50,
    //     loop: true
    // });

    // // Project Counter
    // jQuery(document).ready(function ($) {
    //     $('.counter').counterUp({
    //         delay: 10,
    //         time: 1000
    //     });
    // })

 //Active Menu
    // const a = document.querySelectorAll(".links");
    // const sec = document.querySelectorAll("section");
    // function activeMenu() {
    //     let len = sec.length;
    //     while (--len && window.scrollY + 2.5 < sec[len].offsetTop) { }
    //     a.forEach(ltx => ltx.classList.remove("active"));
    //     a[len].classList.add("active");
    // }
    // activeMenu();
    // window.addEventListener("scroll", activeMenu);
    

     // Gallery Slider
    let scrollContainer=document.querySelector(".gallery");
    let backbtn=document.getElementById("back-btn");
    let forwardbtn=document.getElementById("forward-btn");

    // scrollContainer.addEventListener("wheel",(evt)=>{
    //     evt.preventDefault();
    //     scrollContainer.scrollLeft += evt.deltaY;
    //     scrollContainer.style.scrollBehavior ="auto";
    // });
    
    backbtn.addEventListener("click",()=>{
        scrollContainer.style.scrollBehavior ="smooth";
        scrollContainer.scrollLeft +=900;
    });
    forwardbtn.addEventListener("click",()=>{
        scrollContainer.style.scrollBehavior ="smooth";
        scrollContainer.scrollLeft -=1000;
    });


    //scrool up
           // =================== CHANGE BACKGROUND HEADER ==================================
function scrollHeader(){
    const header = document.getElementById('header');
    //when the scroll is greater than 80 viewpoint height, add the scroll-header class to header tag
    if(this.scrollY >= 80 ) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);
// =================== SHOW SCROLL UP ==================================
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is greater than 350 viewpoint height, add the show-scroll class to scroll-top class
    if(this.scrollY >= 350 ) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
} 

});
