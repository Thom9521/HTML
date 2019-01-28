function programmeringNaestved(){
    var win = window.open("", "_blank");
    win.focus;
 }
function programmeringRoskilde(){
   var win = window.open("http://heho-easj.dk/HTML5&JSF2019/Webprogramming.html", "_blank");
   win.focus
}
 function systemudvikling(){
    var win = window.open("", "_blank");
    win.focus;
 }
 function teknik(){
    var win = window.open("", "_blank");
    win.focus;
 }
 function skema(){
   var win = window.open("https://ums.easj.dk/WebTimeTable/default.aspx", "_blank");
   win.focus;
}
 
 const secondHand = document.querySelector('.second-hand');
 const minsHand = document.querySelector('.min-hand');
 const hourHand = document.querySelector('.hour-hand');
 
 function setDate() {
   const now = new Date();
 
   const seconds = now.getSeconds();
   const secondsDegrees = ((seconds / 60) * 360) + 90;
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
 
   const mins = now.getMinutes();
   const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
   minsHand.style.transform = `rotate(${minsDegrees}deg)`;
 
   const hour = now.getHours();
   const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
 }
 
 setInterval(setDate, 1000);
 
 setDate();
 
 