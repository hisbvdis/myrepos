// ===========================================================================
// 1. ИМПОРТЫ
// ===========================================================================
// 1.1. Express — для работы сервера
import express from "express";
// 1.2. Middlewares — ???
import cors from "cors";
import bodyParser from "body-parser";
import loggerMW from "./middleware/logger.js";
import errorMW from "./middleware/error.js";
import globalerrorMW from "./middleware/globalError.js";
// 1.3. Routes — файлы, содержащие логику обработки рутов
import homeRouter from "./routes/home.js";
import usersApiRouter from "./routes/usersApi.js";
import usersRouter from "./routes/users.js";
import loginRouter from "./routes/login.js";
import redirectRouter from "./routes/redirect.js";
// 1.4. Другое
import path from "node:path";
import { fileURLToPath } from 'url';



// ===========================================================================
// 2. ПОДГОТОВКА
// ===========================================================================
// 2.1. ???
export const rootPath = path.dirname(fileURLToPath(import.meta.url));
// 2.2. ???
const dirPath = path.dirname(fileURLToPath(import.meta.url));
// 2.3. ???
const staticPath = path.join(dirPath, "public");



// ===========================================================================
// 3. СОЗДАТЬ СЕРВЕР
// ===========================================================================
const app = express();
app.set('view engine', 'ejs');

// 3.1. Запустить сервер (на указанном порте)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is on http://localhost:${PORT}/`));



// ===========================================================================
// 4. ПОДКЛЮЧЕНИЕ MIDDLEWARES
// ===========================================================================
// 4.1. CORS politics
app.use(cors());
// 4.2. Request body parsers
app.use(bodyParser.json());                       // json
app.use(bodyParser.urlencoded({extended: true})); // x-www-form-urlencoded
// 4.3. All requests logger
app.use(loggerMW);



// ===========================================================================
// 5. РОУТИНГ (НАЗНАЧЕНИЕ ОБРАБОТЧИКОВ ДЛЯ АДРЕСОВ)
// ===========================================================================
// 5.1. Страница "Главная"
app.use("/", homeRouter);
// 5.2. Страница "Пользователи"
app.use("/users", usersRouter);
// 5.3. API для работы с "Пользователями"
app.use("/api/users", usersApiRouter);
// 5.4. Страница "Логин"
app.use("/api/user/login", loginRouter);
// 5.5. Страница "Старая" (для редиректа)
app.get("/redirect-old", redirectRouter);
// 5.5. Путь к статическим файлам (картинки)
app.use("/public", express.static(staticPath));



// ===========================================================================
// 6. MIDDLEWARE ДЛЯ НЕСУЩЕСТВУЮЩИХ АДРЕСОВ (ПОСЛЕ ОСНОВНОГО РОУТИНГА)
// ===========================================================================
// 6.1. Если запрос не был обработан другим обработчиком, он считается ошибкой
app.use(errorMW);
// 6.2. Обработчик глобальных ошибок
app.use(globalerrorMW);
