import './style.css';
import loginForm from './components/login/login-form';
import store from './store/store';
import { initStateAction } from './store/actions';

store.subscribe(render);

function render() {
  const state = store.getState();

  if (state.firstName === '') {
    document.body.append(loginForm);
  } else {
    loginForm.remove();
  }
}

store.dispatch(initStateAction());
