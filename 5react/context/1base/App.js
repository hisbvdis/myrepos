// 1. Импортировать зависимости
// 1.1. Хук работы с контекстом
import { useDataContext } from "./hooks/useDataContext";


// 2. Использовать контекст в компненте
const App = () => {
  // 2.1. Получить функционал работы с контекстом
  const { value, increaseValue, decreaseValue } = useDataContext();
  
  // 2.2. Использовать функционал работы с контекстом
  return (<>
    {/* Переменная, хранящая данные контекста */}
    <h1>{value}</h1>
    {/* Функции, изменяющие контекст */}
    <button onClick={increaseValue}>+1</button>
    <button onClick={decreaseValue}>-1</button>
  </>)
}

export default App;
