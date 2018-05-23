$(document).ready(function(){
    $('.slider').slick({
        fade: true,
        infinite: true,
        speed: 500
    });

    addArrowOnSlider ();

});

function addArrowOnSlider () {
    $('.slick-prev').text('').append('<i class="fa fa-angle-left" aria-hidden="true"></i>');
    $('.slick-next').text('').append('<i class="fa fa-angle-right" aria-hidden="true"></i>');
}