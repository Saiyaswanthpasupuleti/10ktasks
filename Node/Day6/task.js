
// Task 1    

let http=require("http");
let fs=require("fs")
let server=http.createServer((req,res)=>{
    if(req.method=="GET"){
        let msg="This is Get Method"
        fs.writeFile("./postmethod.txt",msg,(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                fs.readFile("./postmethod.txt","utf-8",(err,data)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        res.write(data)
                        console.log(data)
                    }
                })
            }
        })
    }
    else if(req.method=="POST"){
        let msg="This is Post Method";
        fs.appendFile("./postmethod.txt",msg,(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                fs.readFile("./postmethod.txt","utf-8",(err,data)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        res.write(data)
                        console.log(data)
                    }
                })
            }

        })
    }

    else if(req.method=="PUT"){
        let msg="This is Put Method";
        fs.writeFile("./postmethod.txt",msg,(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                fs.readFile("./postmethod.txt","utf-8",(err,data)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        res.write(data)
                        console.log(data)
                    }
                })
            }

        })
    }
    else if(req.method=="DELETE"){
        fs.unlink("./postmethod.txt",(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("Succesfully deleted the file")
            }
        })
    }

    
    
})
server.listen(3000,()=>{
    console.log("Can Can !_!")
})








//Task 2 





let http=require("http");
let server=http.createServer(async (req,res)=>{
    let a=await fetch("https://fakestoreapi.com/products")
    let b=await a.json()
    
    if(req.method==="GET"){
        console.log("Get",b[0])
        res.write(JSON.stringify(b[0]))
    }
    else if(req.method==="POST"){
        console.log("POST",b[1])
        res.write(JSON.stringify(b[1]))

    }
    else if(req.method==="PUT"){
        console.log("PUT",b[2])
        res.write(JSON.stringify(b[2]))

    }
    else if(req.method==="DELETE"){
        console.log("DELETE",b[3])
        res.write(JSON.stringify(b[3]))

    }
    else{
        res.end(JSON.stringify("Server Stopped"))
        console.log("Ended")
    }

})
server.listen(3000,()=>{
    console.log("Can Can !_!")
})