# Структура проекта

## Названия папок
### JavaScript
- **services (api)** — связь с внешними сервисами или API
- **utils (helpers)** — вспомогательные функции, используемые в приложении
- **libs** — библиотеки или наборы инструментов


## Vanilla
**images** — изображения
- `favicons/`
  - `32x32.png`
  - `16x16.png`
- `photos/`
  - `cat1.jpg`
  - `cat2.jpg`
- `logo.svg`

**scripts** — JS-скрипты
- `modules/`
  - `nav.js`
  - `gallery.js`
- `constants/` — константные значения
- `script.js` — главный файл скриптов

**styles** — CSS/SASS стили
- `components/` —
  - `header.css`
  - `main.css`
  - `footer.css`
- `style.css` — главный файл стилей

**fonts** — шрифты
- `arial.woff2`

**HTML-files** — HTML-файлы (корневая папка)
- `index.html`

**Источники**
- [ ] [HTML Academy](https://codeguide.academy/html-css.html#grouping)



## React
**assets/** — глобальные статические файлы
- `fonts/` — шрифты
- `img/` — изображения
- `styles/` — стили

**components/** — повторно используемые компоненты (кнопки, карточки)
- `Todos/` — компоненты, относящиеся к определённой категории
  - `Todo/` — компонент "Todo"
  - `TodoForm/` — компонент "Добавить Todo"
  - `TodoList/` — компонент "Список Todo"
- `UI/` — общие элементы интерфейса
  - `Button/` — кнопки

**contexts/** — контексты
- `cart/` — контекст "Корзины"

**data/** — данные
- `users.json` — список пользователей

**hooks/** — кастомные хуки с базовым функционалом

**layouts/** — заготовки макетов разделов сайта
- `MainLayout.jsx` — основной макет страниц сайта
- `CatalogLayout.jsx` — макет страниц каталога

**pages/** — страницы
- `Home/` — Главная
- `About/` — Про нас
- `Contacts/` — Контакты

**sections/** — большие блоки страниц
- `Header/` — хедер
- `Hero/` — первый блок
- `Footer/` — футер

**services/** — связь со сторонними ресурсами: API

**store/** — хранилище Redux
  - `users/` — папка для подраздела хранилища
    - `users.actions.js` — действия
    - `users.reducer.js` — редьюсер
    - `users.selectors.js` — например, Redux-селекторы для "useSelector()"
  - `rootReducer.js` — объединяет все редьюсеры
  - `index.js` — создаёт хранилище из импортированных сущностей и экспортирует его

**Источники**
- [udacity](https://engineering.udacity.com/react-folder-structure-for-enterprise-level-applications-f8384eff162b)
- [taniarascia](https://www.taniarascia.com/react-architecture-directory-structure/)
- [medium](https://medium.com/swlh/demystifying-the-folder-structure-of-a-react-app-c60b29d90836)
- [kumarvinoth](https://medium.com/@kumarvinoth/finally-a-better-react-js-folder-structure-821a2210835)
- [devto](https://dev.to/admantium/structuring-react-components-n6g)
- [Delightful React File/Directory Structure](https://www.joshwcomeau.com/react/file-structure/)
- [Folder Structure for Modern Web Applications](https://dev.to/noruwa/folder-structure-for-modern-web-applications-4d11)
- [FardaKarimov](https://javascript.plainenglish.io/best-practices-for-structuring-your-react-project-folders-89f281970bcd)
- [Brandon Evans — 10 Best Practices for Structuring React Projects](https://blog.bitsrc.io/10-best-practices-for-structuring-react-projects-426ae8b1af43)



## NextJS
Source: https://stackoverflow.com/a/64840307
Source: https://medium.com/@pablo.delvalle.cr/an-opinionated-basic-next-js-files-and-directories-structure-88fefa2aa759
Source: https://www.smashingmagazine.com/2023/02/understanding-app-directory-architecture-next-js/
Source: https://jasonwatmore.com/next-js-13-app-router-mongodb-user-rego-and-login-tutorial-with-example

components/
    Button/
        button.spec.jsx
        button.styles.jsx
        index.jsx
constants/
    theme.js
    page.js
contexts/
    Locale/
        index.js
    Page/
        index.js
pages/
    _app.jsx
    _document.jsx
    about.jsx
    index.jsx
providers/
    Locale/
        index.js
    Page/
        index.js
public/
    favicon.ico
    header.png
redux/
    actions/
        users/
          index.js
        products/
          index.js
    reducers/
        users/
          index.js
        products/
          index.js
    store/
        index.js
    types/
        index.js
shared/
    jsons/
        users.json
    libs/
        locale.js
    styles/
        global.css
widgets/
    PageHeader/
        index.jsx
