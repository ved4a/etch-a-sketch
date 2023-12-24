"use strict";

// MANIPULATING MAIN GRID
const mainGrid = document.querySelector("#main-grid");

function create16x16() {
  for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < 16; j++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      row.appendChild(div);
    }
    mainGrid.appendChild(row);
  }
}

create16x16();

// MANIPULATING GRID ITEMS
const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((gridItem) => {
  gridItem.addEventListener("mouseover", function () {
    gridItem.style.backgroundColor = "black";
  });
});

// USING BUTTONS TO MANIPULATE GRID
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", function () {
  gridItems.forEach((gridItem) => {
    gridItem.style.backgroundColor = "white";
  });
});

const eraseBtn = document.querySelector(".erase");
eraseBtn.addEventListener("click", function () {
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", function () {
      gridItem.style.backgroundColor = "white";
    });
  });
});

// CREATING RANGE SLIDER
function updateSliderValue(value) {
  document.querySelector(".slider-value").textContent = value;
}
