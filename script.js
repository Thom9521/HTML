

function github(){
    location.replace("https://github.com/Thom9521/Hjemmeside");
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
    document.getElementById("HalloweenAudio").pause();

   
}
function playHappyMusic(){
    var audio = document.getElementById("SLLAudio");
    audio.play();

}
window.onload = function() {
    document.getElementById("HalloweenAudio").play();
}
