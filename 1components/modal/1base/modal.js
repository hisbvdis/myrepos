// Модальное окно
let openedModal = null;

// Размеры и стили для настройки прокрутки
let scrollBarWidth = null;
let bodyPaddingRight = null;
let bodyOverflow = null;

// Интерактивные элементы окна
let modalInteractElems = null;
let firstInteractElem = null;
let lastInteractElem = null;

// Особые кнопки действий (фокус, Ctrl+Enter)
let ctrlEnterBtn = null;
let focusElem = null;

// Действия при открытии/закрытии окна
let openActions = null;
let closeActions = null;

// Другое
let clickOnBackdrop = false;

// Обработчики для функционирования модального окна:
// - Нажатие на кнопки, открывающие модальное окно
document.addEventListener("click", forOpeners_onDocument_Click_Handler);


// =================================================================
// ФУНКЦИИ
// =================================================================
// Открыть модальное окно
export function openModal(params) {
  // Показать модальное окно
  openedModal.showModal();

  // Прокрутить вверх (потому что "show()" может скроллить, если первый элемента находится за пределами "viewPort")
  openedModal.scrollTo(0, 0);
  
  // Разобрать параметры и назначить глобальные переменные
  openActions = params?.openActions;
  closeActions = params?.closeActions;
  ctrlEnterBtn = openedModal.querySelector("[data-ctrl-enter-btn]");

  // У <body> отключить прокрутку, вычислить и задать отступ
  scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  bodyPaddingRight = Number.parseFloat(getComputedStyle(document.body).paddingInlineEnd);
  document.body.style.paddingInlineEnd = bodyPaddingRight + scrollBarWidth + "px";
  bodyOverflow = getComputedStyle(document.body).overflow;
  document.body.style.overflow = "hidden";

  // Получить интерактивные элементы внутри окна
  modalInteractElems = getModalInteractElems(openedModal);
  firstInteractElem = modalInteractElems[0];
  lastInteractElem = modalInteractElems.at(-1);

  // Фокус на 1 интерактивный элемент (а если есть "data-focus", то фокус на него)
  focusElem = openedModal.querySelector("[data-focus]");
  (focusElem !== undefined) ? focusOn(focusElem) : focusOn(firstInteractElem);

  // Добавить в историю браузера новую запись с определённым названием
  history.pushState("fromSite", "");

  // Добавление обработчиков модального окна
  openedModal.addEventListener("pointerdown", backdrop_Pointerdown_Handler);
  openedModal.addEventListener("click", backdrop_Click_Handler);
  document.addEventListener("keydown", document_Keydown_Escape_Handler);
  firstInteractElem?.addEventListener("keydown", firstInteractElem_Keydown_ShiftTab_Handler);
  lastInteractElem?.addEventListener("keydown", lastInteractElem_Keydown_Tab_Handler);
  openedModal.addEventListener("click", forCloseBtn_onModal_Click_Handler);
  document.addEventListener("keydown", forCtrlEnterBtn_onDocument_Keydown_CtrlEnter_Handler);
  window.addEventListener("popstate", forModal_onWindow_Popstate_Handler);

  // Выполнить команды открытия окна, если есть (передаются при открытии)
  if (openActions) openActions();
}


// Закрыть модальное окно
export function closeModal() {
  // Закрыть модальное окно
  openedModal.close();
  
  // Настроить атрибуты доступности
  openedModal.setAttribute("aria-hidden", "true");
  
  // Для <body> вернуть отступы и прокрутку, которые были до открытия модального окна
  document.body.style.paddingInlineEnd = bodyPaddingRight + "px";
  document.body.style.overflow = bodyOverflow;

  // Разные варианты перехода "назад" в браузере (обычно или с заменой записи в истории)
  history.state ? history.back() : history.replaceState(null, "");

  // Удалить обработчики модального окна
  openedModal.removeEventListener("pointerdown", backdrop_Pointerdown_Handler);
  openedModal.removeEventListener("click", backdrop_Click_Handler);
  firstInteractElem.removeEventListener("keydown", firstInteractElem_Keydown_ShiftTab_Handler);
  lastInteractElem.removeEventListener("keydown", lastInteractElem_Keydown_Tab_Handler);
  document.removeEventListener("keydown", document_Keydown_Escape_Handler);
  openedModal.removeEventListener("click", forCloseBtn_onModal_Click_Handler);
  document.removeEventListener("keydown", forCtrlEnterBtn_onDocument_Keydown_CtrlEnter_Handler);
  window.removeEventListener("popstate", forModal_onWindow_Popstate_Handler);

  // Выполнить команды закрытия окна, если есть (передаются при открытии)
  if (closeActions) closeActions();

  // Сбросить значения глобальных переменных
  openedModal = null;
  openActions = null;
  closeActions = null;
  modalInteractElems = null;
  firstInteractElem = null;
  lastInteractElem = null;
  clickOnBackdrop = false;
  ctrlEnterBtn = null;
}


// Получить все интерактивные элементы модального окна
function getModalInteractElems(modal) {
  let selectors = [
    'a[href]',
    'area[href]',
    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
    'select:not([disabled]):not([aria-hidden])',
    'textarea:not([disabled]):not([aria-hidden])',
    'button:not([disabled]):not([aria-hidden])',
    'iframe',
    'object',
    'embed',
    '[contenteditable]',
    '[tabindex]:not([tabindex^="-"])',
  ];

  let elems = modal.querySelectorAll(selectors);

  return Array.from(elems);
}

// Установить фокус на элементе (без прокрутки экрана до этого элемента)
function focusOn(elem) {
  elem?.focus({preventScroll:true});
}


// =================================================================
// ОБРАБОТЧИКИ
// =================================================================
// Нажали на кнопку открытия модального окна
//    =>  Открыть модальное окно
function forOpeners_onDocument_Click_Handler(evt) {
  if (!evt.target.closest('[data-open-modal]')) return;
  if (evt.target.closest('[data-manual-open]')) return;
  evt.preventDefault();

  openedModal = document.querySelector("#" + evt.target.dataset.openModal);

  openModal();
}


// При открытом модальном окне нажали "Escape"
//   =>  Закрыть модальное окно
function document_Keydown_Escape_Handler(evt) {
  if (evt.code !== "Escape") return;
  evt.preventDefault();

  closeModal();
}


// Надавили указатель (ЛКМ)
//    => Проверить и записать, является ли целевой элемент подложкой
function backdrop_Pointerdown_Handler(evt) {
  if (evt.which !== 1) return;

  clickOnBackdrop = evt.target.classList.contains("modal");
}


// "Клик" в области модального окна
//    =>  Если переменная "надавили указатель" === true, закрыть модальное окно
function backdrop_Click_Handler(evt) {
  if (evt.which !== 1) return;
  if (clickOnBackdrop === false) return;
  
  closeModal();
}


// На первом элементе формы нажали Shift+Tab
//    =>  Фокус на последний элемент
function firstInteractElem_Keydown_ShiftTab_Handler(evt) {
  if (evt.code !== "Tab") return;
  if (!evt.shiftKey) return;
  evt.preventDefault();

  focusOn(lastInteractElem);
}


// На последнем элементе формы нажали Tab
//    =>  Фокус на первый элемент
function lastInteractElem_Keydown_Tab_Handler(evt) {
  if (evt.code !== "Tab") return;
  if (evt.shiftKey) return;
  evt.preventDefault();

  focusOn(firstInteractElem);
}

// В открытом модальном окне кликнули на кнопку "Закрыть"
//    =>  Закрыть модальное окно
function forCloseBtn_onModal_Click_Handler(evt) {
  if (evt.target.dataset.closeBtn === undefined) return;
  evt.preventDefault();

  closeModal();
}


// В открытом модальном окне нажали "Ctrl+Enter"
//    =>  Нажать кнопку "Ctrl+Enter Button"
function forCtrlEnterBtn_onDocument_Keydown_CtrlEnter_Handler(evt) {
  if (!evt.ctrlKey) return;
  if (evt.code !== "Enter" && evt.code !== "NumpadEnter") return;
  evt.preventDefault();

  ctrlEnterBtn?.click();
}


// Нажали "Назад" в браузере
//    =>  Закрыть модальное окно
function forModal_onWindow_Popstate_Handler() {
  if (openedModal === null) return;

  closeModal();
}
