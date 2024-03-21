import './style.css';
import store from './store/store';
import { initStateAction } from './store/actions';
import loginForm from './components/login/login-form';
import headerGame from './components/header/header';
import startScreen from './components/start-page/start-page';
import playGame from './components/playground/playGround';

store.subscribe(render);

function render() {
  const state = store.getState();

  if (state.firstName === '') {
    document.body.innerHTML = '';
    document.body.append(loginForm());
  } else if (state.firstName !== '' && state.render) {
    document.body.innerHTML = '';
    document.body.append(headerGame);
    document.body.append(startScreen());
  }

  if (state.startGame && state.render) {
    document.body.innerHTML = '';
    document.body.append(headerGame);
    document.body.append(playGame());
  }
}

store.dispatch(initStateAction());
