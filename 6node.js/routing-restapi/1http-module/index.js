// =============================================================================
// 1. ИМПОРТЫ
// =============================================================================
// 1.1. Модуль "http" — для создания сервера
import http from "http";
// 1.2. Модуль "url" — для обработки URL-адреса
import url from "url";
// 1.3. Модуль "fs" — для чтения HTML-файлов, которые будем возвращать
import { readFileSync } from "fs";
// 1.4. ???
import querystring from "node:querystring";



// =============================================================================
// 2. ЭМУЛЯЦИЯ БАЗЫ ДАННЫХ
// =============================================================================
let users = [
  {id: 1, name: "Roma", age: 30},
  {id: 2, name: "Vasya", age: 55},
]



// =============================================================================
// 3. СОЗДАТЬ СЕРВЕР
// =============================================================================
const server = http.createServer((req, res) => {
  // 3.1. Получить части "URL-адреса" из запроса
  const { pathname, query } = url.parse(req.url, true);
  // 3.2. Получить метода запроса (GET, POST)
  const { method } = req;


  // ===========================================================================
  // 4. ФОРМАТ ОТВЕТА — HTML (ВОЗВРАЩАЕМ HTML-КОД)
  // ===========================================================================
  res.setHeader("Content-Type", "text/html; charset=utf-8;");


  // ===========================================================================
  // 5. РОУТИНГ (ПРИЁМ/ОБРАБОТКА ЗАПРОСОВ — ОТПРАВКА ОТВЕТОВ)
  // ===========================================================================
  // 5.1. Проверить путь
  switch (pathname) {
    // 5.2. Обработка пути "/"
    case "/": {
      res.write(`<h2>List</h2>`);
      res.write(itemsComponent(users));
      res.write(`<a href="/add">Add item</a>`);
      break;
    }


    // 5.3. Обработка пути "/add"
    case "/add": {
      if (method === "GET") {
        res.write(`<h2>New item</h2>`);
        res.write(addItemComponent());
      }
      else if (method === "POST") {
        let body = [];
        req
          .on("data", (chunk) => {
            body.push(chunk);
          })
          .on("end", () => {
            body = querystring.parse(Buffer.concat(body).toString());
            users.push({id: users.at(-1)?.id + 1 || 1, name: body.name, age: body.age});
          })

        res.statusCode = 302;
        res.setHeader("Location", "/");
      }
      break;
    }


    // 5.4. Обработка пути "/edit"
    case "/edit": {
      if (method === "GET") {
        const item = users.find((item) => item.id === Number(query.id));
        res.write(`<h2>Edit item</h2>`);
        res.write(editItemComponent(item));
      }
      else if (method === "POST") {
        if (query.id) {
          let body = [];
          req
            .on("data", (chunk) => {
              body.push(chunk);
            })
            .on("end", () => {
              body = querystring.parse(Buffer.concat(body).toString());
              const itemIndex = users.findIndex(({id}) => id === Number(query.id));
              users[itemIndex].name = body.name;
              users[itemIndex].age = body.age;
            });
          res.statusCode = 302;
          res.setHeader("Location", "/");
        }
      }
      break;
    }


    // 5.5. Обработка пути "/delete"
    case "/delete": {
      users = users.filter((el) => el.id !== Number(query.id));
      res.statusCode = 302;
      res.setHeader("Location", "/");
      break;
    }


    // 5.6. Ошибка — для остальных путей
    default: {
      const fileContent = readFileSync("./views/error.html", "utf-8");
      res.write(fileContent);
      break;
    }
  }


  // ===========================================================================
  // 6. ОТПРАВИТЬ СФОРМИРОВАННЫЙ ОТВЕТ
  // ===========================================================================
  res.end();
})



// =============================================================================
// 7. ЗАПУСТИТЬ СЕРВЕР
// =============================================================================
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// =============================================================================
// 8. ФУНКЦИИ ДЛЯ ГЕНЕРАЦИИ РАЗМЕТКИ, ДОБАВЛЯЕМОЙ В ОТВЕТ
// =============================================================================
// 8.1. Компонент "Список всех элементов"
function itemsComponent(items=[]) {
  return (`
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(({id, name, age}) => {
          return (`
            <tr>
              <th>${id}</th>
              <th>${name}</th>
              <th>${age}</th>
              <td>
                <a href="/edit?id=${id}">Edit</a>
                <a href="/delete?id=${id}">Delete</a>
              </td>
            </tr>
          `)
        }).join("")}
      </tbody>
    </table>
  `)
}

// 8.2. Компонент "Форма добавления нового элемента"
function addItemComponent() {
  return (`
    <form method="POST" action="/add">
      <input type="text" name="name" placeholder="name" value="Roma" required autofocus/>
      <input type="number" name="age" placeholder="age" value="30" required/>
      <button type="submit">Add</button>
    </form>
  `)
}

// 8.3. Компонент "Форма редактирования элемента"
function editItemComponent({id, name, age}) {
  return (`
    <form method="POST" action="/edit?id=${id}">
      <input type="text" name="name" placeholder="name" value="${name}" autofocus/>
      <input type="number" name="age" placeholder="age" value="${age}"/>
      <button type="submit">Save</button>
    </form>
  `)
}
