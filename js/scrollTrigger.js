let windowWidth = $(window).width();

const firstLine = CSSRulePlugin.getRule(".first_line:after");
const secondLine = CSSRulePlugin.getRule(".second_line:after");
const imgBg = CSSRulePlugin.getRule(".about__img_dist:after");
const imgWorks = CSSRulePlugin.getRule("#work_component_2:after");
const ltWorksTitle = CSSRulePlugin.getRule(".latest_works_ttl1:after");





// gsap.to('.text-circle',{
// scrollTrigger: {
//         trigger: '.text-circle',
//         start:'-350px center',
//         end: '5000px 100px',
//         scrub: 1,
//         toggleActions: 'restart pause reverse pause'
//     },
//     rotation:360,
//     duration: 40
// });

gsap.to('#about_rdl',{
    scrollTrigger: {
        trigger: '#about_rdl',
        start:'-150px center',
        end: '-100px 100px',
        scrub: 1
        // toggleActions: 'restart pause reverse pause',
        // markers: true
    },
    opacity: 0,
    width: 1,
    duration: 2
});




gsap.from('#about_rdl__3',{
    scrollTrigger: {
        trigger: '#about_rdl__3',
        start:'-150px center',
        end: '-100px 100px',
        scrub: 1
        // toggleActions: 'restart pause reverse pause',
        // markers: true
    },
    x: -500,
    opacity: 0,
    duration: 2
});
gsap.to('.about__img_dist',{
    scrollTrigger: {
        trigger: '.about__img_dist',
        start:'-350vh center',
        end: '100vh 100px',
        // scrub: 1,
        // // toggleActions: 'restart pause reverse pause',
        // markers: true
        // stagger: 3
    },
    y: -100
    
});
// gsap.from('.about__img_dist',{
//     scrollTrigger: {
//         trigger: '.sl',
//         start:'-350vh center',
//         end: '-100vh 100px',
//         scrub: 1,
//         // toggleActions: 'restart pause reverse pause',
//         // markers: true,
//         stagger: 5
//     },
//     opacity: 0
// });




gsap.to(firstLine, {
    scrollTrigger: {
        trigger: '#section_2',
        start:'-80vh center',
        end: '50vh 100px',
        scrub: 1
        // toggleActions: 'restart pause reverse pause',
        // markers: true
        
    },
    cssRule: {scaleY: 0}, 
    duration: 1
});



gsap.to(ltWorksTitle, {
    scrollTrigger: {
        trigger: '#lastest_worsks_container',
        start:'-80vh center',
        end: '50vh 100px',
        scrub: 1
        // toggleActions: 'restart pause reverse pause',
        // markers: true
        
    },
    cssRule: {scaleY: 0}, 
    duration: 1
});


////// about section image //////// 
gsap.to(imgBg, {
    scrollTrigger: {
        trigger: '#section_2',
        start:'-80vh center',
        end: '50vh 100px',
        scrub: 1
        // toggleActions: 'restart pause reverse pause',
        // markers: true
        
    },
    cssRule: {scaleY: 0}, 
    duration: 1
});

////// about section image //////// 
gsap.to('.about__img_dist', {
    scrollTrigger: {
        trigger: '#section_2',
        start:'-80vh center',
        end: '50vh 100px',
        scrub: 1
        // toggleActions: 'restart pause reverse pause',
        // markers: true
        
    },
    opacity: 1, 
    duration: 1
});


gsap.to(secondLine, {
    scrollTrigger: {
        trigger: '#section_2',
        start:'50vh center',
        end: '100vh 100px',
        scrub: 1
        // toggleActions: 'restart pause reverse pause',
        // markers: true
        
    },
    cssRule: {scaleY: 0}, 
    duration: 1
});
// gsap.to(rule, {cssRule: {scaleY: 0}, duration: 1 });
    


gsap.to('#slider__paragraph_2',{
    scrollTrigger: {
        trigger: '#slider__paragraph_2',
        start:'-350vh center',
        end: '130vh 100px',
        scrub: 1
        // // toggleActions: 'restart pause reverse pause',
        // markers: true
        // stagger: 3
    },
    x:-800,
    duration: 2
    
});



gsap.to('#latestW_redline__1',{
    scrollTrigger: {
        trigger: '#latestW_redline__1',
        start:'-100px center',
        end: '400vh 100px',
        scrub: 1
        // // toggleActions: 'restart pause reverse pause',
        // markers: true
        // stagger: 3
    },
    y: 55,
    backgroundColor: "#111111"
    // background: 'linear-gradient(217deg, #1f1f1f, #1f1f1f 70.71%),linear-gradient(127deg, #1f1f1f, #1f1f1f 70.71%),linear-gradient(336deg, #1f1f1f, #1f1f1f 70.71%)'
    
});

gsap.to('#latestW_redline__2',{
    scrollTrigger: {
        trigger: '#latestW_redline__2',
        start:'-350px center',
        end: '200px 100px',
        scrub: 1
        // // toggleActions: 'restart pause reverse pause',
        // markers: true
        // stagger: 3
    },
    x: 100
    // background: 'linear-gradient(217deg, #1f1f1f, #1f1f1f 70.71%),linear-gradient(127deg, #1f1f1f, #1f1f1f 70.71%),linear-gradient(336deg, #1f1f1f, #1f1f1f 70.71%)'
    
});

gsap.to('#latestW_redline__3',{
    scrollTrigger: {
        trigger: '#latestW_redline__3',
        start:'-350px center',
        end: '200px 100px',
        scrub: 1
        // // toggleActions: 'restart pause reverse pause',
        // markers: true
        // stagger: 3
    },
    x: -100
    // background: 'linear-gradient(217deg, #1f1f1f, #1f1f1f 70.71%),linear-gradient(127deg, #1f1f1f, #1f1f1f 70.71%),linear-gradient(336deg, #1f1f1f, #1f1f1f 70.71%)'
    
});






if (windowWidth > 795) 
    {
        gsap.to('#section_1',{
            scrollTrigger: {
                trigger: '#section_1',
                start:'20px top',
                end: '600px 100px',
                scrub: 1,
                markers: true
            },
            backgroundSize: 120,
            duration: 2
        });
        gsap.to('.slogan-chars',{
            scrollTrigger: {
                trigger: '.slogan-chars',
                start:'150px center',
                end: '400px 100px',
                scrub: 2,
                stagger: 0.5
                // toggleActions: 'restart pause reverse pause',
                // markers: true
            },
            opacity: 0,
            y: -50
        },'-=0.15');

        gsap.to('.home__subtitle',{
            scrollTrigger: {
                trigger: '.home__subtitle',
                start:'150px center',
                end: '400px 100px',
                scrub: 2,
                stagger: 0.5
                // toggleActions: 'restart pause reverse pause',
                // markers: true
            },
            opacity: 0,
            y: -30
        },'-=0.15');

        
        
    }


