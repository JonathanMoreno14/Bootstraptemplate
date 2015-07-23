

// Smooth scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// Modal for sign up/log in
$('#openBtn').click(function(){
$('#myModal').modal({show:true})
});


// Scrolling navbar change
$(document).ready(function(){
   var scroll_start = 0;
   var scrollchange = $('#lh');
   var offset = scrollchange.offset();
    if (scrollchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-inverse").css('background-color', 'rgba(0, 0, 0, 0.7)');
       } else {
          $('.navbar-inverse').css('background-color', 'transparent');
       }
   });
    }
});


// Navbar shrinks when scrolling
$(window).scroll(function() {
  if ($(document).scrollTop() > 150) {
    $('.navbar').addClass('shrink');
  } else {
    $('.navbar').removeClass('shrink');
  }
});
