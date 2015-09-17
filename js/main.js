
$(document).ready(function(){

/*--- Fixed position changer shit ---*/

$(function() {  
    var navTop = $('.menu-links').offset().top;
    var footerTop = $('#site-footer').offset().top;  

    var stickyNav = function(){  
        var scrollTop = $(window).scrollTop();  

        if (scrollTop > navTop) {   
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
            $('.sidebar').css('top', '22em');
            $('.sidebar-lunch').css('top', '22em')
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
      };
    unmatch : function() {
        $('#up-arrow').css('display','none');
    };

    });
 
        // scroll body to 0px on click
        $('#up-arrow').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });



/* ----- Box Shadow Changes on click ------- */

  $(".button-link, .menu-link, .logo-img").mousedown(function(){
  	$(this).css("box-shadow", "none");
  });
  $(".button-link, .menu-link, .logo-img").mouseup(function(){
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

  enquire.register("screen and (min-width:975px)",{
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



});

