let currentPlayer = "X";
    let gameBoard = Array(9).fill("");

    function handleCellClick(event) {
      const cellIndex = event.target.dataset.index;

      if (gameBoard[cellIndex] === "" && !checkWinner()) {
        gameBoard[cellIndex] = currentPlayer;
        event.target.innerText = currentPlayer;
        
        if (checkWinner()) {
          document.getElementById("message").innerText = `Player ${currentPlayer} wins!`;
        } else if (!gameBoard.includes("")) {
          document.getElementById("message").innerText = "It's a draw!";
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          document.getElementById("message").innerText = `Player ${currentPlayer}'s turn`;
        }
      }
    }

    function checkWinner() {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];

      return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
      });
    }