import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import code from "./Reducers/codeReducer";
const reducer = combineReducers({
    code,
});
const store = configureStore({
    reducer,
});
export default store;
