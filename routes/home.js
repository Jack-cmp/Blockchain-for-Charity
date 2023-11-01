let express = require('express');
let router = express.Router();
var md5 = require('md5-node');

router.get('/',function(req,res){
    res.render('home');
})


module.exports = router;