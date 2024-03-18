import { logoutAction } from '../../store/actions';
import store from '../../store/store';
import './style.css';

function modalWindow() {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modalOverlay');

  modalOverlay.innerHTML = `
    <div class='modal'>
        <h2 class='text'>Are you sure you want to logout?</h2>
        <div class='btns'>
            <button class='btnModal yesBtn'>Yes</button>
            <button class='btnModal noBtn'>No</button>
        </div>
    </div>
  `;

  const yesBtn = modalOverlay.querySelector('.yesBtn');
  const noBtn = modalOverlay.querySelector('.noBtn');

  noBtn?.addEventListener('click', () => {
    modalOverlay.remove();
  });

  yesBtn?.addEventListener('click', () => {
    const header = document.querySelector('.header');
    store.dispatch(logoutAction());
    modalOverlay.remove();
    header?.remove();
  });

  return modalOverlay;
}

const modal = modalWindow();

export default modal;
