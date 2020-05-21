/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

let body = document.querySelector("body");
let sterrenlucht = document.querySelector(".sterrenlucht");
let bg = document.querySelector(".image");

body.addEventListener('click', function() {
  sterrenlucht.classList.add("invisible");
});

bg.addEventListener('click', function() {
  bg.classList.add("changebg");
});


let m = document.querySelector("h1 span:nth-of-type(1)");
let a = document.querySelector("h1 span:nth-of-type(2)");
let g = document.querySelector("h1 span:nth-of-type(4)");
let i = document.querySelector("h1 span:nth-of-type(5)");
let s = document.querySelector("h1 span:nth-of-type(6)");
let t = document.querySelector("h1 span:nth-of-type(8)");
let e = document.querySelector("h1 span:nth-of-type(9)");
let r = document.querySelector("h1 span:nth-of-type(10)");

body.onkeydown = getKeyAndMove;

function getKeyAndMove(e){
		var key_code=e.which||e.keyCode;
		switch(key_code){
			case 77: //M
        console.log("M ingedrukt");
				floatM();
		}

    switch(key_code){
      case 65: //A
        console.log("A ingedrukt");
				floatA();
		}

    switch(key_code){
			case 71: //G
        console.log("G ingedrukt");
				floatG();
		}

    switch(key_code){
      case 73: //I
        console.log("I ingedrukt");
				floatI();
		}

    switch(key_code){
			case 83: //S
        console.log("S ingedrukt");
				floatS();
		}

    switch(key_code){
      case 84: //T
        console.log("T ingedrukt");
				floatT();
		}

    switch(key_code){
			case 69: //E
        console.log("E ingedrukt");
				floatE();
		}

    switch(key_code){
      case 82: //R
        console.log("R ingedrukt");
				floatR();
		}
	}



function floatM() {
    m.classList.toggle("float1");
}

function floatA() {
    a.classList.toggle("float2");
}

function floatG() {
    g.classList.toggle("float1");
}

function floatI() {
    i.classList.toggle("float2");
}

function floatS() {
    s.classList.toggle("float1");
}

function floatT() {
    t.classList.toggle("float2");
}

function floatE() {
    e.classList.toggle("float1");
}

function floatR() {
    r.classList.toggle("float2");
}
