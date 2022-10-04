"use strict";

// Aufgabe 1

var l = [];

for (var i = 1; i<100; i = i + 2){
    l.push(i);
}

console.log(l);

console.log("----------------------------")

//Aufgabe 2

function wuerfeln() {
    return(Math.floor(Math.random()*6+1));
}

console.log(wuerfeln())


