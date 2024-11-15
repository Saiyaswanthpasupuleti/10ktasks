let http=require("http")
let fs=require("fs")
let server=http.createServer((req,res)=>{
    fs.readFile("./result.txt","utf-8",(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            let array=JSON.parse(data)
            let obj={skill:"html"}
            array.push(obj)
            fs.writeFile("./result.txt",JSON.stringify(array),(err,data)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log(JSON.stringify(array))
                    res.end(JSON.stringify(array))

                }
            })
        }
    })
})
server.listen(3000,()=>{
    console.log("Can Can !_!")
})

