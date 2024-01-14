// 1. Импортировать зависимости
// 1.1. Действия из редьюсера
import { actions } from "./reducers/counter.js";
import { useDispatch, useSelector } from "react-redux";


// 2. Компонент
const App = () => {
  // Хук для отправки действий в Redux-хранилище
  const dispatch = useDispatch();

  // Переменной React-компонента присвоить значение из Redux-хранилища
  const result = useSelector(state => state.result);

  return (
    <form>
      <h2>Результат: {result}</h2>
      <button type="button" onClick={() => dispatch(actions.increase())}>Увеличить на 1</button>
      <button type="button" onClick={() => dispatch(actions.decrease())}>Уменьшить на 1</button>
    </form>
  )
}


export default App;