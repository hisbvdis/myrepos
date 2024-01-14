import { useState } from "react";

export default function App() {
  const [ links, setLinks ] = useState(Array(5).fill().map((_, i) => ({label: `${i} Link ${i}`, localId: crypto.randomUUID()})));
  const [ dragoNode, setDragoNode ] = useState();

  const handleDragStart = (e) => {
    // Элемент события — самый глубокий, который перетаскивается (тег <a>)
    // Взять родителя (тег <li>), с которым будем работать
    const localDrago = e.target.closest("li");

    // Задать глобальное состояние (ВАЖНО! начнёт обновляться после завершения текущего обработчика)
    setDragoNode(localDrago);

    // Задать перетаскиваемому элементу стили "перетаскивается"
    localDrago.classList.add("draggable");
  }

  const handleDragOver = (e) => {
    // Элемент события — самый глубокий, над которым курсор (тег <a>)
    // Взять родителя (тег <li>), с которым будем работать
    const dropzoneNode = e.target.closest("li");

    // Если найти подходящую "зону сброса" не удалось, остановить
    if (!dropzoneNode) return;

    // Если перетаскиваемый Drago над самим собой, прервать
    if (dropzoneNode.dataset.localid === dragoNode.dataset.localid) return;

    // Позволить сброс (меняется курсор и разрешает событие "drop")
    e.preventDefault();

    // Вычислить центр элемента "lower" (по вертикали)
    const dropzoneCenterY = dropzoneNode.getBoundingClientRect().top + dropzoneNode.getBoundingClientRect().height / 2;
    const dragoState = links.find(({localId}) => localId === dragoNode.dataset.localid);
    const dropzoneIndex = Number(dropzoneNode.dataset.i);

    // Если курсор выше центра Dropzone => Переместить Drago перед Dropzone
    if (e.clientY < dropzoneCenterY) {
      setLinks(links.filter(({localId}) => localId !== dragoNode.dataset.localid).toSpliced(dropzoneIndex, 0, dragoState));
    }
    // Если курсор ниже центра Dropzone => Переместить Drago после Dropzone
    if (e.clientY > dropzoneCenterY) {
      setLinks(links.filter(({localId}) => localId !== dragoNode.dataset.localid).toSpliced(dropzoneIndex + 1, 0, dragoState));
    }
  }

  return (<>
    <ul>
      {links?.map(({label, localId}, i) => (
        <li key={localId} data-i={i} data-localid={localId} draggable onDragStart={handleDragStart} onDragOver={handleDragOver} style={{paddingBlock: "10px", border: "1px solid black"}}>
          <a href="www.site.com">{label}</a>
        </li>
      ))}
    </ul>
  </>)
}
