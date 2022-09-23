

var callback = function (entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      // play the individual target.timeline
      entry.target.timeline.play();
    } else {
      //entry.target.timeline.pause(0);
    }
  });
};

var options = {
  threshold: 0.3, // target 'section' should be 60% visible
  rootMargin: '0px 0px -40% 0px'
  //rootMargin isn't active in a normal CodePen.
  //Change View: use DebugMode
};

var observer = new IntersectionObserver(callback, options);
var targets = document.querySelectorAll(".quote");

// a loop: create the individual target timelines
targets.forEach(function(target) {
  
  var thisImage = $(target).find('.quote');
  
  var splitChars = new SplitText(entry.target, { type: " words" });
  var chars = splitChars.chars;
  var words = splitChars.words;
  var tlChars = gsap.timeline({paused:true});

  tlChars
    .staggerFrom(
      thisImage,
      0.5,
      { y: 3, opacity: 0, ease: Power3.easeOut },
      0.012,
      "+=0"
    );

  // .from(thisImage, {opacity: 0, scaleY: 0, scaleX: 0, y: 200, duration: 1}, '-=0.55')
  // .from(thisText, {opacity: 0, duration: 1.5}, '-=0.15')
//   .from(thisText, {x: 500, duration:1, ease:'none'},0)
//   .from(thisCircle, {scale:0, transformOrigin:'center', duration:0.5}, '-=0.65')
//   .from(thisYear, {autoAlpha:0, duration:1})
  
  target.timeline = tlChars;
});

// Looping through the ELEMENTS and adding them as targets of the observer
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList#Example

  Array.prototype.forEach.call(targets, (el) => {observer.observe(el);});  