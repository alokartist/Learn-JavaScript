
function play(playerChoice) {
    const choices = ['snake', 'water', 'gun'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === 'snake' && computerChoice === 'water') ||
        (playerChoice === 'water' && computerChoice === 'gun') ||
        (playerChoice === 'gun' && computerChoice === 'snake')
    ) {
        result = `You win! Computer chose ${computerChoice}.`;
    } else {
        result = `You lose! Computer chose ${computerChoice}.`;
    }

    document.getElementById('result').textContent = result;
}