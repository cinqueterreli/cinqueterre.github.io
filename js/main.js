$(document).ready(function(){


/*--- Dropdown Menu Functionality ---*/

/* if(!!('ontouchstart' in window)){//check for touch device
//behaviour and events for touch device
 $(".dropdown-link").click(function(){
    $(".dropdown-menu").slideToggle(500);
  });
}

else{ */
  
  $(".dropdown-link").mouseenter(function(){
    $(".dropdown-menu").slideDown(500);
  });

  $(".dropdown-menu").mouseleave(function(){
    $(".dropdown-menu").slideUp(200);
  });

  $('.no').mouseenter(function() {
        $(".dropdown-menu").slideUp(200);
  });


/* ----- Box Shadow Changes on click ------- */

  $(".category-image").mousedown(function(){
  	$(this).css("box-shadow", "none");
  });
  $(".category-image").mouseup(function(){
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

  enquire.register("screen and (max-width:1025px)",{
    match : function() {
      $('#3').insertBefore("#2");
      $('#5').insertBefore("#2");
    },
    unmatch : function() {
      $('#5').insertBefore("#6");
      $('#3').insertBefore("#4");
      $('#2').insertAfter('#1');
    }

  });



});

