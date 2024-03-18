import './style.css';
import store from './store/store';
import { initStateAction } from './store/actions';
import loginForm from './components/login/login-form';
import headerGame from './components/header/header';
import startGame from './components/start-page/start-page';

store.subscribe(render);

function render() {
  const state = store.getState();

  if (state.firstName === '') {
    document.body.innerHTML = '';
    document.body.append(loginForm());
  } else {
    document.body.innerHTML = '';
    document.body.append(headerGame);
    document.body.append(startGame);
  }
}

store.dispatch(initStateAction());
