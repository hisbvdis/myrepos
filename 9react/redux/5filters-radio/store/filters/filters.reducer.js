import { actionTypes } from "./filters.actions";
import { initialState } from "./filters.initialState"

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FILTER: {
      return {
        ...state,
        [action.name]: {...state[action.name], activeValue: action.value}
      }
    }
    
    default: return state;
  }
}