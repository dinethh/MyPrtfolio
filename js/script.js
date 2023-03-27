$(document).ready(function(){
//  Text typer
var typed = new Typed(".auto-type", {
    strings: ["Web Developer", "Mobile App Developer", "UI/UX Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

// Project Counter
jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
}); 

});
