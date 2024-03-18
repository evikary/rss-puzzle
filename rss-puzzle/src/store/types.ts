import { INIT_STATE, LOGOUT, SAVE_LOGIN } from './constans';

export interface LoginFormData {
  firstName: string;
  surname: string;
}

export interface StateData {
  firstName: string;
  surname: string;
}

export interface InitStateActionType {
  readonly type: typeof INIT_STATE;
  payload: LoginFormData;
}

export interface SaveLoginActionType {
  readonly type: typeof SAVE_LOGIN;
  payload: LoginFormData;
}

export interface LogoutActionType {
  readonly type: typeof LOGOUT;
}

export type SubcribersType = () => void;
