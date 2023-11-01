var express = require('express');
var router = express.Router();
var db = require('./db/db');
var mysql = require("mysql");
var formidable = require('formidable');
// var path = require('path');
var fs = require('fs');



/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.uid);
  db.sql(`select * from login where id = ${req.session.uid}` ,(err,rows) => {
    db.sql("select * from tx" ,(err,rows1) => {
      console.log(rows1[0].img);
      res.render('wd',{data:rows,img1:rows1[0]});
    })
  })
});

// router.get('/', function(req, res, next) {
//   db.sql("select * from tx" ,(err,rows) => {
//     res.render('wd',{data:rows});
//   })
// });





module.exports = router; 