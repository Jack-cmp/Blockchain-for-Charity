module.exports = function(req,res,next){
    var url = req.url;
    console.log(req.session.id);
    if (!req.session.uid){
        res.send('<script>alert("请先登录"); window.location.herf="/login" </script>')
        return;
    }
    next();
}