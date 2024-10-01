function demo(x){
    setTimeout(()=>{
         console.log("1 st function")
         x()
    },2000)
   
}
function demo2(y){
     setTimeout(()=>{
        console.log("2nd function")
        y()
    },1000)
}   
 function demo3(z){
     setTimeout(()=>{
        console.log("3rd function")
        z()
    },1500)
    
}
function demo4(){
     setTimeout(()=>{
        console.log("4th function")
    },2500)
    
}
demo(()=>{
    demo2(()=>{
        demo3(()=>{
            demo4()
        })
    })
})