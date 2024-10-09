const startButton = document.getElementById("button");
let running = false;

startButton.addEventListener("click", (e) => {
  if (running) {
    running = false;
    startButton.innerText = "Start";
  } else {
    running = true;
    startButton.innerText = "Stop";
  }
  toggleButton();
});

toggleButton = () => {
  startButton.classList.toggle("start-button");
  startButton.classList.toggle("stop-button");
};

document.addEventListener("DOMContentLoaded", () => {
  const rows = 20;
  const columns = 20;
  const grid = [];

  for (let row = 0; row < rows; row++) {
    const row = [];
    for (let col = 0; col < columns; col++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      div.classList.add("dead-item");
      div.title = `Item ${row + 1}`;
      div.dataset.row = row;
      div.dataset.col = col;
      gridContainer.appendChild(div);
      row.push(div);
    }
    grid.push(row);
  }
  let count;
  while (true) {
    if (running) {
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          count = 0;
        }
      }
    }
  }
});

checkNeighbors = (row, col) => {
  const neighbors = [];
};

function toggleItem(elem) {
  elem.classList.toggle("dead-item");
  elem.classList.toggle("alive-item");
}
