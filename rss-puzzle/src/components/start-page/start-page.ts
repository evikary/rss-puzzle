import './style.css';

function startScreen() {
  const start = document.createElement('div');
  start.classList.add('box');
  start.innerHTML = `
    <h1 class='title'>English Puzzle</h1>
    <span class='galaxy'></span>
    <p class='description'>Click on words, collect phrases. Words can be drag and drop. <br/>Select tooltips in the menu.</p>
  `;

  return start;
}

const startGame = startScreen();

export default startGame;
