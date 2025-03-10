import { actionTypes } from "./todos.actions";
import { initialState } from "./todos.initialState";

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      return {
        ...state,
        list: state.list.concat({
          id: state.nextId,
          title: action.title,
          isCompleted: false,
        }),
        nextId: ++state.nextId,
      }
    }

    case actionTypes.REMOVE_TODO: {
      return {
        ...state,
        list: state.list.filter(todo => todo.id !== action.id)
      }
    }

    case actionTypes.TOGGLE_TODO: {
      return {
        ...state,
        list: state.list.map(todo => (
          todo.id === action.id ? {...todo, isCompleted: !todo.isCompleted} : todo
        ))
      }
    }

    default: {
      return state;
    }
  }
}