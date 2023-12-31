$(document).ready(function() {
  var slickSlider = $('.slider');

  slickSlider.slick({
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  slickSlider.on('mouseenter', function() {
    slickSlider.slick('slickPlay');
  });

  slickSlider.on('mouseleave', function() {
    slickSlider.slick('slickPlay');
  });
});
