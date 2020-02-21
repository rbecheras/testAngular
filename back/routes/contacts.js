const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const formMaxNumberFromPhoneNumber = require('../lib').formMaxNumberFromPhoneNumber

router.post('/', function (req, res, next) {
  if (req.body.shouldAddToNewsletter) {
    console.log(req.body)
  }

  console.log(formMaxNumberFromPhoneNumber(req.body.phoneNumber))

  mongoose.model('Contact')
    .create(req.body)
    .then(doc => res.status(201).json({
      status: 201,
      message: 'created',
      doc
    }))
});

module.exports = router;