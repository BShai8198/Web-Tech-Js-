# Web-Tech-Js-
const http=require('http');

var dt=require('./myfirstmodule')

/*     
this  is to show that it
is a multi-line comment 
hence there is a staric along with slash
*/
// This on the other hand is a single line comment 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write("Hello World\n Today is "+ dt.GiveDate())
    res.write("\n"+dt.PrintMyName())
    res.end("Killing the response object here")
}


).listen(8080, ()=>{
    console.log("The server is running on port 8080")
})
