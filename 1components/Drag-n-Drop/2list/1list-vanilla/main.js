let drago;

document.addEventListener("dragstart", forDrago_onDocument_Dragstart_Handler);
document.addEventListener("dragend", forDrago_onDocument_Dragend_Handler);
document.addEventListener("dragover", forDropzone_onDocument_Dragover_Handler);


// Потянули Drago => Начать перемещение
function forDrago_onDocument_Dragstart_Handler(e) {
  // Элемент события — самый глубокий, который перетаскивается (тег <a>)
  // Взять родителя (тег <li>), с которым будем работать
  drago = e.target.closest("li");

  // Задать перетаскиваемому элементу стили "перетаскивается"
  drago.classList.add("draggable");
}


// Перемещение Drago над элементом, который может быть "зоной сброса"
function forDropzone_onDocument_Dragover_Handler(e) {
  // Элемент события — самый глубокий, над которым курсор (тег <a>)
  // Взять родителя (тег <li>), с которым будем работать
  const dropzone = e.target.closest("li")

  // Если найти подходящую "зону сброса" не удалось, остановить
  if (!dropzone) return;

  // Если перетаскиваемый Drago над самим собой, прервать
  if (dropzone === drago) return;

  // Позволить сброс (меняется курсор и разрешает событие "drop")
  e.preventDefault();

  // Вычислить центр элемента "lower" (по вертикали)
  const dropzoneCenterY = dropzone.getBoundingClientRect().top + dropzone.getBoundingClientRect().height / 2;

  // Если курсор выше центра Dropzone и Drago ещё не находится перед Dropzone => Переместить Drago перед Dropzone
  if (e.clientY < dropzoneCenterY && dropzone.previousElementSibling !== drago) {
    dropzone.before(drago);
  }
  // Если курсор ниже центра Dropzone и Drago ещё не находится после Dropzone => Переместить Drago после Dropzone
  if (e.clientY > dropzoneCenterY && dropzone.nextElementSibling !== drago) {
    dropzone.after(drago);
  }
}


// Отпустили Drago  =>  Остановить перемещение Drago
function forDrago_onDocument_Dragend_Handler() {
  // Удалить у Drago класс перемещения
  drago.classList.remove("draggable");

  // Очистить Drago глобально
  drago = null;
}
