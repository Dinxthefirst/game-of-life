const startButton = document.getElementById("button");
const stepButton = document.getElementById("step-button");
const clearButton = document.getElementById("clear-button");
let running = false;
let interval;
const rows = 20;
const cols = 20;

function toggleButton() {
  startButton.classList.toggle("start-button");
  startButton.classList.toggle("stop-button");
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = gridElements();

  startButton.addEventListener("click", () => {
    toggleButton();
    if (running) {
      running = false;
      startButton.innerText = "Start";
      clearInterval(interval);
    } else {
      running = true;
      startButton.innerText = "Stop";
      interval = setInterval(main, 200);
    }
  });

  stepButton.addEventListener("click", () => {
    main();
  });

  clearButton.addEventListener("click", () => {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col].classList.contains("alive-item"))
          toggleItem(grid[row][col]);
      }
    }
  });

  function main() {
    console.log("Running main loop");
    itemsToToggle = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const neighbors = getNeighbors(grid, row, col);
        let count = 0;
        neighbors.forEach((item) => {
          if (item.classList.contains("alive-item")) count++;
        });
        shouldToggle = checkConditions(grid, row, col, count);
        if (shouldToggle) {
          itemsToToggle.push(grid[row][col]);
        }
      }
    }
    itemsToToggle.forEach((elem) => {
      toggleItem(elem);
    });
  }
});

function checkConditions(grid, row, col, count) {
  isAlive = grid[row][col].classList.contains("alive-item");
  if (isAlive && count < 2) {
    return true;
  }
  if (isAlive && (count == 2 || count == 3)) {
    return false;
  }
  if (isAlive && count > 3) {
    return true;
  }
  if (!isAlive && count == 3) {
    return true;
  }
}

function gridElements() {
  grid = [];
  for (let row = 0; row < rows; row++) {
    const rowArray = [];
    for (let col = 0; col < cols; col++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      div.classList.add("dead-item");
      div.title = `Item (${row + 1}, ${col + 1})`;
      div.dataset.row = row;
      div.dataset.col = col;
      gridContainer.appendChild(div);
      rowArray.push(div);
    }
    grid.push(rowArray);
  }
  return grid;
}

function getNeighbors(grid, row, col) {
  const neighbors = [];
  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
    [-1, -1], // Up-Left
    [-1, 1], // Up-Right
    [1, -1], // Down-Left
    [1, 1], // Down-Right
  ];

  directions.forEach(([directionRow, directionCol]) => {
    const newRow = row + directionRow;
    const newCol = col + directionCol;

    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      neighbors.push(grid[newRow][newCol]); // Add valid neighbor to the list
    }
  });

  return neighbors;
}

function toggleItem(elem) {
  elem.classList.toggle("dead-item");
  elem.classList.toggle("alive-item");
}
