// =====================================================================
// ИСПОЛЬЗОВАНИЕ СЕРВИСА
// =====================================================================
import { useState, useEffect } from "react"
// 0. Импортировать сервис
import MarvelService from "./services/Marvel.service.js";


const App = () => {
  // 1. Состояние для загружаемых данных
  const [heroes, setHeroes] = useState([]);

  // 2. Получить функционал из сервиса
  // - getHeroes — функция получения одного пользователя
  // - isLoading — статус загрузки
  const {getHeroes, isLoading} = MarvelService();

  // 3. Использовать функционал сервиса
  useEffect(() => {
    // 3.1. Запросить данные о пользователе с помощью функции из сервиса
    getHeroes().then(data => setHeroes(data))
  }, [])
  

  return (<>
    {// 4. Отобразить данные с учётом переменной "Загрузка"
    isLoading
      ? "Загрузка" 
      : <ul>
          {heroes.map((hero) => <li key={hero.id}>{hero.name}</li>)}
        </ul>
    }
  </>)
}

export default App;
