// 1. Импортировать зависимости
// 1.1. Действия из редьюсера  (с добавлением к названию редьюсера)
import { actions as searchActions } from "../reducers/search.js";
// 1.2. Хуки для работы с Redux-хранилищем
import { useDispatch, useSelector } from "react-redux";


const Search = ({}) => {
  // 2. Переменной React-компонента присваивается значение из Redux-хранилища
  const search = useSelector(state => state.search);

  // 3. Хук для сопоставления функции с Redux-хранилищем
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Поиск по имени"
      value={search}
      // 4. Действие производится с Redux-хранилищем
      onChange={ (evt) => dispatch(searchActions.changeSearch(evt.target.value)) }
    />
  )
}

export default Search;