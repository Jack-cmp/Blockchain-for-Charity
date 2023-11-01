var express = require('express');
var router = express.Router();
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



router.get('/', function(req, res, next) {
  res.render('houlogin');
});

router.post('/',(req,res) =>{
  let name = req.body.user;
  let password = req.body.password;
  let query = 'select * from houlogin where name ="' +name +'" and password="' +password + '"'
  connection.query(query,(err,results,fields) =>{
    if(err) throw err;
    if(results !=""){
      res.redirect('/houHome');
    }else{
      res.send("登录失败");
    }
  })
})


module.exports = router;
