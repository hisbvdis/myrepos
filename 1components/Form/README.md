# Форма и элементы формы

## Форма
### Форма: Дерево тегов и классов
**form — форма**
- `form.form` – форма
- `h2.form__title` – заголовок формы

**heading — заголовок формы**
- `h2.form__heading`

**description — описание формы**
- `p.form__desc`

**section — раздел формы**
- `section.form__section`

**section heading — заголовок раздела формы**
- `h3.form__sectionHeading`

**fieldset — блок полей**
- `fieldset.form__fieldset` – блок объединённых по смыслу элементов формы
  - Раньше у тега "fieldset" были ошибки с флексбокс, поэтому использовал "div"
  - Альтернатива тегу "fieldset" - атрибут role="group"

**legend — заголовок блока полей**
- `h4.form__legend` – заголовок блока "fieldset"
  - Элемент заголовка (лучше)
    - Тег `<h2>-<h6>` (вместо тега "legend")
    - Задать атрибут `id`
    - В родительском "fieldset" в атрибуте `aria-labelledby` сослаться на `id`
  - Элемент "legend" (хуже)
    - Тег "legend" проблемно позиционировать
    - CSS: задать свойства float: left; inline-size: 100%
    - HTML: под элементом "legend" добавить "div.form__legendClearfix" со свойством "clear: both" (clearfix)

**radio**
- `ul.form__options` – список опций

**checkbox**
- `ul.form__options` – список опций

**field — текстовые поля**
- `div.form__field` — группа полей ввода "input" или "textarea"

**textarea — текстовые поля**
- `div.form__field` — группа полей ввода "input" или "textarea"

**submit — кнопка отправки**
- `button.btn  form__submit` — кнопка отправки формы



### Форма
**HTML: Тег**
- Тег `<form>`

**HTML: Адрес**
- Атрибут `action`
- Содержит адрес отправки данных
- Не обязателен, но принято указывать
- Пример: `action="./server/request"`

**HTML: Метод**
- Атрибут `method`
- Содержит HTTP-метод отправки данных: GET, POST
- Не обязателен, но принято указывать
- Пример: `method="GET"`

**HTML: Доступный заголовок формы**<br/>
У секционных элементов (в том числе и у формы) должен быть заголовок
- Элемент заголовка (лучше)
  - Тег `<h2>-<h6>`
  - У заголовка должен быть `id`, а у формы `aria-labeledby`
  - Отдельный элемент заголовка приоритетнее, так как в скринридерах есть функция перехода по заголовкам
  - Если в дизайне заголовка нет, его нужно добавить через srOnly-элемент
- Атрибут aria-label (хуже)
  - Менее приоритетно
  - Альтернатива заголовкам - атрибут `aria-label` у самого секционного элемента

**HTML: Автозаполнение**
- Если в форме нет полей, которые нужно заполнять автоматически, отключить автозаполнение с помощью атрибута `autocomplete="off"` для элемента формы

**HTML: Валидация**
- Атрибут `novalidate`
- Отключает браузерную валидацию формы перед отправкой (позволяя сделать свою)
- Пример: `<form novalidate>...</form>`
