/* 
// My solution

var drag = false;
var offsetX = 0;
var offsetY = 0;

document.querySelector(".box").
addEventListener("mousedown", function (event) {
    drag = true;
    offsetX = event.clientX - document.querySelector(".box").
    getBoundingClientRect().left;

    // offsetY = event.clientY - document.querySelector(".box").
    // getBoundingClientRect().top;
});

document.addEventListener("mouseup", function () {
    drag = false;
});

document.addEventListener("mousemove", function (event) {
    if (drag) {
        let newX = event.clientX - offsetX;
        // let newY = event.clientY - offsetY;
        if(newX >= 0) {
            document.querySelector(".box").style.left = newX + "px";
        }
    }
});

*/

// Instructors solution
var drag = false;
var offsetX = 0;
var offsetY = 0;

document.querySelector(".box").
addEventListener("mousedown", function (event) {
    drag = true;
});

document.addEventListener("mouseup", function () {
    drag = false;
});

document.addEventListener("mousemove", function (event) {
    if (drag === true) {
        document.querySelector(".box").style.top = event.y + "px";
        document.querySelector(".box").style.left = event.x + "px";
    }
});