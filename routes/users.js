var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('users route', req.headers.host)
  
  res.send('respond with a resource' + req.headers.host );
});

module.exports = router;
