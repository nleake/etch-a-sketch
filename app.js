const screen = document.querySelector(".screen");
const root = document.querySelector(":root");

function draw() {
    return this.classList.add("colored")
}

function makeGrid (numSquares) {
  root.style.setProperty("--grid-cols", `${numSquares}`)
  root.style.setProperty("--grid-rows", `${numSquares}`)
  for (i = 0; i < (numSquares * numSquares); i++) {
    let square = document.createElement("div");
    square.innerText = (i + 1);
    screen.appendChild(square).className = "square";
    square.addEventListener("mouseenter", draw);
  };

};


makeGrid(16);



