import modal from '../modal/modal';
import './style.css';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.innerHTML = `
  <nav class='navigation'>
    <button class='logout'>Logout<span class='pic'></span></button>
  </nav>`;

  const btnLogout = header.querySelector('.logout');
  btnLogout?.addEventListener('click', () => {
    document.body.append(modal);
  });

  return header;
}

const headerGame = createHeader();

export default headerGame;
