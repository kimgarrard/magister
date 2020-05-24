/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

let body = document.querySelector("body");
let begintext = document.querySelector(".begintext");
let sterrenlucht = document.querySelector(".sterrenlucht");
let imagebegin = document.querySelector(".imagebegin");
let svg = document.querySelector(".svgster");
let svgnacht = document.querySelector(".svgnacht");
let svgdag = document.querySelector(".svgdag");
let ster1 = document.querySelector(".ster1 polygon");
let ster2 = document.querySelector(".ster2 polygon");
let ster3 = document.querySelector(".ster3 polygon");
let maan = document.querySelector(".maan2 path");
let nachtster1 = document.querySelector(".nachtster1");
let nachtster2 = document.querySelector(".nachtster2");
let nachtster3 = document.querySelector(".nachtster3");
let dagzonstralen = document.querySelector(".zon2 path");
let dagzon = document.querySelector(".zon2 circle");

let nacht = document.querySelector(".nacht");
let dag = document.querySelector(".dag");
let h1 = document.querySelector("h1");
let p = document.querySelector(".text p");
let image = document.querySelector(".image");

let m = document.querySelector("h1 span:nth-of-type(1)");
let a = document.querySelector("h1 span:nth-of-type(2)");
let g = document.querySelector("h1 span:nth-of-type(4)");
let i = document.querySelector("h1 span:nth-of-type(5)");
let s = document.querySelector("h1 span:nth-of-type(6)");
let t = document.querySelector("h1 span:nth-of-type(8)");
let e = document.querySelector("h1 span:nth-of-type(9)");
let r = document.querySelector("h1 span:nth-of-type(10)");


imagebegin.addEventListener('click', function() {
    console.log("boe");
    image.classList.toggle("changebg");
    dag.classList.toggle("hide");
    nacht.classList.toggle("hide");
});

begintext.addEventListener('click', function() {
  begintext.classList.add("hide");
  sterrenlucht.classList.add("invisible");
});

svg.addEventListener('mouseover', function() {
  console.log('ster');
  svg.classList.add("starspin");
  ster1.classList.add("starspincolor");
  ster2.classList.add("starspincolor");
  ster3.classList.add("starspincolor");
});

svg.addEventListener('mouseout', function() {
  svg.classList.remove("starspin");
  ster1.classList.remove("starspincolor");
  ster2.classList.remove("starspincolor");
  ster3.classList.remove("starspincolor");
});

svgnacht.addEventListener('mouseover', function() {
  maan.classList.add("moon");
  nachtster1.classList.add("nighttwinkle1");
  nachtster2.classList.add("nighttwinkle2");
  nachtster3.classList.add("nighttwinkle3");
});

svgnacht.addEventListener('mouseout', function() {
  maan.classList.remove("moon");
  nachtster1.classList.remove("nighttwinkle1");
  nachtster2.classList.remove("nighttwinkle2");
  nachtster3.classList.remove("nighttwinkle3");
});

svgdag.addEventListener('mouseover', function() {
  dagzonstralen.classList.add("dayshine");
  dagzon.classList.add("dayshinestroke");
});

svgdag.addEventListener('mouseout', function() {
  dagzonstralen.classList.remove("dayshine");
  dagzon.classList.remove("dayshinestroke");
});

nacht.addEventListener('click', function() {
  imagebegin.classList.toggle("hide");

  body.classList.toggle("nachtstylebg");
  h1.classList.toggle("nachtstyletext");
  p.classList.toggle("nachtstyletext");
  image.classList.toggle('no-after');
  image.classList.toggle("nachtstyleimage");
  svg.classList.toggle("hide");
  svgnacht.classList.toggle("hide");
  nacht.classList.toggle("nachtstylebutton");

  dag.classList.toggle("hide");
});

dag.addEventListener('click', function() {
  imagebegin.classList.toggle("hide");

  body.classList.toggle("dagstylebg");
  h1.classList.toggle("dagstyletext");
  p.classList.toggle("dagstyletext");
  // bg.classList.remove("changebg");
  image.classList.toggle('no-after');
  image.classList.toggle("dagstyleimage");
  svg.classList.toggle("hide");
  svgdag.classList.toggle("hide");
  dag.classList.toggle("nachtstylebutton");

  nacht.classList.toggle("hide");
});


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









const mq = window.matchMedia( "(max-width: 79em)" );

if (mq.matches) {

  m.addEventListener('click', function() {
      console.log("m");
      m.classList.toggle("float1");
  });

  a.addEventListener('click', function() {
      a.classList.toggle("float2");
  });

  g.addEventListener('click', function() {
      g.classList.toggle("float1");
  });

  i.addEventListener('click', function() {
      i.classList.toggle("float2");
  });

  s.addEventListener('click', function() {
      s.classList.toggle("float1");
  });

  t.addEventListener('click', function() {
      t.classList.toggle("float2");
  });

  e.addEventListener('click', function() {
      e.classList.toggle("float1");
  });

  r.addEventListener('click', function() {
      r.classList.toggle("float2");
  });

}
