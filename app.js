const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const uri = "mongodb+srv://Spectrum:<password>@cluster0.v0lsvnt.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// Добавляем middleware для обработки CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    await client.connect();
    const database = client.db('your_database_name');
    const collection = database.collection('your_collection_name');

    const user = await collection.findOne({ username, password });

    if (user) {
      res.json({ success: true, message: 'Успешный вход' });
    } else {
      res.json({ success: false, message: 'Неверное имя пользователя или пароль' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});