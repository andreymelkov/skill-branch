var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/task2A', function(req, res, next) {
    var a = 0, b = 0;
    if(req.query.a){
        a = req.query.a - 0;
    }
    if(req.query.b){
        b = req.query.b - 0;
    }

    var sum = a + b;

    console.log(sum);
    res.render('index', { sum: sum });
});

module.exports = router;
