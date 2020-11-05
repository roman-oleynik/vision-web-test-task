import { State } from '../types';
import { combineReducers } from "redux";
import { booksReducer } from './booksReducer';
import { pagesAmountReducer } from './pagesAmountReducer';
import { curPageReducer } from './curPageReducer';

export const rootReducer = combineReducers<State>({
    books: booksReducer,
    pagesAmount: pagesAmountReducer,
    curPage: curPageReducer,
});