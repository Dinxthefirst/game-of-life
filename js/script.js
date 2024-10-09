const gridContainer = document.getElementById("grid-container");
// let isDragging = false;
// let startX, startY, scrollLeft, scrollTop;

// gridContainer.addEventListener("mousedown", (e) => {
//   isDragging = true;
//   gridContainer.style.cursor = "grabbing";
//   startX = e.pageX - gridContainer.offsetLeft;
//   startY = e.pageY - gridContainer.offsetTop;
//   scrollLeft = window.scrollX;
//   scrollTop = window.scrollY;
// });

// gridContainer.addEventListener("mouseleave", () => {
//   isDragging = false;
//   gridContainer.style.cursor = "grab";
// });

// gridContainer.addEventListener("mouseup", () => {
//   isDragging = false;
//   gridContainer.style.cursor = "grab";
// });

// gridContainer.addEventListener("mousemove", (e) => {
//   if (!isDragging) return;
//   e.preventDefault();
//   const x = e.pageX - gridContainer.offsetLeft;
//   const y = e.pageY - gridContainer.offsetTop;
//   const walkX = x - startX;
//   const walkY = y - startY;
//   window.scrollTo({
//     left: scrollLeft - walkX,
//     top: scrollTop - walkY,
//     behavior: "smooth",
//   });
//   console.log("coords:" + window.screenX + ", " + window.screenY);
// });

function toggleItem(elem) {
  elem.classList.toggle("dead-item");
  elem.classList.toggle("alive-item");
}

gridContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  elem = e.target.closest(".grid-item");
  toggleItem(elem);
});
