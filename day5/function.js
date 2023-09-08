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

// Arrays
var arr = [];
arr[0] = 1;
arr[10] = 2;
console.log("Length: ", arr.length);
console.log(arr);

var arr2 = [1, 2, 3, 4, 5, 6];
arr2[6] = "@";
arr2[7] = function () {
  console.log("@@@");
};

arr2[7]();
arr2.push([1, 2, 3, 4, 5]);
console.log(arr2[8][2]);

console.log(arr2.length);
console.log(arr2);
console.log("Hello World!".length);

console.log("---------------------------");
// 3d array
var arr3 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];
console.log(arr3);

var arr5 = [];
for (var i = 0; i < 10; i++) {
  arr5.push(i);
}
console.log(arr5);

console.log("---------------------------");
// Quiz
var arr3d = [];
for (var i = 0; i < 3; i++) {
  arr3d[i] = [];
  for (var j = 0; j < 5; j++) {
    arr3d[i][j] = 5 * i + j + 1;
  }
}
console.log(arr3d);

console.log("---------------------------");

function makeTable(row, col) {
  var html = "<table border='1'";
  for (var i = 0; i < row; i++) {
    html += "<tr>";
    for (var j = 0; j < col; j++) {
      html += "<td>" + (i * row + j + 1) + "</td>";
    }
    html += "</tr>";
  }
  html += "</table>";
  //   document.body.innerHTML = html;
  return html;
}

// makeTable(10, 10);
// document.body.innerHTML = makeTable(10, 10);
