// ===========================================================================
// Источник: https://learn.javascript.ru/task/micro-macro-queue
// ===========================================================================

// 1-Sync-1
console.log(1); /* 1 */

// 1-Timers-1
setTimeout(() => console.log(2)); /* 5 */

// 1-Sync-->Micro-1
Promise.resolve().then(() => console.log(3)); /* 3 */

// 1-Sync-->Micro-2
Promise.resolve().then(() => {
  // 1-Timers-3
  setTimeout(() => console.log(4)); /* 7 */
});

// 1-Sync-->Micro-3
Promise.resolve().then(() => console.log(5)); /* 4 */

// 1-Timers-2
setTimeout(() => console.log(6)); /* 6 */

// 1-Sync-2
console.log(7); /* 2 */
