//Sum of all Natural Numbers :


// function sum(n){
//     let res=0;
//     for(let i=1;i<=n;i++){
//         res=res+i
//     }
//     return res;

// }
// console.log(sum(10))




//Or u can use the formula n*(n+1)/2


//----------------------------------------------------------------

//Sum of natural numbers : 

// function sum(n){
//     let y=0;
//     let x=n.toString().split("")
//     for(let i of x){
//         y+=Number(i)
//     }
//     return y

// }
// console.log(sum(123))
//----------------------------------------------------------------

//No of digits 


// function a(n) {
//     let x = Math.abs(n); // Get the absolute value of n
//     let count = 0;
//     do {
//         count++; // Increment the count
//         x = Math.floor(x / 10); // Reduce x by one digit
//     } while (x > 0); // Continue while x is greater than 0
//     return count; // Return the number of digits
// }

// console.log(a(-34252)); // Outputs the number of digits in 34251

// let num=123
// let cout=0;
// let x=num.toString().split("")
// for(let i of x){
//     if(!isNaN(Number(i))){
//         cout++
//     }
// }
// console.log(cout)