import { combineReducers, createStore } from "redux";

import { reducer as todos } from "./todos/todos.reducer";
import { reducer as filters } from "./filters/filters.reducer";

const rootReducer = combineReducers({todos, filters});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());