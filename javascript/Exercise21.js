const images = [
    '🐱', '🐶', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼',
    '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔'
  ];

  const shuffledImages = [...images, ...images].sort(() => Math.random() - 0.5);
  let flippedCards = [];

  function createCard(image, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index;

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    cardFront.innerText = '?';

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.innerText = image;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    card.addEventListener('click', () => flipCard(card));

    return card;
  }

  function flipCard(card) {
    if (flippedCards.length < 2 && !flippedCards.includes(card)) {
      card.classList.add('flipped');
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
      }
    }
  }

  function checkMatch() {
    const [card1, card2] = flippedCards;
    const index1 = card1.dataset.index;
    const index2 = card2.dataset.index;

    if (shuffledImages[index1] === shuffledImages[index2]) {
      // Match found
      flippedCards = [];
      if (document.querySelectorAll('.flipped').length === shuffledImages.length) {
        alert('Congratulations! You matched all the cards.');
      }
    } else {
      // No match, flip the cards back
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];
      }, 500);
    }
  }

  function initializeGame() {
    const gameContainer = document.getElementById('game-container');
    shuffledImages.forEach((image, index) => {
      const card = createCard(image, index);
      gameContainer.appendChild(card);
    });
  }

  initializeGame();