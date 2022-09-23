$(window).scroll(function() 
{
    parallax();

});

function parallax() {

  var windowWidth = $(window).width();
  var wScroll = $(window).scrollTop();
  
//   $('.explore-box').css('',
//         -600+(wScroll*0.18)+'px')

//         $('.explore-box').css('background-position',
//         'center '+ (wScroll*0.057)+'px')
  if(windowWidth > 200)
  {
        $('.explore_box').css('left',
        (wScroll*0.13)+'px');
        $('.fd-txt').css('left',
        (wScroll*0.45)+'px');
        $('.explore-txt').css('right',
        (wScroll*0.45)+'px');

        // $('#section_1').css('background-position',
        // 'center '+ (wScroll*0.057)+'px');
    };

};
  