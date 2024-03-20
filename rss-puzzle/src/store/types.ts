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

/// Types collection levels

export interface Level {
  rounds: Rounds[];
  roundsCount: number;
}

export interface Rounds {
  levelData: LevelData;
  words: WordsRound[];
}

export interface LevelData {
  id: string;
  name: string;
  imageSrc: string;
  cutSrc: string;
  author: string;
  year: string;
}

export interface WordsRound {
  audioExample: string;
  textExample: string;
  textExampleTranslate: string;
  id: number;
  word: string;
  wordTranslate: string;
}
