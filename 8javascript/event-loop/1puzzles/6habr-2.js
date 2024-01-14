// ===========================================================================
// Источник: https://habr.com/ru/articles/681882 — ЗАДАЧА 4
// ===========================================================================

// Функция (запустится при вызове)
const myPromise = (delay) => new Promise((res, rej) => {
  setTimeout(res, delay)
})


// 1-Timers-2
setTimeout(() => console.log('in setTimeout1'), 1000); /* 2 */


myPromise(1000)
  // 1-Timers-3-->Micro-1 (выполнится сразу после колбека "setTimeout" на фазе "Timers")
  .then(res => console.log('in Promise 1')); /* 3 */


// 1-Timers-1
setTimeout(() => console.log('in setTimeout2'), 100); /* 1 */


myPromise(2000)
  // 1-Timers-6-->Micro-1 (выполнится сразу после колбека "setTimeout" на фазе "Timers")
  .then(res => console.log('in Promise 2')); /* 6 */


// 1-Timers-7
setTimeout(() => console.log('in setTimeout3'), 2000); /* 7 */


myPromise(1000)
  // 1-Timers-4-->Micro-1 (выполнится сразу после колбека "setTimeout" на фазе "Timers")
  .then(res => console.log('in Promise 3')); /* 4 */


// 1-Timers-5
setTimeout(() => console.log('in setTimeout4'), 1000); /* 5 */


myPromise(5000)
  // 1-Timers-8-->Micro-1 (выполнится сразу после колбека "setTimeout" на фазе "Timers")
  .then(res => console.log('in Promise ')); /* 8 */
