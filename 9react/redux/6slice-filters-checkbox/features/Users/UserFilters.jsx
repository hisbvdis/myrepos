import { useDispatch, useSelector } from "react-redux";
import { addFilter, removeFilter, selectFilters } from "./users.slice";

const UserFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const filterElems = [
    {id: 0, name: "isAdmin", title: "Админ"},
    {id: 1, name: "isBanned", title: "Забанен"},
  ]
  
  return (<>
    {filterElems.map(({id, name, title}) => (
      <label key={id}>
        <input 
          type="checkbox"
          name={name}
          checked={filters[name]}
          onChange={(evt) => evt.target.checked 
            ? dispatch(addFilter(name))
            : dispatch(removeFilter(name))}
        />
        <span>{title}</span>
      </label>
    ))}
  </>)
}

export default UserFilters;