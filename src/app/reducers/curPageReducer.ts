import { SET_CUR_PAGE } from "../constants";
import { Action } from "../types";

export function setCurPage(curPage: number): Action {
    return {
        type: SET_CUR_PAGE,
        body: curPage
    };
};

export function curPageReducer(state: number = 1, action: Action): number {
    switch(action.type) {
        case SET_CUR_PAGE:
            return action.body;
        default:
            return state;
    }
}