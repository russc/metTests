function time() {
    var d = new Date();
    var t = d.getTime();
    return t;
}


var metId = 0;


//use setTimeout() with a call back to run function on different //intervals

function stop(metId) {

    clearInterval(metId);
}
function metSound(){
    var audio = document.createElement("audio");
    audio.src = "http://www.beyondrehearsal.org/audioclips/metsound.wav";
    audio.addEventListener("ended", function() {
        document.removeChild
    }, false);
    audio.play();
}

function runMet(tempo) {

    metId = setInterval(function () {
        var tick = time() - prev;
        $("#original").prepend(tick + " quarter </br>");


        prev = time();

        metSound();

        $("#met").animate({
            "opacity": .01,
                "height": '35px',
                "width": '35px',
                "margin-top": '30px'
        }, tempo, function () {
            $(this).css({
                "opacity": 1,
                    "height": '50px',
                    "width": '50px',
                    "margin-top": '15px'

            })
        });
    }, tempo);
}

var t = 0;

function func() {
    var arr = [500, 1000, 500, 1500, 200];

    if (t < arr.length) {

        if (t == 500) {
            var n = "quarter";
        } else {
            n = t;
        }

        $("#values").append(arr[t] + " " + t + "</br>");
        t++;
        timer = setTimeout(func, arr[t]);

    } else {
        $("#values").append("End. </br>");
        clearTimeout(timer);
    }
}
var timer = setTimeout(func, 1000);



//READY//

$(function () {
    var last = 0;
    $("#tap").click(function () {

        var clicked = time() - last;

        $("#values").prepend(clicked + "</br>");

        last = time();
    });

    prev = time();

    $("#start").click(function () {

        runMet(500);


    });
    $("#stop").click(function () {
        stop(metId);
    });
    $("#clear").click(function () {
        clearTimeout(timer);
    });
    $("#reset").click(function () {
        $(".box").html("");
    });


});

//END READY///
