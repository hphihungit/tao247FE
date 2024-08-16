import { applyMiddleware, legacy_createStore } from "redux";


const store = legacy_createStore(rootReducers, applyMiddleware(thunk))