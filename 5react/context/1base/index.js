// 1. Импортировать зависимости
// 1.1. Разное служебное
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 1.2. Компонент контекста
import { DataContext } from "./contexts/DataContext.js";


const root = ReactDOM.createRoot(document.getElementById('root'));


// 2. Добавить "компонент контекста" в дерево приложения
root.render(
  <React.StrictMode>
    {/* 2.1. Добавить после "strict mode" перед "App" */}
    <DataContext>
      <App />
    </DataContext>
  </React.StrictMode>
);
