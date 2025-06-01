let score = 0;
const square = document.getElementById("square");
const scoreDisplay = document.getElementById("score");

function moveSquare() {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    square.style.left = `${x}px`;
    square.style.top = `${y}px`;
}

square.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveSquare();
});

setInterval(moveSquare, 1000); // Move square every second