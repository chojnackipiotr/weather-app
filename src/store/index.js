import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger/src';

import {weatherReducer} from './weatherReducer';

const reduxMiddleware = [thunk, logger];

export const store = createStore(
  combineReducers({
    weather: weatherReducer,
  }),
  applyMiddleware(...reduxMiddleware),
);
