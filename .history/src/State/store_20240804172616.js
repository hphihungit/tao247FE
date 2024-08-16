import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";

const rootReducers = combineReducers({
    auth
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))