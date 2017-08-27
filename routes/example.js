var express = require('express');
var router = express.Router();

router.get('/a',function(req,res){
    //res.send('Hello Example From A');
});

router.get('/b',function(req,res,next){
    console.log('Response will be send by the next function');
    //next();
},function(req,res){
    res.send('Hello Exampel From B')
});

module.exports = router;