var express = require('express');
var router = express.Router();

router.use(function(req,res,next){
    console.log('Time: ', Date.now());
    next();
});

router.route('/')
      .get(function(req,res){
          res.send('Get')
      })
      .post(function(req,res){
          res.send('Post')
      })
      .put(function(req,res){
          res.send('Put')
      });

module.exports = router;