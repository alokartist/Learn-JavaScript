const canvas = document.getElementById('botCanvas');
  const ctx = canvas.getContext('2d');
  
  let botX = 50;
  let botY = 300;
  const botWidth = 30;
  const botHeight = 30;
  const botSpeed = 5;
  
  let points = 0;
  
  let obstacles = [
    { x: 200, y: 100, width: 50, height: 200 },
    { x: 400, y: 300, width: 50, height: 200 },
    { x: 600, y: 200, width: 50, height: 200 }
  ];
  
  let balloons = [
    { x: 250, y: 250, radius: 20, burst: false },
    { x: 450, y: 450, radius: 20, burst: false },
    { x: 650, y: 350, radius: 20, burst: false }
  ];
  
  function drawBot() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(botX, botY, botWidth, botHeight);
  }
  
  function drawObstacles() {
    ctx.fillStyle = 'black';
    obstacles.forEach(obstacle => {
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
  }
  
  function drawBalloons() {
    balloons.forEach(balloon => {
      ctx.beginPath();
      ctx.arc(balloon.x, balloon.y, balloon.radius, 0, Math.PI * 2);
      ctx.fillStyle = balloon.burst ? 'red' : 'yellow';
      ctx.fill();
      ctx.closePath();
    });
  }
  
  function checkCollision() {
    obstacles.forEach(obstacle => {
      if (botX < obstacle.x + obstacle.width &&
          botX + botWidth > obstacle.x &&
          botY < obstacle.y + obstacle.height &&
          botY + botHeight > obstacle.y) {
        alert('Game Over! Bot collided with an obstacle.');
        resetGame();
      }
    });
  
    balloons.forEach(balloon => {
      if (!balloon.burst && Math.sqrt((botX - balloon.x) ** 2 + (botY - balloon.y) ** 2) < botWidth + balloon.radius) {
        balloon.burst = true;
        points += 10;
      }
    });
  }
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBot();
    drawObstacles();
    drawBalloons();
    checkCollision();
    requestAnimationFrame(draw);
  }
  
  function resetGame() {
    botX = 50;
    botY = 300;
    balloons.forEach(balloon => {
      balloon.burst = false;
    });
    points = 0;
  }
  
  draw();
  
  window.addEventListener('keydown', function(event) {
    switch(event.key) {
      case 'ArrowUp':
        if (botY - botSpeed >= 0) {
          botY -= botSpeed;
        }
        break;
      case 'ArrowDown':
        if (botY + botHeight + botSpeed <= canvas.height) {
          botY += botSpeed;
        }
        break;
      case 'ArrowLeft':
        if (botX - botSpeed >= 0) {
          botX -= botSpeed;
        }
        break;
      case 'ArrowRight':
        if (botX + botWidth + botSpeed <= canvas.width) {
          botX += botSpeed;
        }
        break;
    }
  });