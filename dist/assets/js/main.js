$(document).ready(function() {

    AOS.init();

    AOS.init({      
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 150, // values from 0 to 3000, with step 50ms
        duration: 500, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });

    $("#back-link").click( function() {
        
        $("#skillset").toggleClass("show-box");
        $("#skillset").toggleClass("hide-box");

        setTimeout( function() {
                $(".content").fadeTo("slow", 1);
                $("#masthead").fadeTo("slow", 1);
                $("#view-link").fadeIn("fast");

        }, 300);
    }); 

    $("#view-link").click( function() {

        setTimeout( function() {
            $("#masthead").fadeTo("slow", 0);
        }, 50);
        
        $(".content").fadeTo("slow", 0, function() {
            $("#view-link").fadeOut("fast");
            $("#skillset").toggleClass("show-box");
            $("#skillset").toggleClass("hide-box");
        });

    });
    
});






