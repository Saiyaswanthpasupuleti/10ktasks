
// let http=require("http")
// let url=require("url")
// let server=http.createServer(async(req,res)=>{

//     let data=req.url
//     let result=url.parse(data,!false).query.order
//     console.log(result)
    

//     var a= await fetch("https://fakestoreapi.com/products");
//     var b=await a.json()
//     if(result=="desc"){
//     var sorted=b.sort((a,b)=>a.price-b.price)
//     res.end(JSON.stringify( sorted))
//     }
//     else if(result=="asce"){
//         var rsorted=b.sort((a,b)=>b.price-a.price)
//         res.end(JSON.stringify( rsorted))
//     }
//     else{
//         res.end("Server Stoped")
//     }


    

// })
// server.listen(3000,()=>{
//     console.log("Can Can !")
// })





// let http=require("http")
// let url=require("url")
// let server=http.createServer(async (req,res)=>{
//       let a= await fetch("https://fakestoreapi.com/products")
//       let b=await a.json()

//    let o1=req.url
//    let o2=url.parse(o1,!false)
//    console.log(o2)
//    let o3=o2.pathname.split("/")
//    let fr=o3[o3.length-1]
//    let q=b.filter((val,ind)=>{
//       return val.id==fr
//    })
//    res.end(JSON.stringify(q))
   
    
// })

// server.listen(3000,()=>{
//     console.log("Can Can !")
// })




// //http://localhost:3000/?name=sai&age=22
// let http=require("http")
// let url=require("url")
// let server=http.createServer((req,res)=>{
//    let o1=req.url
//    let o2=url.parse(o1,true).query
//    res.end(JSON.stringify(o2))
   
    
// })

// server.listen(3000,()=>{
//     console.log("Can Can !")
// })

