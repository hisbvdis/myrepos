// 1. Импортировать зависимости
// 1.1. Действия из редьюсера  (с добавлением к названию редьюсера)
import { useDispatch, useSelector } from "react-redux";
import { actions as filtersActions } from "../reducers/filters.js";


// 2. Компонент
const Filters = ({changeFilters}) => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  const filterElems = [
    {id: 1, name: "promo",    label: "На повышение"},
    {id: 2, name: "favorite", label: "Избранное"},
  ]
  
  return (<>
    {filterElems.map(({id, name, label}) => (
      <label key={id}>
        <input
          type="checkbox"
          name={name}
          value={filters[name]}
          onChange={(evt) => dispatch(filtersActions.changeFilters({
            name: evt.target.name,
            value: evt.target.checked
          }))}
        />
        <span>{label}</span>
      </label>
    ))}
  </>)
}

export default Filters;