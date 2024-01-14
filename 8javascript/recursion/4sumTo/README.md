# Рекурсия:  Суммирование до указанного числа

## Подготовка
**Задача**
- Суммировать все числа от 0 до указанного

**Алгоритм**
- Переданное число будет уменьшаться на 1, пока не достигнет 1
- После этого будет происходить обратный выход из всех функций с суммированием возвращаемого значения
- Отдельным простым случаем будет "0", возвращающее тоже "0". На случай, если в функцию изначально передаётся "0"


## Реализация рекурсии
**1. Простой случай #1**
- `Какой случай считается простым:`
  - Если число "n" === 0
- `Действия перед возвратом значения:`
  - Нет
- `Что возвращает:`
  - Вернуть 0 (ноль)

**2. Простой случа #2**
- `Какой случай считается простым:`
  - Если число "n" === 1
- `Действия перед возвратом значения:`
  - Нет
- `Что возвращает:`
  - Вернуть само число "n" (которое = 1)

**3. Сложный случай #1**
- `Какой случай считается сложным:`
  - Если "n" < 0 (отрицательное)
- `Как изменяется/упрощается значение при вызове функции:`
  - Подставляется это же число с обратным знаком, чтобы стало положительным
- `Действия перед возвратом значения:`
  - Вызвать функцию с упрощённым значением
- `Что возвращает:`
  - Вернуть результат вызова функции

- Случай №2
- `Какой случай считается сложным:`
  - Все остальные случаи (когда переданное число "n" является положительным)
- `Как изменяется/упрощается значение при вызове функции:`
  - Число уменьшается на 1
- `Действия перед возвратом значения:`
  - Вызвать функцию с упрощённым значением
  - К числу "n" прибавить результат вызова функции
- `Что возвращает:`
  - Вернуть результат суммы числа "n" и вызова функции