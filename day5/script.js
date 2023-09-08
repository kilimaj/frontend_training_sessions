// for (var i = 100; i >= 0; i--) {
//   if (i > 80) continue;
//   console.log(i);
//   if (i == 50) break;
// }

// let sum = 0;
// for (var i = 100; i >= 0; i--) {
//   if (i % 2 === 1) continue;
//   // When its not an even number it continues the loop and only executes
//   // when its even
//   sum = sum + i;
// }
// console.log(sum);

// var sum = 0;
// for (var i = 1; i <= 100; i++) {
//   sum = sum + i;
//   if (sum > 4000) {
//     console.log(i, sum);
//     break;
//   }
// }

// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// var i = 1000;
// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// var i = 1;
// do {
//   i++;
//   console.log(i);
// //   if (i < 50) continue;
//   if (i > 50) break;
// } while (i <= 100);

// Times table

// var i = 1;
// do {
//   i++;
//   var j = 0;
//   do {
//     j++;
//     console.log(i + " * " + j + " = " + i * j);
//   } while (j < 10);
// } while (i < 10);

//  Another example

var i = 1;
var j = 1;
do {
  j++;
  if (j % 10 == 0) i++;
  console.log(i + " * " + (j % 10) + " = " + i * (j % 10));
} while (j < 100);

//  While loop

var i = 2;
while (i < 10) {
  i++;
  console.log(i);
}

console.log("------------------------------------------");

// Switch Case
var s = 1;
switch (s) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log(4);
    break;
}

console.log("------------------------------------------");
