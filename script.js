"use strict";

// MANIPULATING MAIN GRID
const mainGrid = document.querySelector("#main-grid");

// CREATING RANGE SLIDER
function updateSliderValue(value) {
  document.querySelector(".slider-value").textContent = value;
  createGrid(value);
}

const slider = document.querySelector(".slider");
slider.addEventListener("input", function () {
  updateSliderValue(this.value);
});

updateSliderValue(slider.value);

function createGrid(value) {
  mainGrid.innerHTML = "";

  for (let i = 0; i < value; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < value; j++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      row.appendChild(div);
    }
    mainGrid.appendChild(row);
  }
  updateGridItemEventListeners();
}

// MANIPULATING GRID ITEMS
function updateGridItemEventListeners() {
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
    changeColor("whitesmoke");
  });

  // Clear
  const clearBtn = document.querySelector(".clear");
  clearBtn.addEventListener("click", function () {
    gridItems.forEach((gridItem) => {
      gridItem.style.backgroundColor = "whitesmoke";
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
}

updateGridItemEventListeners();

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
