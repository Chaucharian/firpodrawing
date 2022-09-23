$(window).scroll(function() {
    parallax();


});

function parallax() {
  var windowWidth = $(window).width();
  var wScroll = $(window).scrollTop();

  if ( windowWidth > 768) {
    if(wScroll > 500){

        console.log(wScroll);
    
            $('.text-circle').css('mix-blend-mode', 'difference');
            $('.nav-bar').css('mix-blend-mode', 'difference');
      }
      else{
        $('.nav-bar').css('mix-blend-mode', 'normal');
        $('.text-circle').css('mix-blend-mode', 'normal');
          
      }
  }
};