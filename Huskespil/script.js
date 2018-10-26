var openF1 = false;
var openF2 = false;
var openC1 = false;
var openC2 = false;
var openD1 = false;
var openD2 = false;
var openE1 = false;
var openE2 = false;
var openG1 = false;
var openG2 = false;
var openI1 = false;
var openI2 = false;
var openS1 = false;
var openS2 = false;
var openW1 = false;
var openW2 = false;
var openCard = false;
var doneF1 = false;
var doneF2 = false;
var doneC1 = false;
var doneC2 = false;
var doneD1 = false;
var doneD2 = false;
var doneE1 = false;
var doneE2 = false;
var doneG1 = false;
var doneG2 = false;
var doneI1 = false;
var doneI2 = false;
var doneS1 = false;
var doneS2 = false;
var doneW1 = false;
var doneW2 = false;
var openCard = false;
var delayInMilliseconds = 800; //0.8 sekunder

function goRed(){
    openCard = false;
    setTimeout(function(){
        
    if(openF1 = true && doneF1 == false){
        document.getElementById("firefox1").src = "billeder/squareRed.jpg";
        openF1 = false;
    }
    if(openF2 = true && doneF2 == false){
        document.getElementById("firefox2").src = "billeder/squareRed.jpg";
        openF2 = false;
    }
    if(openC1 = true && doneC1 == false){
        document.getElementById("chrome1").src = "billeder/squareRed.jpg"
        openC1 = false;
    }
    if(openC2 = true && doneC2 == false){
        document.getElementById("chrome2").src = "billeder/squareRed.jpg"
        openC2 = false;
    }
    if(openD1 = true && doneD1 == false){
        document.getElementById("discord1").src = "billeder/squareRed.jpg"
        openD1 = false;
    }
    if(openD2 = true && doneD2 == false){
        document.getElementById("discord2").src = "billeder/squareRed.jpg"
        openD2 = false;
    }
    if(openE1 = true && doneE1 == false){
        document.getElementById("explorer1").src = "billeder/squareRed.jpg"
        openE1 = false;
    }
    if(openE2 = true && doneE2 == false){
        document.getElementById("explorer2").src = "billeder/squareRed.jpg"
        openE2 = false;
    }
    if(openG1 = true && doneG1 == false){
        document.getElementById("github1").src = "billeder/squareRed.jpg"
        openG1 = false;
    }
    if(openG2 = true && doneG2 == false){
        document.getElementById("github2").src = "billeder/squareRed.jpg"
        openG2 = false;
    }
    if(openI1 = true && doneI1 == false){
        document.getElementById("intellij1").src = "billeder/squareRed.jpg"
        openI1 = false;
    }
    if(openI2 = true && doneI2 == false){
        document.getElementById("intellij2").src = "billeder/squareRed.jpg"
        openI2 = false;
    }
    if(openS1 = true && doneS1 == false){
        document.getElementById("safari1").src = "billeder/squareRed.jpg"
        openS1 = false;
    }
    if(openS2 = true && doneS2 == false){
        document.getElementById("safari2").src = "billeder/squareRed.jpg"
        openS2 = false;
    }
    if(openW1 = true && doneW1 == false){
        document.getElementById("windows1").src = "billeder/squareRed.jpg"
        openW1 = false;
    }
    if(openW2 = true && doneW2 == false){
        document.getElementById("windows2").src = "billeder/squareRed.jpg"
        openW2 = false;
    }
}, delayInMilliseconds);
}

function checkF1(){
    if (document.getElementById("firefox1").src ="billeder/squareRed.jpg" && openF2 == false && openCard == false){
        document.getElementById("firefox1").src = "billeder/firefox.png";   
        openF1 = true;
        openCard = true;
    }
    else if (document.getElementById("firefox1").src ="billeder/squareRed.jpg" && openF2 == true){
        document.getElementById("firefox1").src ="billeder/firefox.png";
        document.getElementById("firefox2").style.backgroundColor = "#40FF00";
        document.getElementById("firefox1").style.backgroundColor = "#40FF00";
        openCard = false;
        openF1 = false;
        openF2 = false;
        doneF1 = true;
        doneF2 = true;

    }
    else if(document.getElementById("firefox1").src = "billeder/squareRed.jpg" && openF2 == false && openCard == true){
        document.getElementById("firefox1").src = "billeder/firefox.png";
        goRed();
    
    }
    
}

function checkF2(){
    if (document.getElementById("firefox2").src ="billeder/squareRed.jpg" && openF1 == false && openCard == false){
        document.getElementById("firefox2").src = "billeder/firefox.png";   
        openF2 = true;
        openCard = true;
    }
    else if (document.getElementById("firefox2").src ="billeder/squareRed.jpg" && openF1 == true){
        document.getElementById("firefox2").src ="billeder/firefox.png";
        document.getElementById("firefox1").style.backgroundColor = "#40FF00";
        document.getElementById("firefox2").style.backgroundColor = "#40FF00";
        openCard = false;  
        openF1 = false;
        openF2 = false;    
        doneF1 = true;
        doneF2 = true;
    }
    else if(document.getElementById("firefox2").src = "billeder/squareRed.jpg" && openF1 == false && openCard == true){
        document.getElementById("firefox2").src = "billeder/firefox.png";
        goRed();
    
    }
    
}


function checkC1(){
    if (document.getElementById("chrome1").src ="billeder/squareRed.jpg" && openC2 == false && openCard == false){
        document.getElementById("chrome1").src = "billeder/chrome.png";   
        openC1 = true;
        openCard = true;
    }
    else if (document.getElementById("chrome1").src ="billeder/squareRed.jpg" && openC2 == true){
        document.getElementById("chrome1").src ="billeder/chrome.png";
        document.getElementById("chrome2").style.backgroundColor = "#40FF00";
        document.getElementById("chrome1").style.backgroundColor = "#40FF00";
        openCard = false;   
        openC1 = false;
        openC2 = false; 
        doneC1 = true;
        doneC2 = true;  
    }
    else if(document.getElementById("chrome1").src = "billeder/squareRed.jpg" && openC2 == false && openCard == true){
        document.getElementById("chrome1").src = "billeder/chrome.png";
        goRed();
    
    }
    
}
function checkC2(){
    if (document.getElementById("chrome2").src ="billeder/squareRed.jpg" && openC1 == false && openCard == false){
        document.getElementById("chrome2").src = "billeder/chrome.png";   
        openC2 = true;
        openCard = true;
    }
    else if (document.getElementById("chrome2").src ="billeder/squareRed.jpg" && openC1 == true){
        document.getElementById("chrome2").src ="billeder/chrome.png";
        document.getElementById("chrome1").style.backgroundColor = "#40FF00";
        document.getElementById("chrome2").style.backgroundColor = "#40FF00";
        openCard = false;  
        openC1 = false;
        openC2 = false;  
        doneC1 = true;
        doneC2 = true;   
    }
    else if(document.getElementById("chrome2").src = "billeder/squareRed.jpg" && openC1 == false && openCard == true){
        document.getElementById("chrome2").src = "billeder/chrome.png";
        goRed();
    
    }
    
}
function checkD1(){
    if (document.getElementById("discord1").src ="billeder/squareRed.jpg" && openD2 == false && openCard == false){
        document.getElementById("discord1").src = "billeder/discord.png";   
        openD1 = true;
        openCard = true;
    }
    else if (document.getElementById("discord1").src ="billeder/squareRed.jpg" && openD2 == true){
        document.getElementById("discord1").src ="billeder/discord.png";
        document.getElementById("discord2").style.backgroundColor = "#40FF00";
        document.getElementById("discord1").style.backgroundColor = "#40FF00";
        openCard = false;   
        openD1 = false;
        openD2 = false; 
        doneD1 = true;
        doneD2 = true;   
    }
    else if(document.getElementById("discord1").src = "billeder/squareRed.jpg" && openD2 == false && openCard == true){
        document.getElementById("discord1").src = "billeder/discord.png";
        goRed();
    
    }
    
}
function checkD2(){
    if (document.getElementById("discord2").src ="billeder/squareRed.jpg" && openD1 == false && openCard == false){
        document.getElementById("discord2").src = "billeder/discord.png";   
        openD2 = true;
        openCard = true;
    }
    else if (document.getElementById("discord2").src ="billeder/squareRed.jpg" && openD1 == true){
        document.getElementById("discord2").src ="billeder/discord.png";
        document.getElementById("discord1").style.backgroundColor = "#40FF00";
        document.getElementById("discord2").style.backgroundColor = "#40FF00";
        openCard = false;  
        openD1 = false;
        openD2 = false;    
        doneD1 = true;
        doneD2 = true; 
    }
    else if(document.getElementById("discord2").src = "billeder/squareRed.jpg" && openD1 == false && openCard == true){
        document.getElementById("discord2").src = "billeder/discord.png";
        goRed();
    
    }
    
}
function checkE1(){
    if (document.getElementById("explorer1").src ="billeder/squareRed.jpg" && openE2 == false && openCard == false){
        document.getElementById("explorer1").src = "billeder/explorer.png";   
        openE1 = true;
        openCard = true;
    }
    else if (document.getElementById("explorer1").src ="billeder/squareRed.jpg" && openE2 == true){
        document.getElementById("explorer1").src ="billeder/explorer.png";
        document.getElementById("explorer2").style.backgroundColor = "#40FF00";
        document.getElementById("explorer1").style.backgroundColor = "#40FF00";
        openCard = false;   
        openE1 = false;
        openE2 = false; 
        doneE1 = true;
        doneE2 = true;   
    }
    else if(document.getElementById("explorer1").src = "billeder/squareRed.jpg" && openE2 == false && openCard == true){
        document.getElementById("explorer1").src = "billeder/explorer.png";
        goRed();
    
    }
    
}
function checkE2(){
    if (document.getElementById("explorer2").src ="billeder/squareRed.jpg" && openE1 == false && openCard == false){
        document.getElementById("explorer2").src = "billeder/explorer.png";   
        openE2 = true;
        openCard = true;
    }
    else if (document.getElementById("explorer2").src ="billeder/squareRed.jpg" && openE1 == true){
        document.getElementById("explorer2").src ="billeder/explorer.png";
        document.getElementById("explorer1").style.backgroundColor = "#40FF00";
        document.getElementById("explorer2").style.backgroundColor = "#40FF00";
        openCard = false;   
        openE1 = false;
        openE2 = false;  
        doneE1 = true;
        doneE2 = true;   
    }
    else if(document.getElementById("explorer2").src = "billeder/squareRed.jpg" && openE1 == false && openCard == true){
        document.getElementById("explorer2").src = "billeder/explorer.png";
        goRed();
    
    }
    
}
function checkG1(){
    if (document.getElementById("github1").src ="billeder/squareRed.jpg" && openG2 == false && openCard == false){
        document.getElementById("github1").src = "billeder/github.png";   
        openG1 = true;
        openCard = true;
    }
    else if (document.getElementById("github1").src ="billeder/squareRed.jpg" && openG2 == true){
        document.getElementById("github1").src ="billeder/github.png";
        document.getElementById("github2").style.backgroundColor = "#40FF00";
        document.getElementById("github1").style.backgroundColor = "#40FF00";
        openCard = false;
        openG1 = false;
        openG2 = false;  
        doneG1 = true;
        doneG2 = true;      
    }
    else if(document.getElementById("github1").src = "billeder/squareRed.jpg" && openG2 == false && openCard == true){
        document.getElementById("github1").src = "billeder/github.png";
        goRed();
    
    }
}
function checkG2(){
    if (document.getElementById("github2").src ="billeder/squareRed.jpg" && openG1 == false && openCard == false){
        document.getElementById("github2").src = "billeder/github.png";   
        openG2 = true;
        openCard = true;
    }
    else if (document.getElementById("github2").src ="billeder/squareRed.jpg" && openG1 == true){
        document.getElementById("github2").src ="billeder/github.png";
        document.getElementById("github1").style.backgroundColor = "#40FF00";
        document.getElementById("github2").style.backgroundColor = "#40FF00";
        openCard = false;   
        openG1 = false;
        openG2 = false;     
        doneG1 = true;
        doneG2 = true;      
    }
    else if(document.getElementById("github2").src = "billeder/squareRed.jpg" && openG1 == false && openCard == true){
        document.getElementById("github2").src = "billeder/github.png";
        goRed();
    
    }
}
function checkI1(){
    if (document.getElementById("intellij1").src ="billeder/squareRed.jpg" && openI2 == false && openCard == false){
        document.getElementById("intellij1").src = "billeder/intellij.png";   
        openI1 = true;
        openCard = true;
    }
    else if (document.getElementById("intellij1").src ="billeder/squareRed.jpg" && openI2 == true){
        document.getElementById("intellij1").src ="billeder/intellij.png";
        document.getElementById("intellij2").style.backgroundColor = "#40FF00";
        document.getElementById("intellij1").style.backgroundColor = "#40FF00";
        openCard = false;   
        openI1 = false;
        openI2 = false;
        doneI1 = true;
        doneI2 = true;           
    }
    else if(document.getElementById("intellij1").src = "billeder/squareRed.jpg" && openI2 == false && openCard == true){
        document.getElementById("intellij1").src = "billeder/intellij.png";
        goRed();
    
    }
}
function checkI2(){
    if (document.getElementById("intellij2").src ="billeder/squareRed.jpg" && openI1 == false && openCard == false){
        document.getElementById("intellij2").src = "billeder/intellij.png";   
        openI2 = true;
        openCard = true;
    }
    else if (document.getElementById("intellij2").src ="billeder/squareRed.jpg" && openI1 == true){
        document.getElementById("intellij2").src ="billeder/intellij.png";
        document.getElementById("intellij1").style.backgroundColor = "#40FF00";
        document.getElementById("intellij2").style.backgroundColor = "#40FF00";
        openCard = false;   
        openI1 = false;
        openI2 = false;  
        doneI1 = true;
        doneI2 = true;
    }
    else if(document.getElementById("intellij2").src = "billeder/squareRed.jpg" && openI1 == false && openCard == true){
        document.getElementById("intellij2").src = "billeder/intellij.png";
        goRed();
    
    }
}
function checkS1(){
    if (document.getElementById("safari1").src ="billeder/squareRed.jpg" && openS2 == false && openCard == false){
        document.getElementById("safari1").src = "billeder/safari.png";   
        openS1 = true;
        openCard = true;
    }
    else if (document.getElementById("safari1").src ="billeder/squareRed.jpg" && openS2 == true){
        document.getElementById("safari1").src ="billeder/safari.png";
        document.getElementById("safari2").style.backgroundColor = "#40FF00";
        document.getElementById("safari1").style.backgroundColor = "#40FF00";
        openCard = false;   
        openS1 = false;
        openS2 = false; 
        doneS1 = true;
        doneS2 = true; 
    }
    else if(document.getElementById("safari1").src = "billeder/squareRed.jpg" && openS2 == false && openCard == true){
        document.getElementById("safari1").src = "billeder/safari.png";
        goRed();
    
    }
}
function checkS2(){
    if (document.getElementById("safari2").src ="billeder/squareRed.jpg" && openS1 == false && openCard == false){
        document.getElementById("safari2").src = "billeder/safari.png";   
        openS2 = true;
        openCard = true;
    }
    else if (document.getElementById("safari2").src ="billeder/squareRed.jpg" && openS1 == true){
        document.getElementById("safari2").src ="billeder/safari.png";
        document.getElementById("safari1").style.backgroundColor = "#40FF00";
        document.getElementById("safari2").style.backgroundColor = "#40FF00";
        openCard = false;   
        openS1 = false;
        openS2 = false;  
        doneS1 = true;
        doneS2 = true; 
    }
    else if(document.getElementById("safari2").src = "billeder/squareRed.jpg" && openS1 == false && openCard == true){
        document.getElementById("safari2").src = "billeder/safari.png";
        goRed();
    
    }
}
function checkW1(){
    if (document.getElementById("windows1").src ="billeder/squareRed.jpg" && openW2 == false && openCard == false){
        document.getElementById("windows1").src = "billeder/windows.png";   
        openW1 = true;
        openCard = true;
    }
    else if (document.getElementById("windows1").src ="billeder/squareRed.jpg" && openW2 == true){
        document.getElementById("windows1").src ="billeder/windows.png";
        document.getElementById("windows2").style.backgroundColor = "#40FF00";
        document.getElementById("windows1").style.backgroundColor = "#40FF00";
        openCard = false;   
        openW1 = false;
        openW2 = false;  
        doneW1 = true;
        doneW2 = true; 
    }
    else if(document.getElementById("windows1").src = "billeder/squareRed.jpg" && openW2 == false && openCard == true){
        document.getElementById("windows1").src = "billeder/windows.png";
        goRed();
    
    }
}
function checkW2(){
    if (document.getElementById("windows2").src ="billeder/squareRed.jpg" && openW1 == false && openCard == false){
        document.getElementById("windows2").src = "billeder/windows.png";   
        openW2 = true;
        openCard = true;
    }
    else if (document.getElementById("windows2").src ="billeder/squareRed.jpg" && openW1 == true){
        document.getElementById("windows2").src ="billeder/windows.png";
        document.getElementById("windows1").style.backgroundColor = "#40FF00";
        document.getElementById("windows2").style.backgroundColor = "#40FF00";
        openCard = false;  
        openW1 = false;
        openW2 = false;  
        doneW1 = true;
        doneW2 = true;  
    }
    else if(document.getElementById("windows2").src = "billeder/squareRed.jpg" && openW1 == false && openCard == true){
        document.getElementById("windows2").src = "billeder/windows.png";
        goRed();
    
    }
}