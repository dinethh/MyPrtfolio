$(document).ready(function () {
 
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


  

});
