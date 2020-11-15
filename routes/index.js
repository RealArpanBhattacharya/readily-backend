var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({body: JSON.stringify(req.get('host'))});
});



module.exports = router;
