export const actionTypes = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
}

export const addTodo = (title) => ({
  type: actionTypes.ADD_TODO,
  title
})

export const removeTodo = (id) => ({
  type: actionTypes.REMOVE_TODO,
  id
})

export const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  id
})