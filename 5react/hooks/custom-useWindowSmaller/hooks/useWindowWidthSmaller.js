// =====================================================================
// СОЗДАНИЕ ХУКА
// =====================================================================
import { useEffect, useState } from "react";

const useWindowSmaller = (size) => {
  // 1. СОСТОЯНИЕ ХУКА
  // 1.1. Результат проверки ширины экрана
  const [result, setResult] = useState();


  // 2. ФУНКЦИОНАЛ ХУКА
  // 2.1. Функция проверки ширины экрана (изменяет значение в состоянии)
  const checkWindowSize = () => {
    setResult(window.innerWidth < size);
  }


  // 3. АВТОМАТИЧЕСКОЕ ДЕЙСТВИЕ ПРИ ПОДКЛЮЧЕНИИ ХУКА
  useEffect(() => {
    // 3.1. Выполнить функцию проверки ширины (обновит состояние)
    checkWindowSize();
    // 3.2. Повесить обработчик (выполняет проверку при изменении размера окна)
    window.addEventListener("resize", checkWindowSize);

    // 3.3. Действие при удалении хука
    return () => {
      // Удалить обработчик
      return window.removeEventListener("resize", checkWindowSize)
    };
  }, [])


  // 4. ВЕРНУТЬ ИНТЕРФЕЙС ХУКА
  // 4.1. result — результат проверки размера экрана
  return result;
}

export default useWindowSmaller;