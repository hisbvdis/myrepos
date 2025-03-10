// 1. Импортировать зависимости
// 1.1. Компонент
import User from "./User.js";
// 1.2. Функция подключения к Redux
import { useSelector } from "react-redux";


// 2. Компонент
const List = () => {
  const users = useSelector(state => state.users.list);
  const search = useSelector(state => state.search);
  const filters = useSelector(state => state.filters);
  const result = [];
    
  users.forEach(user => {
    // 1. Если имя элемента не содержит текст из "Search", прервать
    if (user.name.toLowerCase().includes(search.toLowerCase()) === false) {
      return;
    }

    // 2. Если включён фильтр "На повышение", а у пользователя "false", прервать
    if (filters.promo === true && user.promo !== true) {
      return;
    }

    // 3. Если включён фильтр "Избранное", а у пользователя "false", прервать
    if (filters.favorite === true && user.favorite !== true) {
      return;
    }

    // 4. Добавить в результирующий массив
    result.push(user);
  })

  return (
    <ul>
      {result.map(user => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  )
}

export default List;