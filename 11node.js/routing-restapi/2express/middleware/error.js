export default (req, res) => {
  // Задать код ответа
  res.status(404);
  // Отправить ответ (с текстовой строкой)
  res.send("404 | not found");
}
