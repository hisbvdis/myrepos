// 1.Действия
// 1.1. Добавить типы действий
const actionTypes = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
}

// 1.2. Добавить действия
const actions = {
  increase: () => ({
    type: actionTypes.INCREASE
  }),
  decrease: () => ({
    type: actionTypes.DECREASE
  }),
}


// 2. Начальное состояние
// 2.1. Задать начальное состояние
const initialState = {
  result: 0
}


// 3. Редьюсер
// 3.1. Создать редьюсер
const counter = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE:
      return { result: state.result + 1 }

    case actionTypes.DECREASE:
      return { result: state.result - 1 }

    default:
      return state;
  }
}


// 4. Экспорт
// 4.1. Именованный экспорт действий
export { actions };
// 4.2. Экспорт по умолчанию редьюсера
export default counter;