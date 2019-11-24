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

//Adapted from Activity 5 - ended up not using due to difficulty getting POST to work correctly

document.addEventListener('DOMContentLoaded', aButton);
function aButton() {
    document.getElementById('contactSubmit').addEventListener('click', function (event) {
        // var apiKey="9b3dbc2d1985c6ee3339b389f4254b24";
        var newReq = new XMLHttpRequest();
        var enterInfo = { name: null, email:null};
        enterInfo.name = document.getElementById("userName").value;
        enterInfo.email = document.getElementById("userEmail").value;
        newReq.open('POST', 'http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php'+enterInfo.name+','+enterInfo.email, false);
        newReq.send(JSON.stringify(newReq.name));
        newReq.send(JSON.stringify(newReq.email));

        var response = JSON.parse(newReq.responseText);
        console.log(response);
        event.preventDefault();
    });
}