$('#menu').on('click', function(){
    $('.menu').toggleClass('change');
    $('.sidenav').toggleClass('side-active');
});

$(document).ready(function() {
  $('.lightbox').topbox();
});

$('.multiple-items').slick({
  
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    fade: false,
    adaptiveHeight: false,
    variableWidth: false,
    asNavFor: '.slider-nav, .tag',
  });

  $('.slider-nav').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.multiple-items, .tag',
    dots: false,
    centerMode: false,
    arrows: true,
    focusOnSelect: true,
		nextArrow: $('.next'),
		prevArrow: $('.prev')
  });
          
  $('.tag').slick({
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    fade: true,
    adaptiveHeight: false,
    variableWidth: false,
  });