var clock;

$(document).ready(function () {

    // Instantiate a counter
    clock = new FlipClock($('.clock'), 1000, {
        clockFace: 'Counter',
        autoStart: true,
        countdown: true,
        stop: function () {
            alert("El tiempo se acabo");
            window.location.replace("http://www.google.com");
        }
    });

});