const screen = document.querySelector(".screen");
const root = document.querySelector(":root");
const clear = document.querySelector(".clear");
const bigButton = document.querySelector(".big");
const smallButton = document.querySelector(".small");
const mediumButton = document.querySelector(".medium");

clear.addEventListener("click", clearDrawing);
smallButton.addEventListener("click", () => { makeScreen(16)});
mediumButton.addEventListener("click", () => { makeScreen(32)});
bigButton.addEventListener("click", () => { makeScreen(64)});

function draw() {
    return this.classList.add("colored")
}

function clearDrawing(){
    let squares = document.querySelectorAll(".square");
    for (square of squares) {
        square.classList.remove("colored");
    }
}

function makeScreen (numSquares) {
    screen.innerHTML = "";
  root.style.setProperty("--grid-cols", `${numSquares}`)
  root.style.setProperty("--grid-rows", `${numSquares}`)
  for (i = 0; i < (numSquares * numSquares); i++) {
    let square = document.createElement("div");
    screen.appendChild(square).className = "square";
    square.addEventListener("mouseenter", draw);
  };

};


makeScreen(16)