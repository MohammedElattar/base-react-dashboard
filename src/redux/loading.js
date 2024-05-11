import {combineReducers} from "@reduxjs/toolkit";
import categories from '../modules/category/redux/loading'

const reducers = combineReducers({
    categories
});

export default reducers;