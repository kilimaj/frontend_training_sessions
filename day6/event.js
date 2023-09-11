function move(event) {
  //   console.log(event);
  console.log(event.x, event.y);
}

function over(event) {
  console.log("over");
}

function out(event) {
  console.log("out");
}

function stopEvent(event) {
  console.log("DIV3");
  event.stopPropagation();
}

document.querySelector(".box").addEventListener("click", function () {
  console.log((this.innerHTML = "New CLICK ....."));
  console.log(event);
  console.log("click BOX");
});
