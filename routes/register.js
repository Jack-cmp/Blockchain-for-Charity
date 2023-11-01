var express = require('express');
var router = express.Router();
var db = require('./db/db');
var mysql = require('mysql');
var md5 = require('md5-node');
const { render } = require('ejs');

// let connection = mysql.createConnection({
//   host: "localhost",
//   port: "3306",
//   user: "root",
//   password: "123456",
//   database: "contribution"
// });

// db.connect(err => {
//   if (err) throw err;
//   console.log("mysql 连接成功");
// })


//注册新增
router.post('/', function (req, res) {
  var addSql = 'INSERT INTO login(name,ph,sexo,password) VALUES(?,?,?,?)';
  var addSqlParams = [req.body.user, req.body.ph,req.body.sexo, md5(req.body.password)];
  db.sqlParam(addSql, addSqlParams, function (err, results) {
    if (err) throw err;
    if (results != "") {
      res.redirect('/login');
    } else {
      res.send("注册失败");
    }
  })
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('register');
});


module.exports = router;