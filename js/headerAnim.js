

const tl = gsap.timeline({paused: true});

const navBar = gsap.timeline({defaults:{duration: 0.75, delay: 2}});


const sliderText = gsap.timeline({ defaults:{ease: "none"},
    onComplete: function() {
        console.log('finished');
        this.reverse();

    }
    
});

const cursorImg = gsap.timeline({ defaults:{ease: "none", repeat: -1},
    onComplete: function() {
        console.log('finished');
        this.reverse();

    }
    
});

const arrow = gsap.timeline({ defaults:{ease: "none", repeat: -1},
    onComplete: function() {
        console.log('finished');
        // this.reverse();

    }
    
});

arrow.to('.hero--arrow', {
    y: 200,
    duration: 1.5,
    

});


navBar.from('.nv-an', {
    y: -50,
    opacity: 0,
    duration: 1.4,
    stagger: {
        amount: 0.3,
        from: "center"
    }

});

sliderText.to('.slider--paragraph', {
    x: -300,
    duration: 25

});


// sliderBackgroundText.from('#slider__paragraph_2',{
//     x:1600,
//     duration:60
// });







// headerTitle.from('.home__subtitle', {
//     opacity: 0, 
//     stagger: 0.05}, 
//     '-=1.5');



tl.to('.nav-bar_bg', {
     
    height: "100vh",
    stagger: 0.09
    });

tl.to('#navBar_collapse', {
    height: "100vh",
    backgroundColor: '#000000',
    display: 'flex'});

tl.from('.navLink', {
    opacity: 0, 
    color: '#000000', 
    y: 50, 
    stagger: 0.05},
     '-=0.45');

tl.to('#menu_line-1', {
    
    
    stagger: 0,
    x: 50},
     '-=1');

tl.to('#menu_line-2', {

    
    stagger: 0,
    x: -50},
     '-=1');

tl.to('#menu_line-3', {

    
    stagger: 0,
    opacity: 1,
    scaleY: 1},
     '-=0.5');

tl.to('#menu_line-4', {

    
    stagger: 0,
    opacity: 1,
    scaleY: 1},
     '-=0.5');

tl.reversed(true);

document.getElementById('burguer_button').addEventListener('click', function() {
    
    tl.reversed(!tl.reversed());
    tl.reversed() ? tl.reverse() : tl.play();

})



// var tl = gsap.timeline({defaults:{duration: 0.75}});



