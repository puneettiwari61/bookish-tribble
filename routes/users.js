var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//   console.log('users route', req.headers.host)
  console.log('req.body', req.body)
  
  res.send('respond with a resource' + req.headers.host );
  // curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' https://hooks.slack.com/services/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
});


router.post('/', function(req,res,next) {
  console.log('its a post', req)
  req.body.text = "its working"
  const {challenge} = req.body
  res.json({challenge})
})
module.exports = router;
