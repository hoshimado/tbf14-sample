var express = require('express');
var router = express.Router();

/* GET users ENV_TEST. */
router.get('/env', function(req, res, next) {
  res.send(`ENV_TEST = [` + process.env.ENV_TEST + ']');
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
