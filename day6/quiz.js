document.querySelector(".box").addEventListener("mouseover", function (event) {
  this.innerHTML = "OVER...";
});

document.querySelector(".box").addEventListener("mouseout", function (event) {
  this.innerHTML = "OUT...";
});

document.querySelector(".box").addEventListener("mouseover", function (event) {
  // console.log(event.offsetX, offsetY)
  if (event.offsetX > 50) {
    this.innerHTML = "RIGHT";
  } else {
    this.innerHTML = "LEFT";
  }
  this.style.backgroundColor = "#" + 
  parseInt(event.offsetX * 50000, 16);
});
