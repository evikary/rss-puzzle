import { INIT_STATE, LOGOUT, SAVE_LOGIN, START_GAME } from './constans';

export interface LoginFormData {
  firstName: string;
  surname: string;
}

export interface StateData {
  firstName: string;
  surname: string;
  startGame: boolean;
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

export interface StartGameActionType {
  readonly type: typeof START_GAME;
}

export type SubcribersType = () => void;
