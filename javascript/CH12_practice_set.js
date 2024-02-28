// Function to calculate voltage across a circuit loop using KVL
function calculateVoltage(V1, R1, R2, R3) {
    // Applying Kirchhoff's Voltage Law
    const totalVoltage = V1;
    const voltageDrop1 = R1 * current;
    const voltageDrop2 = R2 * current;
    const voltageDrop3 = R3 * current;

    // Calculating voltage across the loop
    const voltageAcrossLoop = totalVoltage - voltageDrop1 - voltageDrop2 - voltageDrop3;

    return voltageAcrossLoop;
}

// Input values (you can modify these values based on your circuit)
const sourceVoltage = 12; // in volts
const resistor1 = 3; // in ohms
const resistor2 = 4; // in ohms
const resistor3 = 2; // in ohms

// Assuming a current value (you can modify this based on your circuit)
const current = 2; // in amperes

// Calling the function to calculate voltage
const result = calculateVoltage(sourceVoltage, resistor1, resistor2, resistor3);

// Displaying the result
console.log("The voltage across the circuit loop is: ${result} volts");