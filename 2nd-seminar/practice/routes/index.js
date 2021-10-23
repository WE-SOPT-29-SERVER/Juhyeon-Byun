var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/api", require("./api")); // router.use()를 사용해서 생성한 폴더의 index.js에 접근

module.exports = router;
