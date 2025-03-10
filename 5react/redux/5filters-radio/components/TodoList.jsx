import { useSelector, useDispatch } from "react-redux";
import { selectFilteredTodos } from "../store/todos/todos.selectors";
import { removeTodo, toggleTodo } from "../store/todos/todos.actions";
import { selectComplitionFilter } from "../store/filters/filters.selectors";

const TodoList = () => {
  const dispatch = useDispatch();
  const complitionFilter = useSelector(selectComplitionFilter).activeValue;
  const filteredTodos = useSelector((state) => selectFilteredTodos(state, complitionFilter));
  
  return (<>
    <ul>
      {filteredTodos.map(({id, title, isCompleted}) => (
        <li key={id}>
          <label>
            <input
              type="checkbox"
              checked={isCompleted === true}
              onChange={() => dispatch(toggleTodo(id))}/>
            <span>{title}</span>
          </label>
          <button onClick={() => dispatch(removeTodo(id))}>Remove</button>
        </li>
      ))}
    </ul>
  </>)
}

export default TodoList;