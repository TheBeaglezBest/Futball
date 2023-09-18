const soccerBall = document.getElementById('soccer-ball');
const field = document.querySelector('.soccer-field');
const fieldRect = field.getBoundingClientRect();
const playerSpeed = 10;
const jumpHeight = 150;

let playerX = fieldRect.width / 2 - soccerBall.clientWidth / 2;
let playerY = fieldRect.height - soccerBall.clientHeight;

document.addEventListener('keydown', (event) => {
    if (event.key === 'w') {
        // Move right
        playerX += playerSpeed;
        if (playerX > fieldRect.width - soccerBall.clientWidth) {
            playerX = fieldRect.width - soccerBall.clientWidth;
        }
    } else if (event.key === 's') {
        // Move left
        playerX -= playerSpeed;
        if (playerX < 0) {
            playerX = 0;
        }
    } else if (event.key === ' ') {
        // Shoot (jump)
        jump();
    }

    updatePlayerPosition();
});

function jump() {
    const originalY = playerY;
    playerY -= jumpHeight;
    updatePlayerPosition();
    setTimeout(() => {
        playerY = originalY;
        updatePlayerPosition();
    }, 500); // Reset player position after 0.5 seconds (adjust as needed)
}

function updatePlayerPosition() {
    soccerBall.style.left = playerX + 'px';
    soccerBall.style.top = playerY + 'px';
}
