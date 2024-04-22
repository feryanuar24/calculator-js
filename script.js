var output = document.getElementById('output');

function c() {
    output.innerText = "";
}

function ce() {
    output.innerText = output.innerText.slice(0,-1);
}

function perc() {
    if (output.innerText[output.innerText.length - 1] !== "%") {
        output.innerText = output.innerText + "%";
    }
}

function divide() {
    if (output.innerText[output.innerText.length - 1] !== "/") {
    output.innerText = output.innerText + "/";
    }
}

function seven() {
    output.innerText = output.innerText + "7";
}

function eight() {
    output.innerText = output.innerText + "8";
}

function nine() {
    output.innerText = output.innerText + "9";
}

function multiply() {
    if (output.innerText[output.innerText.length - 1] !== "*") {
    output.innerText = output.innerText + "*";
    }
}

function four() {
    output.innerText = output.innerText + "4";
}

function five() {
    output.innerText = output.innerText + "5";
}

function six() {
    output.innerText = output.innerText + "6";
}

function minus() {
    if (output.innerText[output.innerText.length - 1] !== "-") {
    output.innerText = output.innerText + "-";
    }
}

function one() {
    output.innerText = output.innerText + "1";
}

function two() {
    output.innerText = output.innerText + "2";
}

function three() {
    output.innerText = output.innerText + "3";
}

function plus() {  
    if (output.innerText[output.innerText.length - 1] !== "+") {
    output.innerText = output.innerText + "+";
    }
}

function zero() {
    output.innerText = output.innerText + "0";
}

function dot() {
    if (output.innerText[output.innerText.length - 1] !== ".") {
    output.innerText = output.innerText + ".";
    }
}

function equal() {
    output.innerText = eval(output.innerText);
}