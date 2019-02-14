$(document).ready(function() {

    AOS.init();

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






