$(document).ready(function(){
    // Initialize main carousel
    $('#main-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true
    });

    // Initialize thumbnails carousel
    $('#thumbnails-carousel').owlCarousel({
      loop: false,
      margin: 10,
      autoplay: false,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsiveClass:true,
      responsive:{
        0:{
          items:3,
        }
      }
    });

    // Sync main carousel with thumbnails carousel
    $('#thumbnails-carousel').on('click', '.owl-item', function(e){
      var index = $(this).index();
      $('#main-carousel').trigger('to.owl.carousel', [index, 300, true]);
    });

    $('.testimonial__slides').owlCarousel({
      loop: true,
      margin:10,
      nav: true,
      dots:false,
      items: 3,
      responsive: {
          0: {
              items: 1,
          },
          600: {
              items: 2,
          },
          1000: {
              items: 3,
          }
      }
  })
});