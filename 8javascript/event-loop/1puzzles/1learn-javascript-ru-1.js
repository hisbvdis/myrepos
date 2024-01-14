// ===========================================================================
// Источник: https://learn.javascript.ru/task/promise-and-timer
// ===========================================================================

// 1-Timers-1
setTimeout(function timeout() {
  console.log('Таймаут'); /* 4 */
}, 0);

// 1-Sync-1
let p = new Promise(function(resolve, reject) {
  // 1-Sync-1-->Sync-1
  console.log('Создание промиса'); /* 1 */
  // 1-Sync-1-->Sync-2
  resolve();
});

// 1-Sync-->Micro-1
p.then(function(){
  // Micro-1-->Sync-1
  console.log('Обработка промиса'); /* 3 */
});

// 1-Sync-2
console.log('Конец скрипта'); /* 2 */
