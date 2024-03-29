// 1. Объект с константами и значениями
const obj = {
  name: `Иван Иванович`,
  date: `12.03.2021`
};


// 2. Строка с шаблонными фрагментами
const str = `Уважаемый, {{name}}! Поздравляем вас... {{date}} г.`;


// 3. Замена шаблонных фрагментов с помощью функции
const result = str
  // 3.1. Регулярное выражение находит шаблонные фрагменты типа {{...}}
  // 3.2. Содержимое этих фрагментов обёрнуто в скобочную группу, нумеруя его
  // 3.3. Для каждого совпадения запускается функция из замещающей части
  // 3.4. Вторым параметром функция принимает текст совпадения
  .replace(/{{(.+?)}}/g, (str, $1) => {
    // 3.5. Функция находит и возвращает значение из объекта с данным свойством
    return obj[$1];
  });


// 4. Вывести результат замены
console.log( result )