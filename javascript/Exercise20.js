function changeColor() {
    // Generate random RGB values
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Apply the random color to the background
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }