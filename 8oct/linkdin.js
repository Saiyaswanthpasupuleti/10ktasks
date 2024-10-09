// let rows=5;
// let char=65
// for(let i=1;i<=rows;i++){
//     res=""
//     for(let j=1;j<=rows;j++){
//         res+=String.fromCharCode(char)+" "
//         char++
//     }
//     console.log(res)
// }



// -------------------------




//  let rows=5;
// let char=65
// for(let i=1;i<=rows;i++){
//     res=""
//     for(let j=1;j<=rows;j++){
//         if(j==1 || i==rows || j==rows || i==1){
//         res+=String.fromCharCode(char)+" "
//         }
//         else{
//             res+=" "+" "
//         }
//         char++
//     }
//     console.log(res)
// }








// 3) let rows=5;
// let char=65
// for(let i=1;i<=rows;i++){
//     res=""
//     for(let j=1;j<=i;j++){
//         if(j==1 || i==rows || i==j){
//         res+=String.fromCharCode(char)+" "
//         }
//         else{
//             res+=" "+" "
//         }
//         char++
//     }
//     console.log(res)
// }









// 4) let rows=5;
// let char=65
// for(let i=1;i<=rows;i++){
//     res=""
//     for(let k=1;k<=rows-i;k++){
//         res+=" "+" "
//     }
//     for(let j=1;j<=i;j++){
//         if(j==1 || i==rows || i==j){
//         res+=String.fromCharCode(char)+" "
//         }
//         else{
//             res+=" "+" "
//         }
//         char++
//     }
//     console.log(res)
// }






// 5) let rows=5;
// let char=65
// for(let i=1;i<=rows;i++){
//     res=""
//     for(let k=1;k<=rows-i;k++){
//         res+=" "
//     }
//     for(let j=1;j<=i;j++){
//         if(j==1 || i==rows || i==j){
//         res+=String.fromCharCode(char)+" "
//         }
//         else{
//             res+=" "+" "
//         }
//         char++
//     }
//     console.log(res)
// }






// 6) let rows=5;
// let char=65
// for(let i=1;i<=rows;i++){
//     res=""
//     for(let k=1;k<=rows-i;k++){
//         res+=" "
//     }
//     for(let j=1;j<=i;j++){
//         if(j==1 || i==j){
//         res+=String.fromCharCode(char)+" "
//         }
//         else{
//             res+=" "+" "
//         }
//         char++
//     }
//     console.log(res)
// }
// for(let i=rows-1;i>=1;i--){
//     res=""
//     for(let k=1;k<=rows-i;k++){
//         res+=" "
//     }
//     for(let j=1;j<=i;j++){
//          if(j==1 || i==j){
//         res+=String.fromCharCode(char)+" "
//         }
//         else{
//             res+=" "+" "
//         }
//         char++
//     }
//     console.log(res)
// }










// 7) let rows=5;
// let char=65
// for(let i=rows;i>=1;i--){
//     res=""
//     space=""
//     for(let k=1;k<=2*(rows-i);k++){
//         space+=" "+" "
//     }
//     for(let j=1;j<=i;j++){
//         res+=String.fromCharCode(char)+" "
//         char++
//     }
//     console.log(res+space+res)
// }









// 8) let rows=5;
// for(let i=rows;i>=1;i--){
//      let char=65
//     res=""
//     space=""
//     for(let k=1;k<=2*(rows-i);k++){
//         space+=" "+" "
//     }
//     for(let j=1;j<=i;j++){
//         res+=String.fromCharCode(char)+" "
//         char++
//     }
//     console.log(res+space+res)
// }
// for(let i=2;i<=rows;i++){
//     let char=65
//     res=""
//     space=""
//      for(let k=1;k<=2*(rows-i);k++){
//         space+=" "+" "
//     }
//     for(let j=1;j<=i;j++){
//          res+=String.fromCharCode(char)+" "
//         char++
//     }
//     console.log(res+space+res)
// }




// 9) let rows=5;
// let char=65;

// for(let i=1;i<=rows;i++){
//     res=""
//     for(let j=1;j<=i;j++){
//         if(j==1 || i==j ){
//         res+=String.fromCharCode(char)+" "
//         char++
//         }
//         else{
//             res+=" "+" "
//         }
//     }
//     console.log(res)
    
// }
// for(let i=rows-1;i>=1;i--){
//     res=""
//     for(let j=1;j<=i;j++){
//         if(j==1 || i==j){
//         res+=String.fromCharCode(char)+" "
//         char++
//         }
//         else{
//             res+=" "+" "
//         }
//     }
//       console.log(res)
// }



// 10)  let rows=5;
// let char=65;

// for(let i=1;i<=rows;i++){
//     res=""
//     space=""
//     for(let k=1;k<=2*(rows-i);k++){
//         space+=" "
//     }
//     for(let j=1;j<=i;j++){
//         if(j==1 || i==j ){
//         res+=String.fromCharCode(char)
//         char++
//         }
//         else{
//             res+=" "
//         }
//     }
//     console.log(res+space+res)
    
// }
// for(let i=rows-1;i>=1;i--){
//     res=""
//      space=""
//     for(let k=1;k<=2*(rows-i);k++){
//         space+=" "
//     }
//     for(let j=1;j<=i;j++){
//         if(j==1 || i==j){
//         res+=String.fromCharCode(char)
//         char++
//         }
//         else{
//             res+=" "
//         }
//     }
//       console.log(res+space+res)
// }