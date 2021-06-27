import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import {weatherReducer} from './weatherReducer';

const logger = createLogger();
let middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

export const store = createStore(
  combineReducers({
    weather: weatherReducer,
  }),
  applyMiddleware(...middleware),
);
