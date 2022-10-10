"use strict";

var t = 0

function zeit(){
    var d = new Date();
    var ds = d.toDateString();
    var ts = d.toTimeString();
    t += 500;
    
    var o = document.querySelector("#output");
    o.innerHTML = ds + "<br>" + ts.slice(0,8);
}

function start(){
    console.log("Start");

    if (t==0){
        setInterval(zeit, 500);
    }
}

