var http=require("http");
var fs=require("fs");
//ctrate server
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write{"i am used node mon libries and i am happy"};
    res.end();
)}.listen(4000);

//create server
console.log("server is live on http://127.0.0.1:4000");