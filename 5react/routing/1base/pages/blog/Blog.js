import { NavLink, Outlet } from "react-router-dom";
import { categories } from "../../data/data.js";

const Blog = () => {
  return (<>
    <h1>Блог</h1>
    <h2>Категории блога</h2>
    <ul>
      <li>
        <NavLink to="./">Все категории</NavLink>
      </li>
      {categories.map(category => (
        <li key={category.id}>
          <NavLink to={`category/${category.id}`}>{category.title}</NavLink>
        </li>
      ))}
    </ul>
    
    <Outlet/>
  </>)
}

export default Blog;