var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('users route')
  res.send('respond with a resource' + JSON.stringify(req));
});

module.exports = router;
