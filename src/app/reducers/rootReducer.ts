import { Action, User } from '../types';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    loggedUser: (state: User | null = { id: "1" }, action: Action) => state
});