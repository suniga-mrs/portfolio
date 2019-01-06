$("#back-link").click( function() {
    // console.log("hello");
    
    
    $("#skillset").toggleClass("show-box");
    $("#skillset").toggleClass("hide-box");
    // $(".content").css("opacity", "1");
    // $("#view-link").removeClass("d-none");
    
});

$("#view-link").click( function() {
    // console.log("view");
    $("#skillset").toggleClass("show-box");
    $("#skillset").toggleClass("hide-box");
    // $(".content").css("opacity", "0");
    // $("#view-link").addClass("d-none");

    
});
