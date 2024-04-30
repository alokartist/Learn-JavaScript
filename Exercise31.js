function calculate() {
    const initialGuess = parseFloat(document.getElementById('initialGuess').value);
    const tolerance = 0.00001; // Set the tolerance level for convergence
    let x = initialGuess;
    
    // Define the function whose root we want to find
    function f(x) {
      return x**2 - 16;
    }
    
    // Define the derivative of the function
    function fPrime(x) {
      return 2 * x;
    }
    
    // Iterative loop for Newton-Raphson method
    let iterations = 0;
    while (Math.abs(f(x)) > tolerance) {
      x = x - f(x) / fPrime(x);
      iterations++;
    }
    
    document.getElementById('result').innerHTML = `Root: ${x.toFixed(6)}<br>Iterations: ${iterations}`;
  }