/*================================
	This Code is Written beautifully by Aarati Sunnar.
==================================*/

/*======================================
	[Table of Contents]

1. Main Navigation Js

2. Accordion for FAQ.


=====================================*/


/*===============================
	Calling Init Functions:
============================*/
$(document).ready(function() {

	//Calling Init Functions:
	initAccordion();


    $('.site-header .menu .menu-bar .fa-bars').click(function() {
        $('body').addClass('open-menu');
    });

    $('.site-header .menu .btn-close .fa-times').click(function() {
        $('body').removeClass('open-menu');
    });

    function initAccordion(){

	    var action = "click";
	    var speed = "500";
	    // Question handler
	    $('.question-section .row .text-holder ul li h2').on(action, function() {
	        // Get next element
	        $(this).next()
	            .slideToggle(speed)
	            // Select all other answers
	            .siblings('.question-section .row .text-holder ul li p')
	            .slideUp();
	    })
	}
});
// /------------------------------------------testomonial-slider----------------------/ 

$('.testimonial-section .row').owlCarousel({
    loop:true,
    margin: 0,
    responsiveClass:true,
    items: 1
})
// /===================================client-section-=======================================/

 $('.client-section .slider-holder').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 1000,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false
        }
    }
})