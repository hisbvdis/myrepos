import { useDispatch } from "react-redux/es/exports";
import { changeUser, removeUser } from "./users.slice";

const User = ({ id, name, isAdmin, isBanned }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{name}</span>
      —
      <label>
        <input
          type="checkbox"
          checked={isAdmin === true}
          onChange={(evt) => dispatch(changeUser({
            id,
            field: "isAdmin",
            value: evt.target.checked,
          }))}
        />
        <span>Админ</span>
      </label>
      —
      <label>
        <input
          type="checkbox"
          checked={isBanned === true}
          onChange={(evt) => dispatch(changeUser({
            id,
            field: "isBanned",
            value: evt.target.checked,
          }))}
        />
        <span>Забанен</span>
      </label>
      <button onClick={() => dispatch(removeUser(id))}>Remove</button>
    </li>
  );
};

export default User;