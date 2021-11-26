var mil  = 0
var sec  = 0
var min  = 0
var hour  = 0

var milget = document.getElementById("mil");
var secget = document.getElementById("sec");
var minget = document.getElementById("min");
var hourget = document.getElementById("hour");

var interval ;

function timer(){
    mil++
    milget.innerHTML = mil 
    if(mil==100){
        sec++
        secget.innerHTML = sec
        mil = 0
    }

    else if(sec===60){
        min++
        minget.innerHTML = min
        sec =0
    }
    else if(min===60){
        hour++
        hourget.innerHTML =hour
        min =0

    }

}

function start(){
    
    interval = setInterval(timer ,10);

    var playget = document.getElementById("play");
    playget.disabled = true;
    
}

function stop(){
    
   
    
    var get = document.getElementById("stop1")
    if(get.innerHTML==="Pause"){
        clearInterval(interval)
        get.innerHTML="Play"
    

    }
    else if(get.innerHTML=="Play"){
        get.innerHTML="Pause";
        start()
    
        
    }
    

}


function reset(){
    
    clearInterval(interval)

    mil = 0;
    sec = 0;
    min = 0;
    hour = 0;
    milget.innerHTML = mil;
    secget.innerHTML = sec;
    milget.innerHTML = min;
    hourget.innerHTML = hour;
    var get = document.getElementById("stop1");
    get.innerHTML = "Pause";

    
    var playget = document.getElementById("play")
    playget.disabled = false;
}