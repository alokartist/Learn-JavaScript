const movieQuotes = [
    { quote: "Here's looking at you, kid.", movie: "Casablanca" },
    { quote: "May the Force be with you.", movie: "Star Wars" },
    { quote: "There's no place like home.", movie: "The Wizard of Oz" },
    // Add more movie quotes
];

const randomQuote = movieQuotes[Math.floor(Math.random() * movieQuotes.length)];
let attempts = 0;

document.getElementById('submit-btn').addEventListener('click', () => {
    const guess = document.getElementById('guess-input').value.toLowerCase();

    attempts++;

    if (guess === randomQuote.movie.toLowerCase()) {
        document.getElementById('result').textContent = `Congratulations! You guessed the movie correctly in ${attempts} attempts.`;
    } else {
        document.getElementById('result').textContent = `Incorrect! Here's a hint: "${randomQuote.quote}" is from which movie?`;
    }
});