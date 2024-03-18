import { INIT_STATE, SAVE_LOGIN } from './constans';
import { AllActions } from './actions';
import { StateData } from './types';

export const initialState: StateData = {
  firstName: '',
  surname: '',
};

export type RootReducerType = (state: StateData | undefined, action: AllActions) => StateData;

export const rootReducer = (state = initialState, action: AllActions): StateData => {
  switch (action.type) {
    case INIT_STATE:
      return {
        ...state,
        firstName: action.payload.firstName,
        surname: action.payload.surname,
      };
    case SAVE_LOGIN:
      return {
        ...state,
        firstName: action.payload.firstName,
        surname: action.payload.surname,
      };
    default:
      return state;
  }
};
