import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todos.actions";

const AddTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addTodo(evt.target.title.value));
    evt.target.title.value = "";
  }
  
  return (<>
    <form onSubmit={(evt) => handleSubmit(evt)}>
      <input type="text" name="title" placeholder="Add todo" autoFocus />
      <button>Add</button>
    </form>
  </>)
}

export default AddTodo;