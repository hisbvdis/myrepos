// 0. Подготовка Node.js к работе с данными
// 0.1. Импортировать модуль "readline"
import readline from "readline"
// 0.2. Создать интерфейс управления чтением (передать потоки ввода/вывода)
const input = readline.createInterface(process.stdin, process.stdout)


// 1. Функция, которая возвращает промис
const quest = (question) => {
  return new Promise((resolve) => {
    // 1.1. Асинхронный код (отправка в консоли запроса на ввод)
    input.question(question + ": ", (answer) => {
      // 1.2. Когда на вопрос ответили — вызвать "resolve()"
      console.log( "Your answer: " + answer );
      resolve();
    });
  })
}


// 2. Вызов функции
// 2.1. Способ #1: С помощью методов "then()"
quest("Name")
  .then(() => quest("SurName"))
  .then(() => quest("Age"))

// 2.2. Способ #2: С помощью "await"
const name = await quest("Your name");
const surName = await quest("Your surname");
const age = await quest("Your age");
