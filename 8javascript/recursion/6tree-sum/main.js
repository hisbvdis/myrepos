// =============================================================================
// Входящие данные
// =============================================================================
let company = {
  sales: [
    {
      name: "John",
      salary: 1000
    },
    {
      name: "Alice",
      salary: 600
    }
  ],
  development: {
    apps: [
      {
        name: "Vasya",
        salary: 500
      },
      {
        name: "Nastya",
        salary: 4000
      }
    ],
    sites: {
      siteA: [
        {
          name: "Peter",
          salary: 2000
        },
        {
          name: "Alex",
          salary: 1800
        }
      ],
      siteB: [
        {
          name: "Roma",
          salary: 450
        },
        {
          name: "Ivan",
          salary: 18
        }
      ]
    }
  }
}



// =============================================================================
// Рекурсивная функция
// =============================================================================
function sumSalaries(depart) {
  // 1. Простой случай
  // 1.1. Если: отдел — это массив
  // 1.2. Значит это список сотрудников и вложенных отделов больше нет
  if (Array.isArray(depart)) {
    // 1.3. Перебрать массив сотрудников, суммируя зарплаты
    // 1.4. Вернуть: найденную сумму зарплат
    return depart.reduce((sum, employee) => sum += employee.salary, 0);
  }
  
  // 2. Сложный случай
  // 2.1. Если: отдел — это объект
  // 2.2. Значит он содержит подотделы с сотрудниками или другими подотделами
  // 2.3. Получить массив подотделов
  return Object.values(depart)
    // 2.4. Перебрать подотделы, для каждого из которых
    // ———— Вызвать функцию, передав подотдел
    // ———— Суммировать результат вызовов функций
    // 2.5. Вернуть: получившуюся сумму
    .reduce((sum, subDepart) => sum + sumSalaries(subDepart), 0);
}



// =============================================================================
// Вызов функции
// =============================================================================
console.log( sumSalaries(company) );