// Other examples
function plus10(a) {
  a = a + 10;
  return a;
}
var b = 10;
b = plus10(b);
console.log(b);

function fun_a(a) {
  return fun_b(a);
}

function fun_b(a) {
  return a + 10;
}

console.log(fun_a(10));

var aa = 10;

function fun_c() {
  aa = 100;
}

fun_c();
console.log(aa);

// function selfFun(a) {
//   return a - 1;
// }

function selfFun(a) {
  console.log(a);

  if (a > 1) return a + selfFun(a - 1);
  return 1;
}

console.log("selfFun output " + selfFun(100));

console.log("--------------------------------");


