// var n = 0;
// var id;
// function add() {
//   n++;
//   document.body.innerHTML = n;
// }
// id = setInterval(add, 1000); // lesser value the faster it moves
// // 1000 = 1 second

// // Decreasing
// // var j = 10;
// // var newid, id2;
// // function timer() {
// //   document.body.innerHTML = j;
// //   if (j <= 0) {
// //     clearInterval(newid);
// //     document.body.innerHTML = "End.....";
// //   }
// //   j--;
// // }
// // // newid = setInterval(timer, 1000);

// // // Decreasing and restarting
// // function restart() {
// //   j = 10;
// //   newid = setInterval(timer, 1000);
// // }

// // newid = setInterval(timer, 1000);
// // id2 = setInterval(restart, 15000);

// var n = 10;
// var id, id2;
// function add() {
//   document.body.innerHTML = n;
//   if (n <= 0) {
//     document.body.innerHTML = "End...";
//     clearInterval(id);
//   }
//   n--;
// }

// function start() {
//   n = 10;
//   id = setInterval(add, 1000);
// }
// id = setInterval(add, 1000);
// id2 = setInterval(start, 15000);

// var today = new Date();
// console.log(today);
// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDate());
// console.log(date);

// function timer() {
//   var yyyy = today.getFullYear();
//   var mm = today.getMonth();
//   var dd = today.getDate() + 1;
//   var hh = today.getHours();
//   var mi = today.getMinutes();
//   var ss = today.getSeconds();

//   var date = `${dd}/${mm}/${yyyy} ${hh}:${mi}:${ss}`;
//   document.body.innerHTML = date;
// }

function timer() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = today.getMonth();
  var dd = today.getDate() + 1;
  var hh = today.getHours();
  var mi = today.getMinutes();
  var ss = today.getSeconds();

  var date = `${dd}/${mm}/${yyyy} ${hh}:${mi}:${ss}`;
  document.body.innerHTML = date;
}
id = setInterval(timer, 1000);

function whatDayOfWeek(yyyy, mm, dd) {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var date = new Date(yyyy, mm - 1, dd);
  return days[date.getDay()];
}

console.log(whatDayOfWeek(1994, 07, 31));

//
