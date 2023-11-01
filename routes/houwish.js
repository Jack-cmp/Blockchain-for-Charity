var express = require('express');
var router = express.Router();
var db = require('./db/db');
var formidable = require('formidable');
// var path = require('path');
var fs = require('fs');
var mysql = require('mysql');

let connection = mysql.createConnection({
  host:"localhost",
  port:"3306",
  user:"root",
  password:"123456",
  database:"contribution"
});
connection.connect(err =>{
  if(err) throw err;
  console.log("mysql 连接成功");
})


/* GET home page. */
router.get('/', function(req, res, next) {
  db.sql("select * from hou" ,(err,rows) => {
    res.render('houwish',{data:rows});
  })
});

//删除
router.get('/del/:id',(req,res)=>{
  console.log(req.params.id);
    let id = req.params.id;
    connection.query(`DELETE FROM HOU WHERE ID = ${id}`,(err,results) =>{
      if(err) throw err;
      res.redirect('/houwish')
    })
  })

module.exports = router; 







