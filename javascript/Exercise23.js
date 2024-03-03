    // Number Guessing Game
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    function checkGuess() {
        const userGuess = parseInt(document.getElementById('user-guess').value);
        const guessResultElement = document.getElementById('guess-result');

        if (isNaN(userGuess)) {
            guessResultElement.textContent = 'Please enter a valid number.';
        } else {
            if (userGuess === randomNumber) {
                guessResultElement.textContent = 'Congratulations! You guessed the correct number!';
            } else {
                guessResultElement.textContent = 'Oops! Try again.';
            }
        }
    }

    // Random Quote Generator
    const quotes = [
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "Strive not to be a success, but rather to be of value. - Albert Einstein",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
    ];

    function generateQuote() {
        const quoteDisplayElement = document.getElementById('quote-display');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplayElement.textContent = quotes[randomIndex];
    }