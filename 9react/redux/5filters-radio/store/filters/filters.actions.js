export const actionTypes = {
  SET_FILTER: "SET_FILTER",
}

export const setFilter = (name, value) => ({
  type: actionTypes.SET_FILTER,
  name,
  value
})