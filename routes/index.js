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
    res.send(200);

});

router.get('/task2B', function(req, res, next) {
    var fullName = "", name = "";
    if(req.query.fullname){
        fullName = req.query.fullname;
        var arr = fullName.split(" ");

        if(arr.length > 3){
            console.log('Invalid full name');
            res.sendStatus(500);
        }else if(arr.length == 3){
            name = arr[2] + " " + arr[0].substring(0, 1) + ". " + arr[1].substring(0, 1)+ ".";
            console.log(name);
            res.sendStatus(200);
        }else if(arr.length == 2){
            name = arr[1] + " " + arr[0].substring(0, 1) + ".";
            console.log(name);
            res.sendStatus(200);
        }else if(arr.length == 1){
            name = arr[0];
            console.log(name);
            res.sendStatus(200);
        }else{
            console.log('Invalid full name');
            res.sendStatus(500);
        }
    }else{
        console.log('Invalid full name');
        res.sendStatus(500);
    }

});

module.exports = router;
