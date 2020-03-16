var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('users route', req.headers.host)
  
  res.send('respond with a resource' + req.headers.host );
  // curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' https://hooks.slack.com/services/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
});


router.post('/', function(req,res,next) {
  console.log('its a post')
  res.json({success: true})
})
module.exports = router;
