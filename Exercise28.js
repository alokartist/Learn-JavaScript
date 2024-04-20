function bisection() {
    let func = document.getElementById('function').value;
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let tol = parseFloat(document.getElementById('tolerance').value);

    let fa = evalFunc(func, a);
    let fb = evalFunc(func, b);

    if (fa * fb >= 0) {
        document.getElementById('output').innerText = "f(a) and f(b) must have opposite signs.";
        return;
    }

    let iterations = 0;
    let c;

    while ((b - a) / 2 > tol) {
        c = (a + b) / 2;
        let fc = evalFunc(func, c);

        if (fc === 0) {
            break;
        } else if (fa * fc < 0) {
            b = c;
        } else {
            a = c;
        }

        iterations++;
    }

    document.getElementById('output').innerText = `Root: ${c.toFixed(6)}\nIterations: ${iterations}`;
}

function evalFunc(func, x) {
    return eval(func.replace(/x/g, '(' + x + ')'));
}
