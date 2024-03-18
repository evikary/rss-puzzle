import { saveLoginAction } from '../../store/actions';
import store from '../../store/store';
import './style.css';
import { nameListener, surnameListener } from './validator-form';

function loginForm() {
  const form = document.createElement('form');
  form.classList.add('form');
  form.innerHTML = `
    <label><input class='input' type='text' name='name' class='first_name' placeholder="First name" required /></label>
    <label><input class='input' type='text' name='surname' class='surname' placeholder="Surname" required /></label>
    <button class='btn_login'>Sign in</button>
  `;

  const inputs = form.querySelectorAll('.input');

  nameListener(inputs[0] as HTMLInputElement);
  surnameListener(inputs[1] as HTMLInputElement);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputName = inputs[0] as HTMLInputElement;
    const inputSurname = inputs[1] as HTMLInputElement;

    store.dispatch(saveLoginAction({ firstName: inputName.value, surname: inputSurname.value }));
  });

  return form;
}

export default loginForm;
