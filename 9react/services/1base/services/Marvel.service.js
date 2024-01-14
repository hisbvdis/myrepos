// Основа адреса для краткости
const baseURL = "https://gateway.marvel.com:443/v1/public";
// Ключ доступа к API
const apiKey = "apikey=fa048bd5ea2cf04c794f49fdb2d0415a";

// Базовая функция получения данных из API
const getData = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status — ${res.status}`);
  }
  const data = await res.json();
  return data;
}

// Функция получения списка пользователей (с помощью "базовой функции")
export const getUserList = async (count=10, offset=0) => {
  const data = await getData(`${baseURL}/characters?limit=${count}&offset=${offset}&${apiKey}`);
  return data.data.results.map(convertUserData);
}

// Функция получения пользователя (с помощью "базовой функции")
export const getUser = async (id) => {
  const data = await getData(`${baseURL}/characters/${id}?${apiKey}`);
  return convertUserData(data.data.results[0]);
}

// Функция преобразования сложных данных из ответа в удобный объект
export const convertUserData = (obj) => {
  return {
    id: obj.id,
    name: obj.name,
    imgSrc: obj.thumbnail.path + "." + obj.thumbnail.extension,
  }
}
