import './style.css';
import store from './store/store';
import { initStateAction } from './store/actions';
import loginForm from './components/login/login-form';
import headerGame from './components/header/header';

store.subscribe(render);

function render() {
  const state = store.getState();

  if (state.firstName === '') {
    document.body.append(loginForm());
  } else {
    document.body.innerHTML = '';
    document.body.append(headerGame);
  }
}

store.dispatch(initStateAction());
