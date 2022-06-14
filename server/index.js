require('dotenv').config();

const express = require('express');
const sequelize = require('./db');

const cors = require('cors'); // Для отправки запросов с браузера
const fileUpload = require('express-fileupload');

const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');


const PORT = process.env.PORT || 5000; // Указываем порт приложения
const app = express();

//app.use(fileUpload({}));
app.use(cors());
app.use(fileUpload({}));
app.use(express.json());
app.use('/api', router);

app.unsubscribe(errorHandler);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'All is work' });
});

const start = async () => {
  try {
    await sequelize.authenticate(); // Устанавливаем подключение к БД
    await sequelize.sync(); // Сверяем состояние БД со схемой данных

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // Запускакем сервер на выбранном порту
  } catch (e) {
    console.log(e)
  }
};

start();
