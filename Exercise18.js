const numColors = 6;
let colors = generateRandomColors(numColors);
let pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const colorOptionsContainer = document.getElementById("colorOptions");

colorDisplay.textContent = pickedColor;
setUpColorOptions();

function generateRandomColors(num) {
  const colorArray = [];
  for (let i = 0; i < num; i++) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    colorArray.push(randomColor);
  }
  return colorArray;
}

function pickColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function setUpColorOptions() {
  for (let i = 0; i < colors.length; i++) {
    const colorOption = document.createElement("div");
    colorOption.classList.add("colorOption");
    colorOption.style.backgroundColor = colors[i];
    colorOption.addEventListener("click", function () {
      checkColor(this);
    });
    colorOptionsContainer.appendChild(colorOption);
  }
}

function checkColor(clickedColor) {
  const selectedColor = clickedColor.style.backgroundColor;

  if (selectedColor === pickedColor) {
    messageDisplay.textContent = "Correct!";
    changeColors(selectedColor);
  } else {
    clickedColor.style.transform = "scale(0)";
    messageDisplay.textContent = "Try Again";
  }
}

function changeColors(color) {
  colors.forEach(colorOption => {
    colorOption.style.backgroundColor = color;
    colorOption.style.transform = "scale(1)";
  });
  document.body.style.backgroundColor = color;
}