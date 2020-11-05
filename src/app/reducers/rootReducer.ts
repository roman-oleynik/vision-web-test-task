import { Action, Book, State } from '../types';
import { combineReducers } from "redux";
import { SET_BOOKS, SET_PAGES_AMOUNT, SET_CUR_PAGE } from '../constants';

export function booksReducer(state: Book[] = [], action: Action): Book[] {
    switch(action.type) {
        case SET_BOOKS:
            return action.body;
        default:
            return state;
    }
}

export function pagesAmountReducer(state: number = 1, action: Action): number {
    switch(action.type) {
        case SET_PAGES_AMOUNT:
            return action.body;
        default:
            return state;
    }
}

export function curPageReducer(state: number = 1, action: Action): number {
    switch(action.type) {
        case SET_CUR_PAGE:
            return action.body;
        default:
            return state;
    }
}

export const rootReducer = combineReducers<State>({
    books: booksReducer,
    pagesAmount: pagesAmountReducer,
    curPage: curPageReducer,
});