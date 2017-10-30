var express = require('express');
var router = express.Router();
//var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database:'xinwen'
});

/* GET home page. */
router.get('/list', function(req, res, next) {
//res.render('index', { title: 'Express' });
	connection.query('SELECT id,xinwen FROM xinwenB',function(err, rows, fields){
	console.log(rows)
	   res.header('Access-Control-Allow-Origin',"*")
       res.send(rows)
	})
});


router.post('/datall', function(req, res, next) {
	//res.render('index', { title: 'Express' });
	var idA=req.body.id;
	connection.query('SELECT xiangqin FROM xinwenB where id='+idA,function(err, rows, fields){
	console.log(rows)
	 		 res.header('Access-Control-Allow-Origin',"*")
       res.send(rows)
   })
})
module.exports = router;
