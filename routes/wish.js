var express = require('express');
var router = express.Router();
var db = require('./db/db');
var mysql = require("mysql");


/* GET home page. */
router.get('/', function(req, res, next) {
  db.sql("select * from hou" ,(err,rows) => {
    res.render('wish',{data:rows});
  })
 
});

router.post('/',(req,res) => {
  let message = req.body.message
  console.log(message)
  let query = `select*from hou where Neederaddress like '%${message}%'`
  db.sqlParam(query,(err,rows) => {
    if (err) throw err;
    console.log(rows);
    // res.json(rows);
    res.send(rows);
  })
 
});



module.exports = router; 