var express = require('express');
var router = express.Router();
var userModel = require('./db/sequelize');


var Ajv = require('ajv');
//var dbUtil = require('./db/DBUtil');


/* GET users listing. */
router.get('/', function(req, res, next) {

    userModel.findById(1).then(function(user){
        console.log(user.name);
        console.log(user.address);
        console.log(user.email);
        console.log(user.phone);
    },function(error){
        console.log(error);
    });



    //var ajv = new Ajv({$data: true});

    // var schema = {
    //     "properties": {
    //         "smaller": {
    //             "type": "number",
    //             "maximum": { "$data": "1/larger" }
    //         },
    //         "larger": { "type": "number" }
    //     }
    // };
    //
    // var validData = {
    //     smaller: 5,
    //     larger: 7
    // };
    // };
    // var schema = {
    //     "additionalProperties": {
    //         "type": "string",
    //         "format": { "$data": "0#" }
    //     }
    // };
    //
    // var validData = {
    //     'date-time': '1963-06-19T08:30:06.283185Z',
    //     email: 'joe.bloggs@example.com',
    //     age:1
    // }
    //
    // var isValidate = ajv.validate(schema, validData); // true
    //
    // console.log(isValidate);
    // var mysql      = require('mysql');
    // var connection = mysql.createConnection({
    //     host     : 'localhost',
    //     user     : 'root',
    //     password : 'abc123_'
    // });
    //
    // connection.connect();
    //
    // connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    //     if (err) throw err;
    //     console.log('The solution is: ', rows[0].solution);
    // });
    //
    // connection.end();

    res.send('respond with a resource');
});

router.post('/',function(req,res){
  res.send('Create user');
});

router.put('/',function(req,res){
  res.send('Update user');
});

router.delete('/',function(req,res){
  res.send('Delete user');
});

module.exports = router;
