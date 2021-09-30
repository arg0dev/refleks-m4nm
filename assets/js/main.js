$('#menu').on('click', function(){
    $('.menu').toggleClass('change');
    $('.sidenav').toggleClass('side-active');
});


$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    fade: true,
    adaptiveHeight: false,
    variableWidth: false,
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.multiple-items',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });
          