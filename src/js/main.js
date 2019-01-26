$("#back-link").click( function() {
    
    $("#skillset").toggleClass("show-box");
    $("#skillset").toggleClass("hide-box");
    setTimeout( () => {
        $(".content").fadeTo("slow", 1);
        $("#masthead").fadeTo("slow", 1);
        $("#view-link").fadeIn("fast");
    }, 300);
    
});

$("#view-link").click( function() {
    // console.log("view");
   
    
    setTimeout( () => {
        $("#masthead").fadeTo("slow", 0);
    }, 50);
    $(".content").fadeTo("slow", 0, () => {
        $("#view-link").fadeOut("fast");
        $("#skillset").toggleClass("show-box");
        $("#skillset").toggleClass("hide-box");
    } );

    
    // $("#view-link").addClass("d-none");

    
});
