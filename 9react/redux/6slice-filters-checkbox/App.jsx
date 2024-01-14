import AddUser from "./features/Users/AddUser";
import UserSearch from "./features/Users/UserSearch";
import "./App.css";
import UserList from "./features/Users/UserList";
import UserFilters from "./features/Users/UserFilters";

const App = () => {
  return (<>
    <section>
      <h2>Добавить пользователя</h2>
      <AddUser/>
    </section>

    <section>
      <h2>Список пользователей</h2>
      <UserSearch/>
      <UserFilters/>
      <UserList/>
    </section>
  </>)
}

export default App;