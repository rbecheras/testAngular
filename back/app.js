const express = require('express');
const logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const contactsRouter = require('./routes/contacts');


const db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/freelance', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
db.on('error', err => {
  console.error('MongoDB connection failed', err)
  process.exit(1)
})
db.once('open', function () {
  console.log('MongoDB connection success');
  require('./models/contact')
});

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors())

app.use('/', indexRouter);
app.use('/apis/contacts', contactsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send();
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json(err.message);
});

module.exports = app;