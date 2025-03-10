// ========================================================================
// HOC, создающий контекст и его компонент-провайдер
// ========================================================================

// 1. Импортировать зависимости
// 1.1. Функцию создания контекста
import { createContext } from "react";
// 1.2. Хук состояния
import { useState } from "react";


// 2. Создать контекст для хранения статуса "авторизованность"
export const AuthContext = createContext(null);


// 3. Создать HOC, возвращающий компонент-провайдер для данного контекста
export const AuthProvider = ({children}) => {
  // 3.1. Состояние для хранения "Статуса авторизованности"
  const [isAuth, setAuth] = useState(false);

  // 3.2. Функции для изменения "Статуса авторизованности"
  const signIn = () => setAuth(true);
  const signOut = (cb) => setAuth(false);

  // 3.3. Данные контекста (доступные детям):
  // - статус авторизованности "auth"
  // - функции для изменения статуса авторизованности "signIn", "signOut"
  const value = {isAuth, signIn, signOut};
  
  return(<>
    {/* 3.4. В компонент-провайдер передаётся value (данные контекста) */}
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  </>)
}