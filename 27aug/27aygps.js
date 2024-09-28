// 2) input: [ 538, 111, 200, 652]
// output:   [ false, false, false, true]

// let user=[538, 111, 200, 652];
// let res=[];
// for(let i of user){
//     var a=String(i)
    
//     let c=0;
//     for(let j=0;j<a.length-1;j++){
//         if(a[j+1]<a[j]){
//             c++
//         }
//     }
//     res.push(a.length-1==c)

// }
// console.log(res)


// let user="38283".split("").map(Number);


// function sai(num){
   
//     if(num>1){
        
//         for(let i=2;i<num;i++){
//             if(num%i==0){
//                 return false
//             }
//         }
//         return true

//     }
   
//     return false


// }



// var prime=2;
// while(true){
//     if(sai(prime)){
//         if(!user.includes(prime)){
//             console.log(prime);
//             break
            
//         }
//     }
//     prime++
// }





// WAP to print first missing fibonnacci umber
// input: 10 1 0 5 7




// let user="10 1 0 5 7".split(" ").map(Number);



// function sai(num){
//     let a=0;
//     let b=1;
//     for(let i=1;i<num;i++){
//         console.log(a);
//         var c=a+b;
//         a=b;
//         b=c;
//     }
//     return a

// }


// prime=0;
// while(true){
//     if(!user.includes(prime)){
//         console.log(prime);
        
//     }
//     prime++
    
// }


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