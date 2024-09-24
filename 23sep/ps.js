// let rows=7
// for(let i=0;i<rows;i++){
//     res=""
//     char=65;
//     space=""
//     for(let k=0;k<2*i-1;k++){
//         space+=" "
//     }
//     for(let j=1;j<=rows-i;j++){
//         res+=String.fromCharCode(char)
//         char++
//     }
//     if(i==0){
//         console.log(res+res.slice(0,res.length-1).split("").reverse().join(""))

//     }
//     else{
//     console.log(res+space+res.split("").reverse().join(""))
//     }
// }

// let rows=5;
// char=65;
// for(let i=1;i<=rows;i++){
//     res=""
//     space=""
//     for(let k=1;k<=rows-i;k++){
//         res+=" "
//     }
//     let temp=""
//     for(let j=1;j<=i;j++){
        
//         temp+=String.fromCharCode(char)
//         char++
//     }
//     res+=temp.split("").reverse().join("")
//     console.log(res)
// }



// let rows=7;
// for(let i=0;i<rows;i++){
//     res=""
//     char=65
//     space=""
//     for(let k=0;k<=2*i-1;k++){
//         space+=" "
//     }
//     for(let j=1;j<=rows-i;j++){
//         res+=String.fromCharCode(char)
//         char++
//     }
//     console.log(res+space+res)

// }

// let rows=7
// for(let i=1;i<=rows;i++){
//     res=""
//     space=""
//     for(let k=1;k<=2*(rows-i);k++){
//         space+=" "
//     }
//     for(let j=1;j<=i;j++){
//         res+="*"
//     }
//     console.log(res+space+res)
// }
// for(let i=rows-1;i>=1;i--){
//     res=""
//     space=""
//     for(let k=1;k<=2*(rows-i);k++){
//         space+=" "
//     }
//     for(let j=i;j>=1;j--){
//         res+="*"
//     }
//     console.log(res+space+res)
// }