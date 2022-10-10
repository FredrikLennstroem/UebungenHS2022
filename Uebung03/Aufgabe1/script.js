"use strict";

function changetext() {
    var random = Math.floor(Math.random() * 16777215).toString(16);
    var farbe = "#" + random;
    var ip = document.querySelector("#input");
    var op = document.querySelector("#output");
    op.innerHTML = ip.value;
    op.style["color"] = farbe;
    op.style["font-size"] = "80px";
}