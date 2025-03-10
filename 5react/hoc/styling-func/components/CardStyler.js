// Компонент высшего порядка (функция, возвращающая класс)
const CardStyler = (Component, size) => {
  return (props) => (
    <Component {...props} size={size}/>
  )
}

export default CardStyler;
