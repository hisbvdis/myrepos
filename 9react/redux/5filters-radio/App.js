import AddTodo from "./components/AddTodo";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";

const App = () => {
  return (<>
    <AddTodo />
    <Filters/>
    <TodoList />
  </>)
}

export default App;