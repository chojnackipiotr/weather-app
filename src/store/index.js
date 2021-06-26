import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger/src';

const initialState = {
  test: true,
};

const reduxMiddleware = [thunk, logger];

const reducer = ( state = initialState, action ) => {
  return state;
};

export const store = createStore(
  reducer,
  applyMiddleware(...reduxMiddleware),
);
