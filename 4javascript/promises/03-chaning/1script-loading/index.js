// 1. Функция, которая возвращает промис
function loadScript(path) {
  return new Promise((resolve, reject) => {
    // 1.1. Асинхронный код (загрузка скрипта)
    let script = document.createElement("script");
    script.src = path;
    document.head.append(script);

    // 1.2. Если скрипт загрузился — вызвать "resolve()"
    script.addEventListener("load", resolve());

    // 1.3. Если скрипт не загрузился — вызвать "reject()"
    script.addEventListener("error", reject(new Error(`Ошибка загрузки ${path}`)));
  })
}


// 2. Вызов функции возвращает промис
loadScript("test1.js")
  // 2.1. Благодаря методам ".then()", каждый последующий вызов функции
  // .... происходит после "resolve" предыдущего вызова
  .then(() => loadScript("test2.js"))
  .then(() => loadScript("test3.js"))
