// ========================================================================
// Основной компонент приложения
// ========================================================================

// 1. Импортировать зависимости
// 1.1. Компоненты для маршрутизации
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// 1.2. Компоненты страниц
import Layout from "./layouts/Layout.js";
import Home from "./pages/Home.js";
import Admin from "./pages/Admin.js";
import Login from "./pages/Login.js";
// 1.3. Компонент-провайдер контекста со статусом "авторизованности"
import { AuthProvider } from "./hoc/AuthContext.js";
// 1.4. HOC проверки статуса "авторизованности"
import RequireAuth from "./hoc/RequireAuth.js";


// 2. Компонент
const App = () => {
  return (<>
    {/* 2.1. Компонент-провайдер контекста со статусом "авторизованности" */}
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            {/* 2.2. Путь ведёт на HOC-компонент "RequireAuth" */}
            <Route path="/admin" element={<RequireAuth><Admin/></RequireAuth>}/>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  </>)
}

export default App;