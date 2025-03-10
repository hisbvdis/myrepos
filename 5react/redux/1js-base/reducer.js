// =============================================================================
// 1. ДЕЙСТВИЯ
// =============================================================================
// 1.1. Добавить типы действий
const actionTypes = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
}

// 1.2. Добавить действия
const actions = {
  addItem: (value) => ({
    type: actionTypes.ADD,
    color: value
  }),
  removeItem: (value) => ({
    type: actionTypes.REMOVE,
    color: value
  }),
}


// =============================================================================
// 2. НАЧАЛЬНОЕ СОСТОЯНИЕ
// =============================================================================
// 2.1. Задать начальное состояние
const initialState = [];


// =============================================================================
// 3. РЕДЬЮСЕР
// =============================================================================
// 3.1. Создать редьюсер
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return state.concat(action.color);

    case actionTypes.REMOVE_ITEM:
      return state.filter(item => item !== action.color)

    default:
      return state
  }
}


// =============================================================================
// 4. РАБОТА С ХРАНИЛИЩЕМ
// =============================================================================
// 4.1. Создать функцию, которая будет вызываться при действиях с хранилищем
const log = () => {
  // Функция будет выводить содержимое состояния
  console.log( store.getState() )
}

// 4.2. Создать хранилище (подставив редьюсер)
const store = Redux.createStore(reducer);

// 4.3. Подписаться на изменения хранилища
// .. При каждом изменении вызывать функцию "log", созданную выше
store.subscribe(log)

// 4.4. Выполнить действия
store.dispatch( actions.addItem("blue") );
store.dispatch( actions.addItem("yellow") );
store.dispatch( actions.addItem("green") );
store.dispatch( actions.removeItem("green") );