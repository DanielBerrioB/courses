import { createStore, combineReducers } from "redux";
import searchReducer from "./search/reducer";

const reducer = combineReducers({
  searchReducer
});

const store = createStore(reducer);

export default store;
