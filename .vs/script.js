// JavaScript source code


//Adapted from: https://guide.freecodecamp.org/javascript/tutorials/how-to-create-a-slideshow/
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

    var index = 0, time = 9000;
    slides[index].classList.add('active');

    setInterval(() => {
        slides[index].classList.remove('active');

        index++;
        if (index === slides.length) index = 0;

        slides[index].classList.add('active');

    }, time);
}