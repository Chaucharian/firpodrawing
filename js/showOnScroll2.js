$(document).ready(function() {
    siteInit.splitText();
  });
  
  var siteInit = {
    splitText: function() {
      var elements = document.querySelectorAll(".quote");
      var observerOptions = {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0]
      };
      var observer = new IntersectionObserver(observerCallback, observerOptions);
  
      elements.forEach(function(element) {
        observer.observe(element);
      });
  
      function observerCallback(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var splitChars = new SplitText(entry.target, { type: " words" });
            var chars = splitChars.chars;
            var words = splitChars.words;
            var tlChars = gsap.timeline()
  
            tlChars
              .staggerFrom(
                words,
                0.5,
                { y: 3, opacity: 0, ease: Power3.easeOut },
                0.012,
                "+=0"
              )
              
          }
        });
      }
    }
  };
  