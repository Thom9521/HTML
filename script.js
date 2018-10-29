

function github(){
   var win = window.open("https://github.com/Thom9521/Hjemmeside", "_blank");
   win.focus;
}
//Virker ikke helt optimalt eftersom lyden ikke burde spilles når man kan se spøgelset.
function secretGhost() {
    if(document.getElementById("ghost").display = "none"){
        var audio = document.getElementById("ghostAudio");
        audio.play();
    }
    $(document).ready(function(){
                $("#ghost").fadeIn(2000);
            });
        }

function foundGhost(){
    alert("Du er en ægte spøgelsesjæger!");
    playHappyMusic();   
   
}
function playHappyMusic(){
    var audioHappy = document.getElementById("SLLAudio");
    var audioSpooky = document.getElementById("HalloweenAudio");
    audioSpooky.pause();
    audioHappy.play();
}

function playHalloweenMusic(){
    var audioSpooky = document.getElementById("HalloweenAudio");
    audioSpooky.play();
}

function pauseHalloweenMusic(){
    var audioSpooky = document.getElementById("HalloweenAudio");
    audioSpooky.pause();
}

