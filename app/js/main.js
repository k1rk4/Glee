$(function() {

   $('.product-list__filter-btn').on('click', function () {
    $('.product-list__filters').slideToggle();
  })

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-one__num').styler();

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
     responsive: [
      {
      breakpoint: 1231,
      settings: {
       draggable: true,
       fade: false,
      }
    },
    ]
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.01,
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });
  
   $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $(".star").rateYo({
    starWidth: "10px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });

  $(".star__big").rateYo({
    starWidth: "17px",
    spacing: "10px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });

})