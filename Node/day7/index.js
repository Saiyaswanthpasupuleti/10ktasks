var http=require("http")
var fs=require("fs")
var url=require("url")
var server=http.createServer(async (req,res)=>{
    let u1=req.url
    let u2=url.parse(u1).pathname
    if(u2=="/createfile" && req.method=='POST'){
        let a=await fetch("https://fakestoreapi.com/products")
        let b=await a.json()
        fs.writeFile("Node/day7/.index.txt",JSON.stringify(b),(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                res.write("Data Added Succesfull Here is Your data 👇🏻")
                fs.readFile("Node/day7/.index.txt","utf-8",(err,data)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        
                        res.write(JSON.stringify(data))
                        res.end()
                    }
                })
            }

        })

    }
    else if(u2=="/getdata" && req.method=="GET"){
        fs.readFile("Node/day7/.index.txt","utf-8",(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                res.write(JSON.stringify(data))
                res.end()
            }
        })
    }
    else{
        res.write("Sorry no data found")
        res.end()
    }
})
server.listen(3000,()=>{
    console.log("Can Can !_!")
})