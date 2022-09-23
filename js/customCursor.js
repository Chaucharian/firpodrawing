

    (function () {
        
        const logotypeElements = document.querySelectorAll('.bigCursor-onHover');

        const cursor = document.querySelector('.cursor');
        const editCursor = e => {
                const { clientX: x, clientY: y } = e;
                cursor.style.left = x + 'px';
                cursor.style.top = y + 'px';
          };
    
        window.addEventListener('mousemove', editCursor);

        logotypeElements.forEach(container => {

            // Create our animation
            const toggleCursor = gsap.timeline({
              reversed: true, 
              paused: true, 
              defaults: {duration: 0.3}
            });
            
            toggleCursor
              .to(cursor, {backgroundColor: "#ff0000"})
              
            
            // Control the animation using event listeners
            container.addEventListener("mouseenter", () => toggleCursor.play());
            container.addEventListener("mouseleave", () => toggleCursor.reverse());
          });


    
    })();
    
