let windowWidth = $(window).width();

if (windowWidth > 795) 
    {
        gsap.to('#section_1',{
            scrollTrigger: {
                trigger: '#section_1',
                start:'20px top',
                end: '600px 100px',
                scrub: 1,
            },
            backgroundSize: 120,
            duration: 2
        });

    }