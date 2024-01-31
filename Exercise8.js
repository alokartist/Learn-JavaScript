const quotes = [
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt",
    "Strive not to be a success, but rather to be of value. -Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
    "The only way to do great work is to love what you do. -Steve Jobs"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    const quoteContainer = document.getElementById('quoteContainer');
    const quoteText = document.getElementById('quoteText');

    quoteText.innerHTML = randomQuote;
    quoteContainer.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
