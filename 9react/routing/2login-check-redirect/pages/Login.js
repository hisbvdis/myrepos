// ========================================================================
// Компонент "Страница авторизации"
// ========================================================================

// 1. Импортировать зависимости
// 1.1. Хук для работы с контекстом "AuthContext"
import { useAuth } from "../hooks/useAuth.js";
// 1.2. Хук навигации
import { useNavigate } from "react-router-dom";
// 1.3. Хук получения данных "URL и состояния"
import { useLocation } from "react-router-dom";


// 2. Создать компонент
const Login = () => {
  // 2.1. Получить данные "URL и состояния" текущей страницы
  const location = useLocation();
  // 2.2. Создать функцию навигации
  const navigate = useNavigate();
  // 2.3. Получить данные из контекста "AuthContext"
  const { signIn } = useAuth();
  
  // 2.4. Взять из "state" адрес страницы, с которой была переадресация
  // — Если же "state" нет, значит переадресации не было и адресом для 
  //   переадресации сделать главную страницу "/"
  const fromPage = location.state?.from?.pathname || "/";

  // 2.5. Обработчик отправки формы
  const handleSubmit = (evt) => {
    // Предотвратить стандартное действие
    evt.preventDefault();
    // Авторизовать пользователя
    signIn();
    // Переадресовать по адресу "fromPage"
    navigate(fromPage, {replace: true});
  }
  
  return (<>
    <h1>Страница авторизации</h1>

    {/* 2.6. Если была переадресация, указать откуда */}
    {(fromPage !== "/") && <p>Переадресовано с {fromPage}</p>}

    {/* 2.7. Форма авторизации */}
    <form onSubmit={handleSubmit}>
      <button type="submit">Войти</button>
    </form>
  </>)
}

export default Login;