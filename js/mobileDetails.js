let bigPoppa = document.getElementById('main_container');
let leftBrand = document.getElementById('afasf');


//// redlines turn off when mobile

let redLine2 = document.getElementById('latestW_redline__2');
let redLine3 = document.getElementById('latestW_redline__3');

//// horizontal parallax turn off when mobile

let heroTitle_1 = document.getElementById('header_title');
let heroTitle_2 = document.getElementById('header_subtitle');


//// window width 
let w = window.innerWidth

//// change work brand position - replace "pencils and markers"

let supraMobile = document.getElementById('supra-brand_mobile');

if (w < 600 ) {
    supraMobile.textContent = "Toyota Supra GR";
}else{
    supraMobile.textContent = "Pencils & Markers";
}



///// if window : 600px remove classes ? nothing

if (w < 600) {
    bigPoppa.classList.remove('luxy_wrapper');
    console.log('no smooth scroll');

    redLine2.classList.remove('red-line');
    redLine3.classList.remove('red-line');

    heroTitle_1.classList.remove('luxy-el');
    heroTitle_2.classList.remove('luxy-el');

    

    

    

}