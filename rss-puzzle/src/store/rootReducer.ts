import { INIT_STATE, LOGOUT, SAVE_LOGIN, START_GAME } from './constans';
import { AllActions } from './actions';
import { StateData } from './types';

export const initialState: StateData = {
  firstName: '',
  surname: '',
  startGame: false,
};

export type RootReducerType = (state: StateData | undefined, action: AllActions) => StateData;

export const rootReducer = (state = initialState, action: AllActions): StateData => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...initialState,
      };
    case INIT_STATE:
      return {
        ...state,
        firstName: action.payload.firstName,
        surname: action.payload.surname,
        startGame: false,
      };
    case SAVE_LOGIN:
      return {
        ...state,
        firstName: action.payload.firstName,
        surname: action.payload.surname,
        startGame: false,
      };
    case START_GAME:
      return {
        ...state,
        startGame: true,
      };
    default:
      return state;
  }
};
