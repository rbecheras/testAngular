const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();

router.post('/', function (req, res, next) {
  if (req.body.shouldAddToNewsletter) {
    console.log(req.body)
  }

  mongoose.model('Contact')
    .create(req.body)
    .then(doc => res.json({
      status: 201,
      message: 'created',
      doc
    }))
});

module.exports = router;