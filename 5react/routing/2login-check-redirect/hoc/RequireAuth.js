// =============================================================================
// HOC, проверяющий авторизованность (если нет — переадресует)
// =============================================================================

// 1. Импортировать зависимости
// 1.1. Хук для работы с контекстом "AuthContext"
import { useAuth } from "../hooks/useAuth.js";
// 1.2. Хук навигации
import { useNavigate } from "react-router-dom";
// 1.3. Хук получения данных "URL и состояния"
import { useLocation } from "react-router-dom";
// 1.4. Хук вызова при обновлении компонента
import { useEffect } from "react";


// 2. Создать HOC
const RequireAuth = ({children}) => {
  // 2.1. Получить данные "URL и состояния" текущей страницы
  const location = useLocation();
  // 2.2. Создать функцию навигации
  const navigate = useNavigate();
  // 2.3. Получить данные из контекста "AuthContext"
  const { isAuth } = useAuth();
  
  // 2.4. Если пользователь не авторизован, перейти на страницу авторизации
  useEffect(() => {
    if (!isAuth) {
      // В "state" поместить данные о текущей странице
      navigate("/login", {state: {from: location}, replace: true});
    }
  }, [])

  // 2.5. Если пользователь авторизован — показать дочерний компонент. Тот,
  // .... который в файле "App.js" был вложен внутрь компонента <RequireAuth/>
  return (<>
    { children }
  </>)
}

export default RequireAuth;