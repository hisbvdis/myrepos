// 1. Импортировать зависимости
// 1.1. Функция получения данных из контекста
import { useContext } from "react";
// 1.2. Контекст (не компонент, а именно хранилище)
import { Data } from "../contexts/DataContext.js";


// 2. Создать хук
export const useDataContext = () => {
  // 2.1. Вернуть данные, полученные из хранилища контекста
  return useContext(Data);
}
