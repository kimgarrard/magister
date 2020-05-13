/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

let body = document.querySelector("body");
let sterrenlucht = document.querySelector(".sterrenlucht");

body.addEventListener('click', function() {
  sterrenlucht.classList.add("invisible");
});
