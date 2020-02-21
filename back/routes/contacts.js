const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const formMaxNumberFromPhoneNumber = require('../lib').formMaxNumberFromPhoneNumber


router.get('/', function (req, res, next) {
  mongoose.model('Contact').find({}).sort({
    created: 1
  }).then(docs => {
    res.json(docs)
  })
});

router.post('/', function (req, res, next) {
  const largerPhoneNumber = formMaxNumberFromPhoneNumber(req.body.phoneNumber)

  // log the largerPhoneNumber
  console.log(largerPhoneNumber)

  if (req.body.shouldAddToNewsletter) {
    console.log(req.body)
  }

  const data = {
    ...req.body,
    // add created and largerPhoneNumber for sorting in mongo query
    created: Date.now(),
    largerPhoneNumber
  }

  mongoose.model('Contact')
    .create(data)
    .then(doc => res.status(201).json({
      status: 201,
      message: 'created',
      doc
    }))
});

module.exports = router;