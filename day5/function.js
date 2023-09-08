//

function fun_sum(a, b) {
  console.log(a + b);
}

fun_sum(1, 3);
fun_sum(1);

console.log("---------");

var fun_sum2 = function (a, b) {
  if (a === undefined) {
    a = 0;
    console.warn("a is undefined");
  }
  console.log(a, b);
  console.log(a + b);
};

fun_sum2(1, 3);
fun_sum2(1);
fun_sum2();

console.log("---------");

var fun_sum3 = function (a = 0, b = 0) {
  console.log(a, b);
  console.log(a + b);
};
fun_sum3();
fun_sum3(100);
fun_sum3(100, 200);

console.log("---------");

var fun_sum4 = function () {
  console.log(arguments.length);
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  console.log(sum);
};
fun_sum4();
fun_sum4(100);
fun_sum4(100, 200);
fun_sum4(100, 200, 300);
fun_sum4(100, 200, 300, 400);
fun_sum4(100, 200, 300, 400, 500);


console.log("------------------------");
