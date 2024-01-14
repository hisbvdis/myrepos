// =============================================================================
// 1. ДЕЙСТВИЯ
// =============================================================================
// 1.1. Добавить типы действий
const actionTypes = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
}

// 1.2. Добавить действия (создаются с помощью функций-создателей действий)
const actions = {
  addItem: (value) => ({
    type: actionTypes.ADD_ITEM,
    color: value
  }),
  removeItem: (value) => ({
    type: actionTypes.REMOVE_ITEM,
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
// 4. Экспорт
// =============================================================================
// 4.1. Именованный экспорт действий и редьюсера
export { actions, reducer };