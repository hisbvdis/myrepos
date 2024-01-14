// 1. Импортировать зависимости
// 1.1. Действия с изменённым именем (указывается название редьюсера)
import { actions as userActions } from "../reducers/users.js";
// 1.2. Функция подклю
import { useDispatch } from "react-redux";
import { useState } from "react";


// 2. Компонент
const AddForm = ({addUser}) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  
  return (<>
    <form onSubmit={(evt) => {
      evt.preventDefault();
      dispatch(userActions.addUser(evt.target.name.value));
      setInput("");
    }}>
      <input
        type="text"
        name="name"
        placeholder="Имя"
        value={input}
        autoFocus={true}
        onChange={(evt) => setInput(evt.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  </>)
}

export default AddForm;