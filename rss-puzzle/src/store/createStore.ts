import { StateData, SubcribersType } from './types';
import { AllActions, initStateAction } from './actions';
import { RootReducerType } from './rootReducer';

const createStore = (rootReducer: RootReducerType, initialState?: StateData) => {
  let state = rootReducer(initialState, initStateAction());
  const subcribers: SubcribersType[] = [];
  return {
    dispatch(action: AllActions) {
      state = rootReducer(state, action);
      subcribers.forEach((sub: SubcribersType) => sub());
    },
    subscribe(callback: () => void) {
      subcribers.push(callback);
    },
    getState() {
      return state;
    },
  };
};

export default createStore;
