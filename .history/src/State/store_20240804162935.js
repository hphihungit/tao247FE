import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";

const rootReducers = combineReducers({

})

exconst store = legacy_createStore(rootReducers, applyMiddleware(thunk))