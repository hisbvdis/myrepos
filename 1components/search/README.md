# Кнопка

## HTML-разметка
**Доступная роль**
- К главному контейнеру элементов, составляющих интерфейс поиска, нужно добавлять доступную роль `role="search"`



## CSS-стилизация
**Убрать стандартный "крестик" для поля поиска**
```css
  .search__input::-webkit-search-cancel-button,
  .search__input::-webkit-search-decoration,
  .search__input::-webkit-search-results-button,
  .search__input::-webkit-search-results-decoration {
    -webkit-appearance:none;
  }
```
- [Источник](https://stackoverflow.com/a/9422689/4956416)
