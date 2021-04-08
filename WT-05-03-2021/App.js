var express=require('express')
var app=express()
app.get('/',function(req,res)
{
    res.send("This is Bushra Shaikh")

})
app.get('/Life',(req,res)=>{
    res.send("Kya Life Hai!")

})
app.get('/WEB-TECH',(req,res)=>{
    res.send("<h1>This is Sir Adeel's class of javascript</h1>")
})
app.post('/',(req,res)=>{
    res.send("This message is to check that either my message is being delivered by the client side to the server?")
    

})
//http:Users/8/books/1975
app.get('/Users/:usersid/books/:booksid',(req,res)=>{
    res.send(req.params)
})
var server=app.listen(3000,function() {console.log("Server and app is properly working.")})
console.log("Server and app is properly working.")
