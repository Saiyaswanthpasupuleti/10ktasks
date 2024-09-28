// let user="10 1 0 5 7".split(" ").map(Number);

// function sai(num){
// if(num==0 || num==1){
//     return true;
// }
// let a=0;
// let b=1;
// let c=a+b;
// while (c <= num) {
//     if (c === num){
//         return true; 
//     }
//     a = b;
//     b = c;
//     c = a + b;
// }

// return false; 
// }


// var news=1
// while(true){
//     if(sai(news)){
//         if(!user.includes(news)){
//             console.log(news)
//             break;
//         }
//     }
//     news++
// }





// 2) input: [ 538, 111, 200, 652]
// output:   [ false, false, false, true]



// let a=[ 538,111,200,652];
// let res=[];
// for(let i of a){
//     var b=String(i);
//     var c=0;
//     for(let j=0;j<b.length;j++){
//         if(b[j+1]<b[j]){
//             c++
//         }
//     }
//     res.push(b.length-1==c)
// }

// console.log(res)










// 3) WAP to print uniques and duplicates without using includes method
// input: 112
// output: 
// Uniques: 2
// Duplicates: 1

// let user="1 1 2".split(" ").map(Number).join("");
// let b=user;
// let z={}
// for(let i of user){
//   var c=0;
//    for(let j of b){
//         if(i==j){
//             c++
//         }
//    }
//    z[i]=c
// }


// console.log(Object.keys(z))












// 1) input: [23, 33, 200, 785]
// output:  30







// let a=prompt("enter number : ").split(" ");
// res=""
// for(let i of a){
//     emp=[];
    
//     for(let j of i){
//         if(!emp.includes(j)){
//             emp.push(j)
//         }
//     }
    
//     for(let k of emp){
//         let c=0;
//         for(let l of i){
//             if(k==l){
//                 c++
//             }
            
//         }
//         if(c>1){
//                 res+=k
//             }
//     }
// }
// console.log(res)
