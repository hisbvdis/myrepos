export const selectAllTodos = (state) => state.todos.list;

export const selectFilteredTodos = (state, filter) => {
  switch (filter) {
    case "all": {
      return state.todos.list;
    }

    case "active": {
      return state.todos.list.filter(todo => todo.isCompleted === false);
    }

    case "completed": {
      return state.todos.list.filter(todo => todo.isCompleted === true);
    }

    default: {
      return state.todos.list;
    }
  }
}