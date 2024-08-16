import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";

const rootReducers = {
const store = legacy_createStore(rootReducers, applyMiddleware(thunk))