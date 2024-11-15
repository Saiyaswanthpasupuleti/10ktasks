let http=require("http")
let fs=require("fs")
let server=http.createServer((req,res)=>{
    console.log("hai")
})
server.listen(3000,()=>{
    console.log("Can Can !_!")
})