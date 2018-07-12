import { createStore, combineReducers } from 'redux';
import landingReducer from './landingReducer';

const reducers = {
  landingReducer,
};

const store = createStore(
  combineReducers(reducers),
);

export default store;