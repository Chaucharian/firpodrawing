
const hideCursorElements = document.querySelectorAll('.menu_container');

hideCursorElements.forEach(container => {
    // Get the variables we're going to use
    // const cursor = container.querySelector('#menu_container'),
    const logo = container.querySelector('#porahoranada')
    
          
  
    // Create our animation
    const toggleCursor = gsap.timeline({
      reversed: true, 
      paused: true, 
      defaults: {duration: 0.3}
    });
    
    toggleCursor
      .to(logo, {rotation: 10})
      
    
    // Control the animation using event listeners
    container.addEventListener("mouseenter", () => toggleCursor.play());
    container.addEventListener("mouseleave", () => toggleCursor.reverse());
  
    
  });


  
const circleArrow = document.getElementById('arrow-circle');
const allWorksLink = document.getElementById('all_works_link');


 // Create our animation
const animateLink = gsap.timeline({
  reversed: true, 
  paused: true, 
  defaults: {duration: 0.3, ease: "back.out(1.7)"}
});

animateLink
  .to('#arrow_svg', {rotation: 180})
  .to('#link_line', {right: '0%'})
  .to('#arrow_line__1', {rotation: 35},'-=0.45')
  .to('#arrow_line__2', {rotation: -35},'-=0.45')
  .to('#arrow-circle', {x: -40, borderColor: '#ffffff49'},'-=0.45')
  


allWorksLink.addEventListener("mouseenter", () => animateLink.play());
allWorksLink.addEventListener("mouseleave", () => animateLink.reverse());


