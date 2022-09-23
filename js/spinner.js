
window.onload = function () {
    const loadingText = gsap.timeline({defaults:{duration: 0.75, repeat: -1}});
   
    loadingText.to('.ld-char', {
        opacity: 1,  
        color: "#810000",
        stagger: 0.05}, 
        '-=0.15');
};

window.addEventListener('load', () => {
    // const preLoader = document.getElementById('onload');
    // // preLoader.classList.add('preload_finish');

    const preloader = gsap.timeline({
        defaults:{ease: Expo.easeIn},
        onComplete: function() {
            console.log('finished');
            
        }
    });
    
    
    preloader.to('#onload', {
        height: 0,
        duration: 2.3
    });

    // const loadingTextOff = gsap.timeline({defaults:{ease: Expo.easeIn}});
    
    
    // loadingTextOff.to('.ld-char', {
    //     opacity: 0,
    //     duration: 0.5
    // });
    const preloaderBG1 = gsap.timeline({defaults:{ease: Expo.easeIn}});
    
    preloaderBG1.to('.preload-background', {
        height: 0,
        duration: 2,
        stagger: 0.05
    },'-=0.15');


});


