import { useDispatch } from "react-redux/es/exports";
import { addUser } from "./users.slice";

const AddUser = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addUser(evt.target.name.value));
    evt.target.name.value = "";
  }
  
  return (<>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Имя" name="name" />
      <button type="submit">Добавить</button>
    </form>
  </>)
}

export default AddUser;