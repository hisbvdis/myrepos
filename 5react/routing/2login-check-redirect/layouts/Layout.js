// ========================================================================
// Компонент "Основной макет сайта"
// ========================================================================

// 1. Импортировать зависимости
// 1.1. Компоненты ссылки
import { Link } from "react-router-dom";
// 1.2. Компонент для дочернего маршрута
import { Outlet} from "react-router-dom";
// 1.3. Хук навигации
import { useNavigate } from "react-router-dom";
// 1.4. Хук для работы с контекстом "AuthContext"
import { useAuth } from "../hooks/useAuth.js";


// 2. Создать компонент
const Main = () => {
  // 2.1. Создать функцию навигации
  const navigate = useNavigate();
  // 2.2. Получить данные из контекста "AuthContext"
  const { isAuth, signOut } = useAuth();

  // 2.3. Функция "Выйти и переадресовать"
  const signOutGoHome = () => {
    signOut();
    navigate("/");
  }

  // 2.4. Кнопка "Выйти"
  const signOutButton = <button onClick={signOutGoHome}>Выйти</button>;

  return (<>
    <header>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/admin">Админка</Link>
      </nav>
      {/* 2.5. Если авторизовн, показать кнопку "Выйти" */}
      {isAuth && signOutButton}
    </header>
    <main>
      <Outlet/>
    </main>
  </>)
}

export default Main;