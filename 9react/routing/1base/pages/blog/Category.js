import { Link, useParams } from "react-router-dom";
import { articles } from "../../data/data.js";

const Category = () => {
  const {id} = useParams();
  
  return (<>
    <h2>Статьи категории {id}</h2>
    {articles
      .filter(article => article.category === Number(id))
      .map(({id, title, content}) => (
        <article key={id}>
          <h3><Link to={`../article/${id}`}>{title}</Link></h3>
          <p>{content}</p>
        </article>
    ))}
  </>)
}

export default Category;