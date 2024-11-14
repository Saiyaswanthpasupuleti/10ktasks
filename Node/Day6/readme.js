let http=require("http")
let fs=require("fs")
let server=http.createServer((req,res)=>{
    fs.readFile("./postmethod.txt","utf-8",(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
        }
    })
})
server.listen(3502,()=>{
    console.log("Can Can !_!")
})