
// Task 1    

// let http=require("http");
// let fs=require("fs")
// let server=http.createServer((req,res)=>{
//     if(req.method=="GET"){
//         let msg="This is Get Method"
//         fs.writeFile("./postmethod.txt",msg,(err,data)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 fs.readFile("./postmethod.txt","utf-8",(err,data)=>{
//                     if(err){
//                         console.log(err)
//                     }
//                     else{
//                         res.write(data)
//                         console.log(data)
//                     }
//                 })
//             }
//         })
//     }
//     else if(req.method=="POST"){
//         let msg="This is Post Method";
//         fs.appendFile("./postmethod.txt",msg,(err,data)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 fs.readFile("./postmethod.txt","utf-8",(err,data)=>{
//                     if(err){
//                         console.log(err)
//                     }
//                     else{
//                         res.write(data)
//                         console.log(data)
//                     }
//                 })
//             }

//         })
//     }

//     else if(req.method=="PUT"){
//         let msg="This is Put Method";
//         fs.writeFile("./postmethod.txt",msg,(err,data)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 fs.readFile("./postmethod.txt","utf-8",(err,data)=>{
//                     if(err){
//                         console.log(err)
//                     }
//                     else{
//                         res.write(data)
//                         console.log(data)
//                     }
//                 })
//             }

//         })
//     }
//     else if(req.method=="DELETE"){
//         fs.unlink("./postmethod.txt",(err,data)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 console.log("Succesfully deleted the file")
//             }
//         })
//     }

    
    
// })
// server.listen(3000,()=>{
//     console.log("Can Can !_!")
// })








//Task 2 





let http=require("http");
let server=http.createServer(async (req,res)=>{
    let a=await fetch("https://fakestoreapi.com/products")
    let b=await a.json()
    
    if(req.method==="GET"){
        let id=0
        let x=b.filter((val,index,array)=>{
            return val.id==id
        })
        console.log(x[0])
    
    }
    else if(req.method==="POST"){
        let id=1
        let x=b.filter((val,index,array)=>{
            return val.id==id
        })
        console.log(x[0])

    }
    else if(req.method==="PUT"){
        let id=2
        let x=b.filter((val,index,array)=>{
            return val.id==id
        })
        console.log(x[0])

    }
    else if(req.method==="DELETE"){
        let id=3
        let x=b.filter((val,index,array)=>{
            return val.id==id
        })
        console.log(x[0])

    }
    else{
        res.end(JSON.stringify("Server Stopped"))
        console.log("Ended")
    }

})
server.listen(3000,()=>{
    console.log("Can Can !_!")
})