const startButton = document.getElementById("startGame");
const point = document.getElementById("point");
let gameInterval;

startButton.onclick = () => {
  hideElement(startButton);
  movePoint(point, getRandomNumber(50, 1400), getRandomNumber(50, 600));
  startGameInterval(point);
};

const movePoint = (element, x, y) => {
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
};

const hideElement = (element) => {
  element.style.display = "none";
};

const startGameInterval = (element) => {
    clearInterval(gameInterval);
    gameInterval = setInterval(() => (
        movePoint(element, getRandomNumber(50, 1400), getRandomNumber(50, 600))
    ), 1000);
}

const getRandomNumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;