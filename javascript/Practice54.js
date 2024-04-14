function solve() {
    let matrixString = document.getElementById('matrix').value;
    let rows = matrixString.split('\n');
    let matrix = [];
    for (let row of rows) {
        matrix.push(row.split(',').map(Number));
    }

    // Your Gaussian Elimination code here...

    let solution = gaussElimination(matrix);
    document.getElementById('solution').innerText = "Solution: " + solution.join(', ');
}

function gaussElimination(matrix) {
    // Gaussian Elimination code...
}
