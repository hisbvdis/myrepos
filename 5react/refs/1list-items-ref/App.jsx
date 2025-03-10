import { useEffect, useRef } from "react"

// 0. Данные, которые отображать
const data = Array(10).fill().map((_, i) => ({id: i, url: "https://placekitten.com/250/200?image=" + i}));


export default function () {
  // 1. Ref с массивом для хранения ссылок на DOM-элементы
  const elems = useRef([]);

  // 3. После рендеринга в массиве будут ссылки на DOM-элементы
  useEffect(() => {
    console.log( elems )
  }, [])

  return (<>
    <ul>
      {data.map(({id, url}) => (
        // 2. В атрибут "ref={}" передать "callback"
        // 2.1. В первый параметр будет передавать DOM-элемент
        <li key={id} ref={(node) => node && elems.current.push(node)}>
          <img src={url}/>
        </li>
      ))}
    </ul>
  </>)
}
