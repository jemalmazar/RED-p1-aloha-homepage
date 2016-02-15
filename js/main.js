$(function() {

  // bxSlider
  $('.bxslider').bxSlider({
    controls: false,
    auto: true,
    infiniteLoop: true,
    maxSlides: 4,
    slideMargin: 0,
    slideWidth: 0

  });

  // Smooth Scroll

  $('.nav-menu a').click(function(){

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });

  // Subscription Alert

  $('.sign-up-form').on('submit', function(event) {

     event.preventDefault();
     if ($('input[type="email"]').val().length !== 0 ) {
        alert('Thank you for subscribing!');
     }
     else
     {
        alert('Please enter a valid email address.');
     }
  });

});
