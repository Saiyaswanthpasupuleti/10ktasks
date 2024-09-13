// let rows=5;
// for(let i=rows;i>=1;i--){
//     res=""
//     for(let k=rows-i;k>=1;k--){
//         res+=" "
//     }
//     for(let j=i;j>=1;j--){
//         res+="* "
//     }
//     console.log(res)
// }


let rows=5;
let count=1;
for(let i=1;i<=rows;i++){
   res="";
   for(let j=1;j<=i;j++){
    res+=count+" "
    count++
    
    
   }
   console.log(res);
}
   






// let rows=prompt("enter rows : ")

// for(let i=1;i<=rows;i++){
//     res="";
//     for(let k=1;k<=rows-i;k++){
//         res+=" "
//     }
//     for(let j=1;j<=i;j++){
        
//         res+="*"+" "
        
//     }
//    console.log(res)
// }
// for(let i=rows-1;i>=1;i--){
//     res=""
//     for(k=rows-i;k>=1;k--){
//         res+=" "
//     }
//     for(let j=1;j<=i;j++){
//         res+="*"+" "
//     }
//     console.log(res)
// }
//bujbbu