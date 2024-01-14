// 1. Импортировать зависимости
// 1.1. Действия из редьюсера  (с добавлением к названию редьюсера)
import { actions as userActions } from "../reducers/users.js";
// 1.2. Функция подключения к Redux
import { useDispatch } from "react-redux";


// 2. Компонент
const User = ({user}) => {
  const dispatch = useDispatch();
  const {id, name, promo, favorite} = user;

  return (
    <li>
      <span>{name}</span>
      <span>&nbsp;</span>
      <label>
        <input
          type="checkbox"
          checked={promo}
          onChange={(evt) => dispatch(userActions.changeUser({
            id: id,
            field: "promo",
            value: evt.target.checked
          }))}
        />
        <span>Повысить</span>
      </label>
      <button onClick={() => dispatch(userActions.removeUser(id))}>Удалить</button>
      <label>
        <input
          type="checkbox"
          checked={favorite}
          onChange={(evt) => dispatch(userActions.changeUser({
            id: id,
            field: "favorite",
            value: evt.target.checked
          }))}
        />
        <span>В избранное</span>
      </label>
    </li>
  )
}

export default User;