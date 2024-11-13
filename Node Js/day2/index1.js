// create an api with port 5001
/*


let http=require("http")
let port=5001;
let server=http.createServer((req,res)=>{
    res.end("You can Exit Now ! ")
})
server.listen(port,()=>{
    console.log("Connection is Succesfull vro !")
})





// create an api with port 3001

// obj=[

// ]

// send obj as res when we hit

let http=require("http")
let port=3001
let obj=[{
    name:"Yaswanth",
    age:21,
    Course:"Node Js"
}]
let server=http.createServer((req,res)=>{
    if(req.url=="/"){

    console.log(obj)
    }

    res.end("Finished ._.")
    

})
server.listen(port,()=>{

    console.log("Can-Can !_!")
})

*/









// let http=require("http")
// let port=3001
// let result=""
// let server=http.createServer(async (req,res)=>{
//     let url="https://fakestoreapi.com/products"
//     try{
//         let responce1=await fetch(url)
//         let responce2=await responce1.json()
//         for (let i=0;i<4;i++) {
//             result+=JSON.stringify(responce2[i])
//         }
        
//         res.end(result)
//     }
//     catch(err){
//         console.log(err)
//         res.end("Got Some Errors")
//     }
    
// })
// server.listen(port,()=>{
//     console.log("Can Can !-!")
// })


// var http = require("http");

// var server = http.createServer(async(req, res) => {

//     var a= await fetch("https://fakestoreapi.com/products/1");

//     var f=await a.json()

//     console.log(f);
    

//   res.end(JSON.stringify(f));
// });

// var port = 3005;
// server.listen(port, () => {
//   console.log("hi server started " + port);
// });




let http=require("http")
let server=http.createServer((req,res)=>{
    res.end("You ended ")

})
server.listen(3000,()=>{
    console.log("Can Can !")
})