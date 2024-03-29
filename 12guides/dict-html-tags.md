# Словарь: HTML-теги (самантическое значение)

Оглавление: [A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#y)



## A
### `<a>`
Ссылка, которая ведёт на другую страницу или на якорь текущей страницы
- Также может содержать телефон, email

### `<abbr>`
Аббревиатура или сокращение
- Для указания расшифровки можно использовать атрибут "title"

### `<address>`
- Любая контактная информация: адрес, телефон, email (внутри могут быть другие теги)
- Относится к ближайшему элементу `<article>` или `<body>`

### `<article>`
Законченный самодостаточный элемент, который можно без потери смысла перенести на другую страницу: статья, карточка товара, комментарий, отзыв
- Должен иметь заголовок

### `<aside>`
- Раздел с данными, дополняющими основное содержимое
- Раздел, который слабо или не связан с основным содержимым
- Примеры: боковая панель, реклама, блок "Похожие темы"



## B
### `<b>`
*Bold* — визуальное выделение текста "жирным"
- Не добавляет "логическое" форматирование путём придания важности или интонации
- Примеры: ключевые слова, небольшие фрагменты текста, которые должны привлечь внимание
- При переносе в другие Rich-Text редакторы (Google Docs) жирность останется

### `<button>`
Интерактивный элемент (с которым взаимодействуют), который НЕ ведёт на другую страницу, а выполняет действие на текущей странице: кнопки карусели, модального окна

### `<blockquote>`
Цитата или фрагмент текста. Для указания названия источника цитаты используется тег `<cite>`

### `<br>`
Принудительный перенос строки



## C
### `<cite>`
Название источника (статьи, книги), который цитируется в теге `<blockquote>`

### `<code>`
Фрагменты кода, названия файлов/кнопок
- Можно использовать внутри элемента `<pre>`



## D
### `<data>`
Содержимое, которое имеет машинно-понятную альтернативу в атрибуте `value`

### `<datalist>`
Элемент, содержащий опции, выпадающие в связанном текстовом поле `<input>`

### `<del>`
Содержимое, которое было удалённо из документа

### `<details>`
Спойлер, аккордеон, выпадающий список при нажатии, многоуровневое меню/навигация

### `<dfn>`
*Definition* — слово, требующее уточнения определения
- Для указания расшифровки можно использовать атрибут "title"

### `<dialog>`
Диалоговое (модальное) окно

### `<div>`
Элемент группировки элементов для их стилизации

### `<dd>`
*Description Details* — описание термина в "списке определений"

### `<dl>`
*Description List* — список определений, состоящий из "терминов" и их "описания"

### `<dt>`
*Description Term* — название термина в "списке определений"



## E
### `<em>`
*Emphasis* — логическое выделение текста "акцентом"
- Скринридерами выделяется интонационно; в браузерах — курсивом



## F
### `<figcaption>`
Видимая подпись контентного изображения

### `<figure>`
Обёртка для изображения, опционально с подписью "figcaption"
- Нельзя использовать для иконок и других декоративных изображений - только для контентных [источник](https://stackoverflow.com/q/9873014/4956416)

### `<fieldset>`
Группа элементов формы

### `<footer>`
- "Подвал" сайта или секции с информацией о них<br/>
*Может содержать:*
- Информация об авторе или документе
- Ссылки на условия использования
- Копирайт
- Контактная информация



## H
### `<h1 - h6>`
- Заголовок блока страницы

### `<header>`
- Шапка сайта, которая повторяется и на других страницах
- Вступление (вводная часть) секции страницы

### `<hgroup>`
- Элемент, группирующий заголовок (тег `h1-h6`) и подзаголовок (тег `p`)



## I
### `<i>`
*Italic* — визуальное выделение текста "курсивом"
- Не добавляет "логическое" форматирование путём придания важности или интонации



## K
### `<kbd>`
*Keyboard* — клавиша клавиатуры или мыши
- Если обозначается сочетание клавиш, нужно брать в эти теги всё содержимое и отдельно каждую "клавишу": `<kbd><kbd>Command</kbd>+<kbd>S</kbd></kbd>`



## L
### `<label>`
Подписи (метки) элементов формы

### `<legend>`
Заголовок группы элементов `<fieldset>`
- При озвучивании элементов внутри `<fieldset>`, скринридеры сначала произносят содержимое `<legend>` и дополняют содержимым `<label>` элемента (например: "Размер — маленький", "Размер — большой")



## M
### `<main>`
Основное содержимое, не повторяющееся на других страницах
- Как правило, это всё, что между `<header>` и `<footer>`

### `<mark>`
Выделение текста (например, цветом, будто маркером)



## N
### `<nav>`
Ссылки на другие страницы или на фрагменты данной страницы:<br/>

*Примеры использования:*
- Главная навигация сайта
- Пагинация
- Блок со ссылками на другие страницы
- Блок со ссылками на фрагменты внутри страницы
- Блок ссылок в футере



## O
### `<ol>`
*Ordered list* — упорядоченный список логически связанных элементов

### `<optgroup>`
Группа опций в выпадающем списке `<select>`

### `<option>`
Опция в выпадающем списке `<select>`



## P
### `<p>`
*Paragraph* — параграф текстова



## Q
### `<q>`
*Quote* — строчная небольшая цитата, прямая речь
- Неправильно использовать для слов, которые просто берутся в кавычки



## S
### `<s>`
*Strikethrough* — неточность, устаревший текст (например, старая цена при наличии новой со скидкой)
- По умолчанию стилизуется как зачёркнутый
- Неуместно применять для обозначения изменённого (отредактированного) текста
- Важно, чтобы был какой-то дополнительный текст с описанием элемента, так как не все скринридеры озвучивают содержимое элемента. Если в дизайне описательного текста нет, его можно скрыть визуально

### `<samp>`
Текст, который отобразила компьютерная программа

### `<section>`
Блок логически связанного содержимого
- Должен иметь заголовок

### `<select>`
Выпадающий список опций

### `<small>`
Короткий текст пониженной значимости: маленькие подписи, юридический текст, текст об авторских правах

### `<span>`
Фрагмент текста (например, для стилизации)

### `<strong>`
*Strong* — логическое выделение текста "важный"
- В браузерах выделяется жирным

### `<sub>`
???

### `<sup>`
- Пример: символ звёздочки обязательного поля



## T
### `<table>`
Таблица или данные, которые потенциально представляют из себя таблицу: имеют название столбца/строки и значение

### `<thead>`
*Table header* — заголовочная часть таблицы

### `<tbody>`
*Table body* — основная часть таблицы

### `<tfoot>`
*Table footer* — завершающая часть таблицы

### `<tr>`
*Table row* — строка таблицы

### `<td>`
*Table datacell* — ячейка таблицы

### `<template>`
Шаблон html-разметки, содержимое которого не отображается на странице и не индексируется поисковиками

### `<time>`
Дата, время или период
- Значение в машинно-доступном формате указывается в атрибуте `datetime`



## U
### `<u>`
*Underlined* — визуальное выделение текста "подчёркнутым"
- Не добавляет "логическое" форматирования путём придания важности или интонации

### `<ul>`
*Unordered list* — неупорядоченный список логически связанных элементов



## V
### `<var>`
*Variable* — обозначение переменных из программирования или уравнений (математика, физика и т.п)



## W
### `<wbr>`
*Word break* — допустимое место разрыва слова (в длинных словах)
