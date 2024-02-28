// Function to calculate total current using Kirchhoff's Current Law
function calculateTotalCurrent(numberOfSources) {
    let totalCurrent = 0;

    for (let i = 1; i <= numberOfSources; i++) {
        let current = parseFloat(prompt("Enter the current of source " + i + " (in amperes):"));
        if (!isNaN(current)) {
            totalCurrent += current;
        } else {
            console.log("Invalid input. Please enter a valid number for the current.");
            return;
        }
    }

    console.log("According to Kirchhoff's Current Law (KCL),");
    console.log("The total current in the circuit is: " + totalCurrent + " amperes");
}

// Prompt user for the number of current sources
let numberOfSourcesInput = prompt("Enter the number of current sources in the circuit:");
let numberOfSources = parseInt(numberOfSourcesInput);

// Check if the input is a valid number
if (!isNaN(numberOfSources) && numberOfSources > 0) {
    calculateTotalCurrent(numberOfSources);
} else {
    console.log("Invalid input. Please enter a valid positive number for the sources.");
}