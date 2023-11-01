var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var md5 = require('md5-node');


router.get('/', function(req, res, next) {
  res.render('login');
});

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


router.post('/',(req,res) =>{
  let name = req.body.user;
  let password = req.body.password;
  console.log(name,password);
  let query = 'select * from login where name ="' +name +'" and password="' +md5(password) + '"'
  connection.query(query,(err,results,fields) =>{
    console.log(results);
    if(err) throw err;
    if(results != ""){
      req.session.uid = result[0].id;
      req.session.userName = user.name;
      req.session.password = user.password;
      res.redirect('/home');
    }else{
      res.send("登录失败");
    
    }
  })
})



module.exports = router;