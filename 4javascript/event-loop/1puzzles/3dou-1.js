// ===========================================================================
// Источник: https://dou.ua/forums/topic/31698/
// ===========================================================================

// 1-Timers-1
setTimeout(() => console.log('timeout1')); /* 1 */

// 1-Timers-2
setTimeout(() => {
  // 1-Timers-2-->Sync-1
  console.log('timeout2') /* 2 */

  // 1-Timers-2-->Micro-2 (выполнится между колбеками фазы "Timers" или после неё)
  Promise.resolve().then(() => console.log('promise')); /* 4 */
  
  // 1-Timers-2-->Micro-1 (выполнится между колбеками фазы "Timers" или после неё)
  process.nextTick(() => console.log('process.nextTick()')); /* 3 */
});

// 1-Timers-3
setTimeout(() => console.log('timeout3')); /* 5 */
