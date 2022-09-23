// import aboutAnim from './aboutAnim.js';

const images = document.querySelector('.latest_work_component');

var observer = new IntersectionObserver((entries) => {
    console.log(entries);

    if (entries.intersectionRatio = 0)
    {
        var tl = gsap.timeline({defaults:{duration: 0.75}});

        tl.from('.latest_work_component', {
            scaleY: 0,
            scaleX:0,
            y: 40,
            opacity: 0}, '-=0.15');
              
    }
  
})

observer.observe(images)