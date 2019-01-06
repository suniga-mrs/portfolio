$("#back-link").click( function() {
    console.log("hello");

    $("#skillset").removeClass("show-box");
    $("#skillset").addClass("hide-box");
    $("#view-link").removeClass("d-none");
    
});

$("#view-link").click( function() {
    console.log("view");

    $("#skillset").removeClass("hide-box");
    $("#skillset").addClass("show-box");
    $("#view-link").addClass("d-none");
    
});
