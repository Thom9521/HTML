function programmering(){
    var win = window.open("https://docs.google.com/document/d/1ukBo0v6Fg-fvH6CUl5UgeBjoEGDgKHqUnjYP0VUyZkw/edit", "_blank");
    win.focus;
 }
 function systemudvikling(){
    var win = window.open("https://docs.google.com/document/d/19PqnX2SsaVSbK2-THF3F6j_3T9eBYIF9W-PHCiHjYSI/edit", "_blank");
    win.focus;
 }
 function teknik(){
    var win = window.open("https://fronter.com/easj/links/files.phtml/1122601210$274567995$/Resources/Course+materials/3.+semester/Teknologi/Teknologi+3.+semester+2H2018.pdf", "_blank");
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
 
 