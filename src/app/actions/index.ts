import { SET_BOOKS, SET_CUR_PAGE, SET_PAGES_AMOUNT } from "../constants";
import { Book, Action } from "../types";

export function setBooks(books: Book[]): Action {
    return {
        type: SET_BOOKS,
        body: books
    };
};
export function setPagesAmount(pagesAmount: number): Action {
    return {
        type: SET_PAGES_AMOUNT,
        body: pagesAmount
    };
};
export function setCurPage(curPage: number): Action {
    return {
        type: SET_CUR_PAGE,
        body: curPage
    };
};