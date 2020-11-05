import { SET_PAGES_AMOUNT } from "../constants";
import { Action } from "../types";

export function setPagesAmount(pagesAmount: number): Action {
    return {
        type: SET_PAGES_AMOUNT,
        body: pagesAmount
    };
};

export function pagesAmountReducer(state: number = 1, action: Action): number {
    switch(action.type) {
        case SET_PAGES_AMOUNT:
            return action.body;
        default:
            return state;
    }
}