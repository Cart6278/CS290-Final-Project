// JavaScript source code

//adapted from https://www.w3schools.com/howto/howto_js_slideshow.asp see automatic slideshow
var sliderIndex = 1;
showSlide(sliderIndex);

function plusSlides(n) {
    showSlide(sliderIndex += n);
}

function curSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementByClassName("mainSlider");
    var dot = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;

    if (slideINdex > slides.length)
    { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlide, 15000);
}