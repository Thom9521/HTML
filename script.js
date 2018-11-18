function secretGift() {
    if(document.getElementById("gift").display == "none"){
        //var audio = document.getElementById("ghostAudio");
        //audio.play();
    }
    $(document).ready(function(){
                $("#gift").fadeIn(2000);
            });
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

}

function mickeyBandit(){
    alert("Den bandit!");
}