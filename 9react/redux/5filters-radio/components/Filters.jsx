import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/filters/filters.actions";
import { selectComplitionFilter } from "../store/filters/filters.selectors";

const Filters = () => {
  const dispatch = useDispatch();
  const complitionFilter = useSelector(selectComplitionFilter);

  return (
    <>
      {complitionFilter.values.map(({ id, name, value, title }) => (
        <label key={id}>
          <input
            type="radio"
            name={name}
            value={value}
            checked={complitionFilter.activeValue === value}
            onChange={() => dispatch(setFilter(name, value))}
          />
          <span>{title}</span>
        </label>
      ))}
    </>
  );
}

export default Filters;