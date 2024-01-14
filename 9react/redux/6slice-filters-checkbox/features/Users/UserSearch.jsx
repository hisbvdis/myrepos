import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, selectSearchQuery } from "./users.slice";


const UserSearch = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);

  return (<>
    <input
      type="text"
      placeholder="Поиск по имени"
      value={searchQuery}
      onChange={(evt) => dispatch(setSearchQuery(evt.target.value))}
    />
  </>);
}

export default UserSearch;