// 1. Импортировать зависимости
// 1.1. Компоненты
import AddForm from "./components/AddForm.js";
import Search from "./components/Search.js";
import Filters from "./components/Filters.js";
import List from "./components/List.js";
// 1.2. Стили компонента
import "./App.css";


// 2. Компонент
const App = () => {
  return (<>
    <section>
      <h2>Добавить пользователя</h2>
      <AddForm/>
    </section>

    <section>
      <h2>Список пользователей</h2>
      <Search/>
      <Filters/>
      <List/>
    </section>
  </>)
}


export default App;