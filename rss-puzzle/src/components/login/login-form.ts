import './style.css';

function formLogin() {
  const form = document.createElement('form');
  form.classList.add('form');
  form.innerHTML = `
    <label><input class='input' type='text' name='name' class='first_name' placeholder="First name" required /></label>
    <label><input class='input' type='text' name='surname' class='surname' placeholder="Surname" required /></label>
    <button>Sign in</button>
  `;
  return form;
}

const loginForm = formLogin();

export default loginForm;
