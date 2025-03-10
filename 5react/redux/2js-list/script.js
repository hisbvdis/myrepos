import {actions, reducer} from "./reducer.js";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");


// =============================================================================
// 4. РАБОТА С ХРАНИЛИЩЕМ
// =============================================================================
// 4.1. Создать хранилище (подставив редьюсер)
const store = Redux.createStore(reducer);


// 4.2. Функция, которая будет обновлять список при действиях с хранилищем
const updateList = () => {
  // Очистить список
  ul.innerHTML = "";

  // Получить значение состояния
  const state = store.getState();

  // Вывести элементы списка
  state.forEach(item => {
    const elem = document.createElement("li");
    elem.textContent = item;
    
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn")
    removeBtn.textContent = "Удалить";
    
    elem.append(removeBtn);
    ul.append(elem);
  })
}


// 4.3. Подписать функцию "updateList" на изменения хранилища
store.subscribe(updateList)


// 4.4. Выполнять действия при событиях
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  store.dispatch( actions.addItem(input.value) );
  input.value = "";
})

document.addEventListener("click", (evt) => {
  if (!evt.target.matches(".removeBtn")) return;
  evt.preventDefault();

  const closestLi = evt.target.closest("li");
  closestLi.remove();
})