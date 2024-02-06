function submitQuiz() {
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    let score = 0;

    if (q1Answer && q1Answer.value === "Paris") {
      score += 1;
    }

    if (q2Answer && q2Answer.value === "Jupiter") {
      score += 1;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your score: ${score}/2`;
  }