import './style.css';
import loginForm from './components/login/login-form';
import { nameListener, surnameListener } from './components/login/validator-form';

document.body.append(loginForm);

const inputs = document.querySelectorAll('.input');

inputs.forEach((item, index) => {
  const input = item as HTMLInputElement;

  if (index === 0) {
    nameListener(input);
  } else {
    surnameListener(input);
  }
});
