// ===========================================================================
// ДОБАВИТЬ СВОЙСТВО ТОЛЬКО, ЕСЛИ ОНО TRUTHY
// ===========================================================================
const age = 18;
const object = {
  name: "Roma",
  sex: "Man",
  ...(age >= 18 && { age })
}

console.log( object )