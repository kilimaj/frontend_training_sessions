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
  this.style.backgroundColor = "#" + parseInt(event.offsetX * 50000, 16);
});

function funA() {
  console.log("fun-a");
}

function funB() {
  console.log("fun-b");
}

document.querySelector(".box-200").addEventListener("click", funA);

document.querySelector(".box-200").addEventListener("click", funB);

document.querySelector(".box-200").removeEventListener("click", funA);

for (let i = 0; i < 100; i++) {
  let box = document.createElement("div");
  box.className = "box-100";
  box.innerHTML = "BOX-" + i;
  document.body.appendChild(box);

  box.addEventListener("click", function () {
    console.log(i);
  });
}
