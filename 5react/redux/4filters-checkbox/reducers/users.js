// =============================================================================
// 1. ДЕЙСТВИЯ
// =============================================================================
// 1.1. Типы действий
const actionTypes = {
  ADD_USER: "ADD_USER",
  REMOVE_USER: "REMOVE_USER",
  CHANGE_USER: "CHANGE_USER",
}

// 1.2. Действия (создаются с помощью функций-создателей действий)
const actions = {
  addUser: (name) => ({
    type: actionTypes.ADD_USER,
    name,
  }),
  removeUser: (id) => ({
    type: actionTypes.REMOVE_USER,
    id
  }),
  changeUser: ({id, field, value}) => ({
    type: actionTypes.CHANGE_USER,
    id,
    field,
    value
  }),
}


// =============================================================================
// 2. НАЧАЛЬНОЕ СОСТОЯНИЕ
// =============================================================================
// 2.1. Задать начальное состояние
const initialState = {
  list: [
    {id: 0, name: "Roma", promo: true, favorite: false},
    {id: 1, name: "Vasya", promo: false, favorite: true},
  ],
  nextId: 10,
}


// =============================================================================
// 3. РЕДЬЮСЕР
// =============================================================================
// 3.1. Создать редьюсер
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        list: state.list.concat({
          id: state.nextId,
          name: action.name,
          promo: false,
          favorite: false
        }),
        nextId: state.nextId + 1
      }

    case actionTypes.REMOVE_USER:
      return {
        ...state,
        list: state.list.filter(user => user.id !== action.id)
      }
    
    case actionTypes.CHANGE_USER:
      return {
        ...state,
        list: state.list.map(user => {
          if (user.id === action.id) {
            return {
              ...user,
              [action.field]: action.value
            }
          }
          return user;
        })
      }
    
    default:
      return state;
  }
}


// =============================================================================
// 4. Экспорт
// =============================================================================
// 4.1. Именованный экспорт действий и редьюсера
export { actions, reducer };