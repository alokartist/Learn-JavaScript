function secantMethod() {
    let x0 = parseFloat(document.getElementById('x0').value);
    let x1 = parseFloat(document.getElementById('x1').value);
    let tol = parseFloat(document.getElementById('tol').value);

    let f = function(x) {
        // Define your function here
        return x * x - 4;
    };

    let maxIterations = 100;
    let iteration = 0;
    let error = Infinity;
    let x2, fx0, fx1, fx2;

    while (error > tol && iteration < maxIterations) {
        fx0 = f(x0);
        fx1 = f(x1);

        x2 = x1 - (fx1 * (x1 - x0)) / (fx1 - fx0);
        fx2 = f(x2);

        error = Math.abs(x2 - x1);
        x0 = x1;
        x1 = x2;

        iteration++;
    }

    if (iteration < maxIterations) {
        document.getElementById('result').innerHTML = `Root: ${x2.toFixed(6)} <br> Iterations: ${iteration}`;
    } else {
        document.getElementById('result').innerHTML = `Method failed to converge within ${maxIterations} iterations.`;
    }
}