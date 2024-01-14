// =====================================================================
// СОЗДАНИЕ СЕРВИСА
// =====================================================================
// 0. Импортировать хук
import useHttp from "../hooks/useHttp.hook.js";

// Основа адреса для краткости
const baseURL = "https://gateway.marvel.com:443/v1/public";
// Ключ доступа к API
const apiKey = "apikey=fa048bd5ea2cf04c794f49fdb2d0415a";


const MarvelService = () => {
  // 1. Получить функционал хука HTTP-запросов
  // - request — функция выполнения запроса
  // - isLoading — статус загрузки
  // - error — наличие ошибки
  const {request, isLoading, error} = useHttp();

  // 2. Функция получения данных (с помощью "request" из хука)
  const getHeroes = async (count=10, offset=0) => {
    const data = await request(`${baseURL}/characters?${apiKey}&limit=${count}&offset=${offset}`);
    return data.data.results.map(simplifyFormat);
  }

  // 3. Функция, которая преобразует сложные данные из ответа в удобный объект
  const simplifyFormat = (item) => {
    return {
      id: item.id,
      name: item.name,
      imgSrc: item.thumbnail.path + "." + item.thumbnail.extension,
    }
  }

  // 4. Вернуть интерфейс хука и сервиса
  // 4.1. getHeroes — функция получения списка героев
  // 4.2. isLoading — статус загрузки
  // 4.3. error — наличие ошибки
  return {getHeroes, isLoading, error};
}

export default MarvelService;