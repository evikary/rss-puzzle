import { startGameAction } from '../../store/actions';
import store from '../../store/store';
import './style.css';

function startScreen() {
  const { firstName, surname } = store.getState();
  const start = document.createElement('div');
  start.classList.add('box');
  start.innerHTML = `
    <h1 class='title'>English Puzzle</h1>
    <span class='galaxy'></span>
    <p class='greeting'>Hello, ${firstName} ${surname}!</p>
    <p class='description'>Click on words, collect phrases. Words can be drag and drop. <br/>Select tooltips in the menu.</p>
    <button class='startBtn'>Start<span class='play'></span></button>
  `;

  const startBtn = start.querySelector('.startBtn');

  startBtn?.addEventListener('click', () => {
    store.dispatch(startGameAction());
  });

  return start;
}

export default startScreen;
