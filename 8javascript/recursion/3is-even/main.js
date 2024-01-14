// =============================================================================
// Рекурсивная функция
// =============================================================================
function isEven(n) {
  // 1. Простой случай №1
  // 1.1. Если: число "n" === 0
  // 1.2. Вернуть "true" (число чётное)
  if (n === 0) return true;

  // 2. Простой случай №2
  // 2.1. Если: число "n" === 1
  // 2.2. Вернуть "false" (число не чётное)
  if (n === 1) return false;

  // 3. Сложный случай №1
  // 3.1. Если: число "n" — отрицательное
  // 3.2. Вызвать функцию для числа "n" с противоположным знаком (положительное)
  if (n < 0) return isEven(-n);

  // 4. Сложный случай №2
  // 4.1. Если: все остальные случаи
  // 4.2. Вызвать функцию с числом, меньшим на 2
  return isEven(n - 2);
}



// =============================================================================
// Вызов функции
// =============================================================================
console.log( isEven(-1) );
console.log( isEven(0) );
console.log( isEven(1) );
console.log( isEven(2) );