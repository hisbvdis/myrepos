// =============================================================================
// Входящие данные
// =============================================================================
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};



// =============================================================================
// Рекурсивная функция
// =============================================================================
function getValues(item) {
  // 1. Простой случай
  // 1.1. Если: "next" === null (у списка больше нет "узлов")
  if (item.next === null) {
    // 1.2. Вернуть: значение текущего узла в виде массива
    return [item.value];
  }

  // 2. Сложный случай
  // 2.1. Если: все остальные случаи
  // 2.2. Вызвать функцию: передать ссылку на следующий узел
  // 2.3. Вернуть: массив со значением текущего узла и результатом вызова функции
  return [item.value, ...getValues(item.next)];
}



// =============================================================================
// Вызов рекурсии
// =============================================================================
console.log( getValues(list) );