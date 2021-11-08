// First carousel
$('.slide-one').owlCarousel({
    items: 6,
    stagePadding: 20,
    loop:false,
    margin:5,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:6,
            nav:false,
            loop:false
        }
    }
})
// First carousel custom buttons
const owl = $('.slide-one');
$('.customNextBtn').click(function() {
  owl.trigger('next.owl.carousel');
});
$('.customPreviousBtn').click(function() {
  owl.trigger('prev.owl.carousel', [300]);
});
// Second carousel
$('.slide-two').owlCarousel({
  items: 4,
  stagePadding: 20,
  loop:true,
  margin:32,
  nav:false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:4,
          nav:false,
          loop:true
      }
  }
})
// Three carousel custom buttons
const owlTwo = $('.slide-two');
$('.customNextBtnTwo').click(function() {
  owlTwo.trigger('next.owl.carousel');
 });
 $('.customPreviousBtnTwo').click(function() {
  owlTwo.trigger('prev.owl.carousel', [300]);
});
// Three carousel
$('.slide-three').owlCarousel({
  items: 4,
  stagePadding: 20,
  loop:true,
  margin:48,
  nav:false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:4,
          nav:false,
          loop:true
      }
  }
})
// Four carousel custom buttons
const owlThree = $('.slide-three');
$('.customNextBtnThree').click(function() {
  owlThree.trigger('next.owl.carousel');
 });
 $('.customPreviousBtnThree').click(function() {
  owlThree.trigger('prev.owl.carousel', [300]);
});
// Four carousel
$('.slide-four').owlCarousel({
  items: 3,
  stagePadding: 20,
  loop:false,
  margin:50,
  nav:false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
          loop:true
      },
      600:{
          items:2,
          nav:false,
          nav:false
      },
      1000:{
          items:3,
          nav:false,
          loop:false
      }
  }
})
// Four carousel custom buttons
const owlFour = $('.slide-four');
$('.customNextBtnFour').click(function() {
  owlFour.trigger('next.owl.carousel');
 });
 $('.customPreviousBtnFour').click(function() {
  owlFour.trigger('prev.owl.carousel', [300]);
});