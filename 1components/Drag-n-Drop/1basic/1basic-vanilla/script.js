const drago = document.querySelector(".drago");
const dropzone = document.querySelector(".dropzone");

// ========================================================================
// ОБРАБОТЧИКИ СОБЫТИЙ "DRAGO"
// ========================================================================
// Потянули Drago
drago.addEventListener("dragstart", (evt) => {
  // Добавить для Drago стили "перетаскивание"
  evt.target.classList.remove("drago--isDragged");
})

// Отпустили Drago
drago.addEventListener("dragend", (evt) => {
  // Убрать у Drago стили "перетаскивание"
  evt.target.classList.remove("drago--isDragged");
})



// ========================================================================
// ОБРАБОТЧИКИ СОБЫТИЙ "DROPZONE"
// ========================================================================
// Вход в "зону сброса"
dropzone.addEventListener("dragenter", (evt) => {
  // Задать для Dropzone стили "наведение"
  evt.target.classList.add("dropzone--isOvered")
})

// Выход из "зоны сброса"
dropzone.addEventListener("dragleave", (evt) => {
  // Убрать у Dropzone стили "наведение"
  evt.target.classList.remove("dropzone--isOvered")
})

// Перемещение над "зоной сброса"
dropzone.addEventListener("dragover", (evt) => {
  // Отменить стандартное поведение (запрещающее сброс)
  evt.preventDefault();
})

// Сброс над "зоной сброса"
dropzone.addEventListener("drop", (evt) => {
  // Отменить стандартное поведение (открывающее файлы извне браузера)
  evt.preventDefault();

  // Выполнить действие с "Drago" (добавить в "Dropzone")
  evt.target.append(drago)
})
