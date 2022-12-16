$(document).ready(function(){
    $('.homepage__singer').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        Infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000, 
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
            breakpoint: 900,
            settings: {
            arrows: true,
            slidesToShow: 5
            }
            },
        ]
    })
})