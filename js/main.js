$(document).ready(function(){


/*--- Fixed position changer shit ---*/

var windw = this;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);
    
    $window.scroll(function(e){
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};

$('.sidebar').followTo(250);


/*--- Dropdown Menu Functionality ---*/



/* ----- Box Shadow Changes on click ------- */

  $(".button-link").mousedown(function(){
  	$(this).css("box-shadow", "none");
  });
  $(".button-link").mouseup(function(){
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



// ------ Media Queries ------ //

  enquire.register("screen and (min-width:1100px)",{
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

