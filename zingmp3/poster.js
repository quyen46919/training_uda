$(document).ready(function(){
    $('.homepage__poster').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        Infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000, 
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    
    })
})