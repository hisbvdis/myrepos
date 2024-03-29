# Стиль кода: React

- **[1. Последовательность импорта](#1-последовательность-импорта)**
- **[2. Структура проекта](2-структура-проекта)**
  - [2.1. Структура проекта: папка "src"](#21-структура-проекта-папка-src)
  - [2.2. Структура проекта: папка "public"](#22-структура-проекта-папка-public)
- **[3. Группировка компонентов](#3-группировка-компонентов)**
- **[9. Источники](#9-источники)**
  - [9.1. Структура папок](#91-структура-папок)



## 1. Последовательность импорта
```js
// 1. Импорт из React
import { createElement } from "react";

// 2. Импорт из внешних модулей (node_modules)
import { useState } from "react";

// 3. Импорт из своего приложения
import Button from "./components/Button";

// 4. Стили
import "./App.module.css";
```



## 2. Группировка компонентов
Можно упростить импорт компонентов (например, страниц "pages") или любых других наборов компонентов
Чтобы сократить количество строк с импортом компонентов (или страниц), в папке с компонентами создать файл "index.js", в котором производить РЕэкспорт компонентов из одного места

**1. Создать файл "индекса компонентов" (/src/pages/index.js)**
```js
// 1.1. Импортировать компоненты отдельных страниц
import Home from "./Home.js";
import Catalog from "./Catalog.js";
import About from "./About.js";

// 1.2. Именованный экспорт
export { Home, Catalog, About }
```

**2. Импортировать компоненты в другом файле (/src/App.js)**
```js
// 2.1. Импортировать компоненты в одной строке
import { Home, Catalog, About } from "./pages/index.js";

const App = () => {...}
```
