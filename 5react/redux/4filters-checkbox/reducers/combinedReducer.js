// 1. Импортировать зависимости
// 1.1. Обычные редьюсеры
import { reducer as users } from "./users.js";
import { reducer as filters } from "./filters.js";
import { reducer as search } from "./search.js";
// 1.2. Функция создания комбинированного редьюсера
import { combineReducers } from "redux";


// 2. Создать комбинированный редьюсер
const combinedReducer = combineReducers({users, filters, search});


// 3. Экспорт
// 3. Комбинированный редьюсер
export default combinedReducer;