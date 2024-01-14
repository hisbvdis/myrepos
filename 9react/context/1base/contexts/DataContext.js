// 1. Импортировать зависимости
// 1.1. Метод создания контекста
import { createContext } from "react";
// 1.2. Хук "состояния" для хранения данных контекста
import { useState } from "react";


// 2. Создать контекст (само хранилище)
export const Data = createContext();


// 3. Создать компонент контекста
export const DataContext = ({ children }) => {
  // 3.1. Состояние контекста  (если нужно, задать начальные данные)
  const [value, setNumber] = useState(0);

  // 3.2. Функции изменения состояния
  const increaseValue = () => setNumber((prev) => prev + 1);
  const decreaseValue = () => setNumber((prev) => prev - 1);

  // 3.4. Вернуть провайдер контекста
  return (
    // 3.5. В "value" передать объект с переменными для работы с контекстом
    <Data.Provider value={{value, increaseValue, decreaseValue}}>
      {children}
    </Data.Provider>
  )
}
