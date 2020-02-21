const express = require('express');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const contactsRouter = require('./routes/contacts');

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