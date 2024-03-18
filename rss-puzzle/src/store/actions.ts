import { INIT_STATE, LOGOUT, SAVE_LOGIN } from './constans';
import { InitStateActionType, LoginFormData, LogoutActionType, SaveLoginActionType } from './types';

export const initStateAction = (): InitStateActionType => {
  const dataForm = localStorage.getItem('form');
  const data = dataForm ? JSON.parse(dataForm) : { firstName: '', surname: '' };

  return {
    type: INIT_STATE,
    payload: data,
  };
};

export const saveLoginAction = ({ firstName, surname }: LoginFormData): SaveLoginActionType => {
  const jsonForm = JSON.stringify({ firstName, surname });
  localStorage.setItem('form', jsonForm);

  return {
    type: SAVE_LOGIN,
    payload: { firstName, surname },
  };
};

export const logoutAction = (): LogoutActionType => {
  localStorage.removeItem('form');
  return {
    type: LOGOUT,
  };
};

export type AllActions = InitStateActionType | SaveLoginActionType | LogoutActionType;
