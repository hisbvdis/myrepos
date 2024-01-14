# Drag and Drop API: Базовый пример


## Drago
**HTML: Атрибут "draggable"** (ОБЯЗАТЕЛЬНО)
- Добавить перетаскиваемому элементу атрибут "draggable" (для ссылок, изображений и выделенного текста не нужно)
- Обязательно указывать значение: "true" или "false"
- Пример: `draggable="true"`


## DropZone
**JS: Обработчик "dragover"** (ОБЯЗАТЕЛЬНО)
- На элемент "dropzone" повесить обработчик события `dragover`
- Отменить стандартное поведение (запрещающее сброс)
- Пример: `evt.preventDefault()`

**JS: Обработчик "drop"** (ЖЕЛАТЕЛЬНО)
- На элемент-dropzone повесить обработчик события `drop`
- Отменить стандартное поведение (запрещающее сброс файлов из-за пределов браузера)
- Пример: `evt.preventDefault()`


## Источники
- [x] [Web.dev — Using the HTML5 Drag and Drop AP](https://web.dev/i18n/ru/drag-and-drop/)
- [x] [CSS Tricks — Creating a Parking Game With the HTML Drag and Drop API](https://css-tricks.com/creating-a-parking-game-with-the-html-drag-and-drop-api/)
- [ ] [MDN  —  HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
