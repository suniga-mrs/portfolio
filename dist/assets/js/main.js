$(document).ready(function() {

    AOS.init({

        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 600, // values from 0 to 3000, with step 50ms
        once: true, // whether animation should happen only once - while scrolling down

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






