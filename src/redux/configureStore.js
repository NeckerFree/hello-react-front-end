import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './greetings/greetings';

const middleWare = applyMiddleware(thunk, logger);
const store = configureStore(
  {
    reducer: { greetingReducer },
    middleWare,
  },
);
export default store;
