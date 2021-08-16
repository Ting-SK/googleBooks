import { combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoriesReducer } from "./categoriesReducer";
import { pageIndexReducer } from "./pageIndexReducer";
import { sortingReducer } from "./sortingReducer";
import { valueReducer } from "./valueReducer";
import { bookNameReducer } from "./bookNameReducer";

export const rootReducer = combineReducers({
  value: valueReducer,
  categories: categoriesReducer,
  sorting: sortingReducer,
  pageIndex: pageIndexReducer,
  bookName: bookNameReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
