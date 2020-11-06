import {rootReducer} from '../reducers/rootReducer';
import { createLogger } from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';

const loggerMiddleware = createLogger();

export const store = createStore(
	rootReducer,
	applyMiddleware(loggerMiddleware),
);
