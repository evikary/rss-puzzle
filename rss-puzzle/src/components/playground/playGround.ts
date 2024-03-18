import './style.css';

function playGame() {
  const container = document.createElement('main');
  container.classList.add('container');
  container.innerHTML = `
      <div class='play-box'>Playground</div>
    `;

  return container;
}

export default playGame;
