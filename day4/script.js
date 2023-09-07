document.write("Hello World!");

var a = 10;
let b = 10.099;
let c = "10";
let d = true;
let e = { a: 1 };

console.log(a);
console.log(b);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

console.log(`${a} ${b} ${c} ${d} ${e}`);
console.log(a + " " + b + " " + c + " " + d);

let f = `${a}---${b}---${c}`;
console.log(f);

console.log(document.body);
// document.body.innerHTML = "Change....";
document.body.style.color = "red";
document.body.style.fontSize = "100px";
// single line comment
/*
This will be 
A multiple line comment
*/

// document.getElementById("first").innerHTML="1"

// document.body.childNodes[1].innerHTML = "1";
// document.body.childNodes[3].innerHTML = "2";

/* The index starts at zero since there 
is a space ethen index 0 is the first break of line 
between the body and div and element index 2 will be break
between the divs
*/

// document.getElementsByTagName("div")[0].innerHTML = "1";
// The above is the best since it follows array without confusing

// document.querySelector(".second").innerHTML = "1";

// document.querySelectorAll(".second")[1].innerHTML = "1";


