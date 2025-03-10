// ===========================================================================
// Произвольное целое число из заданного диапазона
// ===========================================================================
// Источник: https://learn.javascript.ru/task/random-int-min-max
export function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}



// ===========================================================================
// Произвольное дробное из заданного диапазона
// ===========================================================================
export function randomFloat(min, max) {
	return min + Math.random() * (max + 1 - min);
}


// ===========================================================================
// Произвольный элемент массива
// ===========================================================================
export function randomFromArray(inputArr) {
  let min = 0;
  let max = inputArr.length - 1;
  let random = randomInt(min, max);

  return inputArr[random];
}


// ===========================================================================
// Произвольный массив элементов массива
// ===========================================================================
export function randomArrayFromArray(inputArr) {
  let iterations = randomInt(1, inputArr.lenght);
  let resultSet = new Set();

  for (let i = 0; i < iterations; i++) {
    let random = randomInt(0, inputArr.length - 1);
    resultSet.add( inputArr[random] );
  }

  return [...resultSet];
}


// ===========================================================================
// Произвольный булев тип
// ===========================================================================
export function randomBool() {
  // Произвольное 0 или 1
  const randomInteger = randomInt(0, 1)
  // Преобразовать число в Boolean (0 - false, 1 - true)
  const boolean = Boolean(randomInteger);
  // Вернуть Boolean
  return boolean;
}
