var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var db = require('./db/db');
var formidable = require('formidable');
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tx');
});

//头像上传
router.post('/',(req,res) => {
    var form = new formidable.IncomingForm()
    form.parse(req,(err,fields,files) => {
    
      var tempPath = files.img.filepath
      var rs = fs.createReadStream(tempPath)
      var ws = fs.createWriteStream('./public/upload_img/' +files.img.originalFilename)
      rs.pipe(ws)
      db.sqlParam("update tx set tx.img=? where id =1",[
        files.img.originalFilename,
      ],(err,rows) => {
        console.log(err);
        console.log(rows);
        res.redirect('tx')
    
      })
    })
    });


  
module.exports = router;