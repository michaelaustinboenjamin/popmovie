const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Blog = require('./models/blog');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const dbURI = 'mongodb://localhost:27017/nodejs-app';
mongoose.connect(dbURI)
        .then(result => {
          console.log('connected to db');
          const PORT = 3000;
          app.listen(PORT, () => {
              console.log(`Server is running on http://127.0.0.1:${PORT}`);
          });
        })
        .catch(err => console.log(err));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.redirect('/blogs');
});
app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt : -1})
    .then( result => {
      res.render('index', {blogs: result, title: 'All blogs'});
    })
    .catch()
})
app.post('/blogs', urlencodedParser, (req, res) => {
    // console.log(req.body)
    const blog = new Blog(req.body);
    blog.save()
      .then(result => {
        res.redirect('/blogs');
      })
      .catch(err => {
        console.log(err);
      });
});
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});
// Sandbox Route
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
      title: 'new blog 4',
      snippet: 'about my new blog',
      body: 'more about my new blog'
  })
  blog.save()
      .then(result => {
      res.send(result);
      })
      .catch(err => {
      console.log(err);
      });
});
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});