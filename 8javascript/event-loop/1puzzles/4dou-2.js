// ===========================================================================
// Источник: https://dou.ua/forums/topic/31698/ — Загальний приклад
// ===========================================================================

// 1-Sync-1
const fs = require('fs');

// 2-Poll-1 (перенос на 2 итерацию, потому что на 1-й есть задачи для "Check")
fs.readFile(__filename, () => {
  console.log('readFile'); /* 6 */

  // 3-Timers-1 (3 итерация, потому что "Poll" идёт после "Timers" на 2 итерации)
  setTimeout(() => console.log('timeout1')); /* 10 */

  // 2-Check-1
  setImmediate(() => console.log('immediate1')); /* 9 */

  // 2-Poll-1-->Micro-2 (выполнится между колбеками фазы "Poll" или после неё)
  Promise.resolve().then(() => console.log('Promise.resolve1')); /* 8 */

  // 2-Poll-1-->Micro-1 (выполнится между колбеками фазы "Poll" или после неё)
  process.nextTick(() => console.log('process.nextTick1')); /* 7 */
});

// 1-Timers-1
setTimeout(() => console.log('timeout2')); /* 4 */

// 1-Check-1
setImmediate(() => console.log('immediate2')); /* 5 */

// 1-Sync-->Micro-2
Promise.resolve().then(() => console.log('Promise.resolve2')); /* 3 */

// 1-Sync-->Micro-1
process.nextTick(() => console.log('process.nextTick2')); /* 2 */

// 1-Sync-2
console.log('sync code'); /* 1 */
