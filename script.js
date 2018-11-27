function secretGift() {
    if(document.getElementById("gift").display == "none"){

    }
        $(document).ready(function(){
                $("#gift").fadeIn(2000);
            });
            playGiftAudio();
        }

function foundGift(){
    //alert("Tillykke du har fundet gaven! :D");
    $(document).ready(function(){
        $("#gift").fadeOut(1500);
    });

    $(document).ready(function(){
        $("#mickey").fadeIn(1500);
    });

    $(document).ready(function(){
        $("#mickeyText").fadeIn(1500);
    });
playSurpriseAudio();
}

function mickeyBandit(){
   // alert("Den bandit!");
    $(document).ready(function(){
        $("#mlg").fadeIn(2000);
    });
    $(document).ready(function(){
        $("#mlg2").fadeIn(2000);
    });
    $(document).ready(function(){
        $("#smoke").fadeIn(2000);
    });
    var audio = document.getElementById("mlgAudio");
        audio.play();
}
function playGiftAudio(){
    var audioGift = document.getElementById("giftAudio");
    audioGift.play();
}
function playSurpriseAudio(){
    var audioSurprise = document.getElementById("surpriseAudio");
    audioSurprise.play();
}
function playChristmasAudio(){
    var audioChristmas = document.getElementById("christmasAudio");
    audioChristmas.play();
}
function pauseChristmasAudio(){
    var audioChristmas = document.getElementById("christmasAudio");
    audioChristmas.pause();
}
function github(){
    var win = window.open("https://github.com/Thom9521/Hjemmeside", "_blank");
    win.focus;
 }
