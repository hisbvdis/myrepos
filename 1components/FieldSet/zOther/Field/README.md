# Элементы формы
**HTML: Имя поля**
- Полям формы в атрибуте `name` нужно задавать имена (уникальные в пределах формы)
- *Пример:* `<input type="text" name="login">`

**HTML:Скрытые поля**
- Используются для хранения и отправки данных, введённых не пользователем
- Значения нужно сохранять в атрибуте "value"
- *Пример:* хранение HEX-кода для цвета, выбранного в Colorpicker

**HTML:Метка поля**
- У полей формы должны быть метки `<label>`
- Метки должны быть связанные с полем по ID или вложенностью элементов

**HTML:Автозаполнение**
- Если для формы автозаполнение не отключено, проверять, нужно ли оно для каждого отдельного поля. Если нет — отключать с помощью атрибута `autocomplete="off"`

**CSS: Состояния**
- Стилизовать все состояния: Обычное, Наведение (hover), Фокус (focus), Нажатие (active), Отключенное (disabled)

**CSS: Состояние "disabled"**
- Стилизовать можно по селектору атрибута `[disabled]`
- Устанавливать курсор - "запрещено" (`cursor: not-allowed)