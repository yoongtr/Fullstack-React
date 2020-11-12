$(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").on('click', function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
    });
    // $('[data-toggle="tooltip"]').tooltip();
    // Assignment 4 - Change data-* attributes into js
    $("#loginInput").on('click', function(){
        $("#loginModal").modal("toggle");
    });
    $("#reservationInput").on('click', function(){
        $("#reservationModal").modal("toggle");
    });

});