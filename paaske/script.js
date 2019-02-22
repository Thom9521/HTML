window.onload=function changeEggImg(){
function findCookieContent(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}
var getGreenCookie = findCookieContent("greenEggFound");
var getYellowCookie = findCookieContent("yellowEggFound");
var getBlueCookie = findCookieContent("blueEggFound");
var getPurpleCookie = findCookieContent("purpleEggFound");
var getRedCookie = findCookieContent("redEggFound");

//Hvis cookie med navnet "eggsFound" ikke findes så sættes en cookie med indholdet 1
if (getGreenCookie) {
    document.getElementById("greenEggImg").src = "billeder/egg0.png"
}
if (getYellowCookie) {
    document.getElementById("yellowEggImg").src = "billeder/egg1.png"
}
if (getBlueCookie) {
    document.getElementById("blueEggImg").src = "billeder/egg2.png"
}
if (getPurpleCookie) {
    document.getElementById("purpleEggImg").src = "billeder/egg3.png"
}
if (getRedCookie) {
    document.getElementById("redEggImg").src = "billeder/egg4.png"
}

if(getGreenCookie && getYellowCookie && getBlueCookie && getPurpleCookie && getRedCookie){
    alert("Tillykke. Du har fundet alle de hemmelige æg. Kaninen er stolt af dig 🐰🥚😎")
}
}

//Function som finder cookie efter navn
function eggCookieCounter() {
    function findCookieContent(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }
    var getCookie = findCookieContent("eggsFound");
    //Hvis cookie med navnet "eggsFound" ikke findes så sættes en cookie med indholdet 1
    if (!getCookie) { document.cookie = "eggsFound=" + 1 + ";"+"path=/"; }
    //Hvis det findes så bliver indholdet plusset med 1
    else {
        var visitcount = findCookieContent("eggsFound");
        var eggsCountAdd = (Number(visitcount) + 1);
        document.cookie = "eggsFound=" + eggsCountAdd + ";"+"path=/"
    }
}


function eggCookieGreen() {
    function findCookieContent(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }
    var getCookie = findCookieContent("greenEggFound");
    //Hvis cookie med navnet "eggsFound" ikke findes så sættes en cookie med indholdet 1
    if (!getCookie) { document.cookie = "greenEggFound=" + 1 + ";"+"path=/"; }
}

function eggCookieYellow() {
    function findCookieContent(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }
    var getCookie = findCookieContent("yellowEggFound");
    //Hvis cookie med navnet "eggsFound" ikke findes så sættes en cookie med indholdet 1
    if (!getCookie) { document.cookie = "yellowEggFound=" + 1 + ";"+"path=/"; }
}
function eggCookieBlue() {
    function findCookieContent(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }
    var getCookie = findCookieContent("blueEggFound");
    //Hvis cookie med navnet "eggsFound" ikke findes så sættes en cookie med indholdet 1
    if (!getCookie) { document.cookie = "blueEggFound=" + 1 + ";"+"path=/"; }
}
function eggCookiePurple() {
    function findCookieContent(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }
    var getCookie = findCookieContent("purpleEggFound");
    //Hvis cookie med navnet "eggsFound" ikke findes så sættes en cookie med indholdet 1
    if (!getCookie) { document.cookie = "purpleEggFound=" + 1 + ";"+"path=/"; }
}
function eggCookieRed() {
    function findCookieContent(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }
    var getCookie = findCookieContent("redEggFound");
    //Hvis cookie med navnet "eggsFound" ikke findes så sættes en cookie med indholdet 1
    if (!getCookie) { document.cookie = "redEggFound=" + 1 + ";"+"path=/"; }
}

function github(){
    var win = window.open("https://github.com/Thom9521/Hjemmeside", "_blank");
    win.focus;
 }