import { useParams } from "react-router-dom";
import { articles } from "../../data/data.js";
import Page404 from "../Page404.js";

const Article = () => {
  const {id} = useParams();
  const article = articles.find(article => article.id === Number(id));
  if (article === undefined) {
    return <Page404/>
  }
  
  return (<>
    <h1>{article.title}</h1>
    <p>{article.content}</p>
  </>)
}

export default Article;