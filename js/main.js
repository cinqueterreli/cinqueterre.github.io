
$(document).ready(function(){


/*--- Fixed position changer shit ---*/

$('.sidebar').hide();
$('.sidebar-lunch').hide();

$(function() {  
    var navTop = $('.menu-links').offset().top;
    var footerTop = $('#site-footer').offset().top;  

    var stickyNav = function(){  
        var scrollTop = $(window).scrollTop();  

        if (scrollTop > navTop) {   
            $('.sidebar').show();
            $('.sidebar-lunch').show();
            $('.sidebar').addClass('sticky');
            $('.sidebar-lunch').addClass('sticky-lunch');  
        } else {  
            $('.sidebar').removeClass('sticky');
            $('.sidebar-lunch').removeClass('sticky-lunch');     
        }

        if (scrollTop > footerTop - 1100) {
            $('.sidebar').removeClass('sticky');
            $('.sidebar').css('top', '265em');
            $('sidebar-lunch').removeClass('sticky-lunch');
            $('sidebar-lunch').css('top', '230em');
        }  else {  
            $('.sidebar').css('top', '25em');
            $('.sidebar-lunch').css('top', '25em')
        }

    };  

    $(window).scroll(function() {  
        stickyNav();  
      });

}); 

$('.sidebar-link').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});

$('.location-link, .location-link-default').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});


/*--- Get Day of Week for Weekly Events ---*/

    if (new Date().getDay() == '3') {
      $('#ladiesnight').css('display', 'inline');
    } else if (new Date().getDay() == '5') {
      $('#pedrotorres').css('display', 'inline');
    } else if (new Date().getDay() == '4') {
      $('#karaoke').css('display', 'inline');
    } else {
      $('#ladiesnight', '#pedrotorres', '#karaoke').css('display', 'none');
    }

console.log(new Date().getDay());

/*--- Up Arrow Function ---*/

enquire.register("screen and (min-width:975px)",{
    match : function() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#up-arrow').fadeIn();
            } else {
                $('#up-arrow').fadeOut();
            }
        });
      },
    unmatch : function() {
        $('#up-arrow').css('display','none');
    }

    });
 
        // scroll body to 0px on click
        $('#up-arrow').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });



/* ----- Box Shadow Changes on click ------- */

  $(".button-link, .menu-link, .logo-img, .location-link-default").mousedown(function(){
  	$(this).css("box-shadow", "none");
  });
  $(".button-link, .menu-link, .logo-img, .location-link-default").mouseup(function(){
    $(this).css("box-shadow", "3px 3px 3px 3px rgba(0, 0, 0, .5)");
  });


/* -------- Hamburger ----------- */

  $('.hamburger').click(function(){
    $('.mobile-nav').slideDown(500);
    $(this).css("display", "none")
    $('.x').css("display", 'inline-block')
  });

    $('.x').click(function(){
    $('.mobile-nav').slideUp(500);
    $(this).css("display", "none")
    $('.hamburger').css("display", 'inline-block')
  });


/* --- image changes for social links --- */

 $('#facebook').mouseenter(function(){
  $(this).attr("src", "/images/facebookactive.gif")
 });

 $('#facebook').mouseleave(function(){
  $(this).attr("src", "/images/facebook.gif")
 });


 $('#instagram').mouseenter(function(){
  $(this).attr("src", "/images/instagramactive.gif")
 });

 $('#instagram').mouseleave(function(){
  $(this).attr("src", "/images/instagram.gif")
 });


 $('#twitter').mouseenter(function(){
  $(this).attr("src", "/images/twitteractive.gif")
 });

 $('#twitter').mouseleave(function(){
  $(this).attr("src", "/images/twitter.gif")
 });


// ------ Media Queries ------ //

  enquire.register("screen and (min-width:1125px)",{
    match : function() {
      $('.mobile-nav').css('display', 'none')
      $('.x').css('display','none')
      $('.hamburger').css('display', 'none')
    },
    unmatch : function() {
      $('.hamburger').css('display', 'inline-block')
    } 

  });

  enquire.register("screen and (max-width:700px)",{
    match : function() {
      $('#2').insertBefore("#3");
      $('#4').insertBefore("#3");
      $('#6').insertBefore("#7");
      $('#8').insertBefore("#7");
      $('#menubut').insertAfter("#menuimg");
      $('#cateringbut').insertAfter("#cateringimg");
      $('#eventsbut').insertAfter("#eventsimg");
      $('#aboutbut').insertAfter("#aboutimg");
      
    },
    unmatch : function() {
      $('#menubut').insertAfter("#menupara");
      $('#cateringbut').insertAfter("#cateringpara");
      $('#eventsbut').insertAfter("#eventspara");
      $('#aboutbut').insertAfter("#aboutpara");
      $("#2").detach().appendTo('#col2');
      $("#4").detach().appendTo('#col2');
      $("#6").detach().appendTo('#col2');
      $("#8").detach().appendTo('#col2');
    }

  });

$(function() {
$('.home-slider').unslider({
//  Should the slider move on its own or only when
//  you interact with the nav/arrows?
//  Only accepts boolean true/false.
autoplay: true,

//  3 second delay between slides moving, pass
//  as a number in milliseconds.
delay: 3000,

//  <a href="http://www.jqueryscript.net/animation/">Animation</a> speed in millseconds
speed: 750,

//  An easing string to use. If you're using Velocity, use a
//  Velocity string otherwise you can use jQuery/jQ UI options.
easing: 'swing', // [.42, 0, .58, 1],

//  Does it support keyboard arrows?
//  Can pass either true or false -
//  or an object with the keycodes, like so:
//  {
//   prev: 37,
//   next: 39
// }
//  You can call any internal method name
//  before the keycode and it'll be called.
keys: {
  prev: 37,
  next: 39
},

//  Do you want to generate clickable navigation
//  to skip to each slide? Accepts boolean true/false or
//  a callback function per item to generate.
nav: true,

//  Should there be left/right arrows to go back/forth?
//   -> This isn't keyboard support.
//  Either set true/false, or an object with the HTML
//  elements for each arrow like below:
arrows: {
  prev: '<a class="' + self._ + '-arrow prev">←</a>',
  next: '<a class="' + self._ + '-arrow next">→</a>'
},

//  How should Unslider animate?
//  It can do one of the following types:
//  "fade": each slide fades in to each other
//  "horizontal": each slide moves from left to right
//  "vertical": each slide moves from top to bottom
animation: 'horizontal',

//  If you don't want to use a list to display your slides,
//  you can change it here. Not recommended and you'll need
//  to adjust the CSS accordingly.
selectors: {
  container: 'ul:first',
  slides: 'li'
},

//  Do you want to animate the heights of each slide as
//  it moves
animateHeight: false,

//  Active class for the nav
activeClass: self._ + '-active',

//  Have swipe support?
//  You can set this here with a boolean and always use
//  initSwipe/destroySwipe later on.
swipe: true
});
});



});

