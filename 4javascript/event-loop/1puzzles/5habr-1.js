// ===========================================================================
// Источник: https://habr.com/ru/articles/681882 — ЗАДАЧА 3
// ===========================================================================

// 1-Sync-1
console.log(1); /* 1 */

// 1-Timers-1
setTimeout(() => console.log(2)); /* 5 */

// 1-Sync-->Micro-1
Promise.reject(3).catch(console.log); /* 3 */

// 1-Sync-2
new Promise((resolve) => {
  // 1-Timers-2
  setTimeout(resolve)
})
// 1-Timers-2-->Micro-1
// - "resolve()" вызывается на фазе "Timers", значит "then()" выполнится после неё
// - Выполнится между колбеками фазы "Timers" или после неё
.then(() => console.log(4)); /* 6 */

// 1-Sync-->Micro-3
Promise.resolve(5).then(console.log); /* 4 */

// 1-Sync-3
console.log(6); /* 2 */

// 1-Timers-3
setTimeout(() => console.log(7),0); /* 7 */
