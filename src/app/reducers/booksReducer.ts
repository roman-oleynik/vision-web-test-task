import { SET_BOOKS } from "../constants";
import { Action, Book } from "../types";

export function setBooks(books: Book[]): Action {
    return {
        type: SET_BOOKS,
        body: books
    };
};

export function booksReducer(state: Book[] = [], action: Action): Book[] {
    switch(action.type) {
        case SET_BOOKS:
            return action.body;
        default:
            return state;
    }
}