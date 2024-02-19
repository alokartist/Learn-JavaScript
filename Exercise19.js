const gameContainer = document.getElementById('game-container');
    const holes = Array.from({ length: 9 }, (_, index) => createHole(index + 1));

    holes.forEach(hole => gameContainer.appendChild(hole));

    function createHole(id) {
      const hole = document.createElement('div');
      hole.className = 'hole';
      hole.dataset.id = id;

      const mole = document.createElement('div');
      mole.className = 'mole';
      hole.appendChild(mole);

      hole.addEventListener('click', () => whackMole(id));

      return hole;
    }

    function whackMole(id) {
      const mole = document.querySelector(`.hole[data-id="${id}"] .mole`);
      mole.style.display = 'none';
      // Add your scoring logic here
    }

    function getRandomHole() {
      const randomIndex = Math.floor(Math.random() * holes.length);
      return holes[randomIndex];
    }

    function showMole() {
      const hole = getRandomHole();
      const mole = hole.querySelector('.mole');
      mole.style.display = 'block';

      setTimeout(() => {
        mole.style.display = 'none';
        // Add your logic for handling a missed mole here
      }, 1000); // Adjust the display duration as needed

      setTimeout(showMole, 1500); // Adjust the time between moles as needed
    }

    showMole(); // Start the game