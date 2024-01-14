import { Link } from "react-router-dom";
import { articles } from "../../data/data.js";

const Articles = () => {
  return (<>
    <h2>Все статьи</h2>
    {articles.map(({id, title, content}) => (
      <article key={id}>
        <h3><Link to={`../article/${id}`}>{title}</Link></h3>
        <p>{content}</p>
      </article>
    ))}
  </>)
}

export default Articles;