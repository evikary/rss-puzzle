import { INIT_STATE, SAVE_LOGIN } from './constans';
import { InitStateActionType, LoginFormData, SaveLoginActionType } from './types';

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

export type AllActions = InitStateActionType | SaveLoginActionType;
