var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  if (req.body.shouldAddToNewsletter) {
    console.log(req.body)
  }
  res.json({
    status: 200,
    message: 'success'
  })
});

module.exports = router;