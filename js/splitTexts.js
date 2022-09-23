
var splitText = gsap.timeline(), 
    mySplitText = new SplitText("#quote", {type:"chars,words"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character
    words = mySplitText.words;
    lines = mySplitText.lines;

gsap.set("#quote", {perspective: 700});

splitText.from(words, {
    scrollTrigger: {
        trigger: words,
        start:'-180vh center',
        end: '-100vh 100px',
        scrub: 1,
        // // toggleActions: 'restart pause reverse pause',
        //  
        stagger: 0.05
},duration: 0.8, opacity:0, y:40, ease:"power1", stagger: 0.01}, "-=0.5");

function allDone(){
    mySplitText.revert();
}



