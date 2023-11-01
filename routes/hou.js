var express = require('express');
var router = express.Router();
var db = require('./db/db');
var formidable = require('formidable');
// var path = require('path');
var fs = require('fs');


router.get('/',(req,res) => {
  res.render('hou');
}); 


//新增
router.post('/',(req,res) => {
  
  var form = new formidable.IncomingForm()
  form.parse(req,(err,fields,files) => {
    

    var tempPath = files.picture.filepath
    var rs = fs.createReadStream(tempPath)
    var ws = fs.createWriteStream('./public/upload_img/' +files.picture.originalFilename)
    rs.pipe(ws)
    
    db.sqlParam("insert into hou(Neederaddress,goal,fact,picture,phone,number) values(?,?,?,?,?,?)",[
      fields.Neederaddress,
      fields.goal,
      fields.fact,
      // "/upload_img/"+files.picture.name,
      files.picture.originalFilename,
      fields.phone,
      fields.number
    ],(err,rows) => {
      console.log(err);
      console.log(rows);
      res.redirect('hou')
  
    })
  })
  });

  
  




module.exports = router;