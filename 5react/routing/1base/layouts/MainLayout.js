import { Outlet, NavLink } from "react-router-dom";

const MainLayout = () => {
  return (<>
    <header>
      <nav className="nav">
        <NavLink to="/">Главная</NavLink>—
        <NavLink to="about">Обо мне</NavLink>—
        <NavLink to="blog">Блог</NavLink>—
        <NavLink to="contact">Контакты</NavLink>
      </nav>
    </header>
    <main>
      <Outlet/>
    </main>
  </>)
}

export default MainLayout;