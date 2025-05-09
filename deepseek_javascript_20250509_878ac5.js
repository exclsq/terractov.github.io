require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ghostbin-forum', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Модель поста
const Post = require('./models/Post');

// Настройка приложения
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Маршруты
app.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render('index', { posts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.get('/post/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send('Post not found');
    res.render('post', { post });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.get('/new', (req, res) => {
  res.render('new-post');
});

app.post('/posts', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = new Post({
      title,
      content,
      author: author || 'Anonymous'
    });
    await newPost.save();
    res.redirect(`/post/${newPost._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});