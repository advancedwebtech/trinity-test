$(document).ready(function () {
  $('.trinity__customers-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 5,
    responsive: [{
      breakpoint: 1199.98,
      settings: {
        arrows: false,
        dots: true,
        slidesToScroll: 2,
        slidesToShow: 2
      }
    }]
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('.trinity__navbar').addClass('trinity__navbar--sticky');
    } else {
      $('.trinity__navbar').removeClass('trinity__navbar--sticky');
    }
  });
});
