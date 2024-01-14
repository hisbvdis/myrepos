import { useSelector } from "react-redux";
import { selectAllUsers, selectFilteredUsers } from "./users.slice";
import User from "./User";

const UserList = () => {
  const users = useSelector(selectFilteredUsers);
  
  return (<>
    <ul>
      {users.map(user => <User key={user.id} {...user} />)}
    </ul>
  </>)
}

export default UserList;