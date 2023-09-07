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

var x = 1;
var y = 4;
var z = 1;
if (x == y || x == z) {
  console.log(true);
}

var aa = 1;
var bb = "1";
if (aa === bb) {
  console.log("equal");
} else {
  console.log("not equal");
}

if (aa == bb) {
  console.log("equal");
} else {
  console.log("not equal");
}

//  The third equal sign checks for type also therefore be careful

aa = "12"; // No error because we do not declare types in javascript

aa = [1, 2, 3];

const cc = 1;
// cc = 3;
// Const value should not be changed else causes error
aa = "1";
console.log(aa);

aa = [1, 2, 3, 4];
console.log(aa);

const ccc = 3.14;
// ccc = 2;

const dd = {
  a: 1,
  b: 2,
};

dd.a = 3;
console.log(dd.a);

// loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// loop and print even numbers

var sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
    // console.log(sum);
  }
}
console.log(sum);

// For inside for loop

var sum2 = 0;
for (let i = 1; i <= 9; i++) {
  console.log(`2 * ${i} = ` + 2 * i);
}
console.log(sum2);

// Quiz
var quiz = 0;
for (let i = 1; i <= 9; i++) {
    console.log (`${i} start ---------`)
  for (let b = 1; b <= 9; b++) {
    console.log(`${i} * ${b} = ` + i * b);
  }
}
console.log(quiz);
