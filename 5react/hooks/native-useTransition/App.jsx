// 1. Импортировать хук "useTransition"
import { useEffect, useState, useTransition } from "react";
import Comments from "./Comments";

const filterComments = (comments, query) =>
  comments.filter(({ name, body }) => name.concat(body).includes(query));

const App = () => {
  const [comments, setComments] = useState([]);
  const [query, setQuery] = useState("");

  // 2. Получить из хука статус ожидания и функцию для выполнения кода
  const [isPending, startTransition] = useTransition();

  // 3. Обернуть тяжелый код, не являющийся срочным
  const handleChange = (evt) => {
    // 3.1. Тяжёлый код — изменение состояния, из-за чего пересчитывается фильтр
    startTransition(() => {
      setQuery(evt.target.value);
    })
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then(setComments);
  }, []);

  return (<>
    <input type="text" onChange={handleChange}/>

    {/* 4. Во время ожидания выдавать сообщение */}
    {isPending ? <h1>Rendering</h1> : <Comments list={filterComments(comments, query)}/>}
  </>)
}

export default App;