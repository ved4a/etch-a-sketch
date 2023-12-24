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

// USING BUTTONS TO MANIPULATE GRID

// Function to Manipulate Colors
function changeColor(desiredColor) {
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", function () {
      gridItem.style.backgroundColor = desiredColor;
    });
  });
}

// Eraser
const eraseBtn = document.querySelector(".erase");
eraseBtn.addEventListener("click", function () {
  changeColor("white");
});

// Clear
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", function () {
  gridItems.forEach((gridItem) => {
    gridItem.style.backgroundColor = "white";
  });
});

// Color
const colorBtn = document.querySelector(".color-mode");
colorBtn.addEventListener("click", function () {
  changeColor("black");
});

// Rainbow
const rainbowBtn = document.querySelector(".rainbow-mode");
rainbowBtn.addEventListener("click", function () {
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", function () {
      gridItem.style.backgroundColor = getRandomColor();
    });
  });
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// CREATING RANGE SLIDER
function updateSliderValue(value) {
  document.querySelector(".slider-value").textContent = value;
}
