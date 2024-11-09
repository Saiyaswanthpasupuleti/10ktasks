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

// console.log(cout)\


//Palindrom numbers 


// let num="121"
// let res=""
// for(let i=num.length-1;i>=0;i--){
//     res+=num[i]
// }
// // console.log(res)
// if(num==res){
//     console.log("it is a palidrome")
// }
// else{
//     console.log("it is not a palindrome")
// }



//Fibonoci numbers 
// let num=5;
// let a=0;
// let b=1;
// let res=""
// for(let i=0;i<=num;i++){
//     res+=a
//     var c=a+b;
//     a=b;
//     b=c

// }
// console.log(res[num])

// 




//Missinf numbers 

// let arr=[0,1,2,3,4,5,6,7,9]
// let x=arr.length
// let missing=[]
// for(let i=0;i<=x;i++){
//     if(!arr.includes(i)){
//         missing.push(i)
//     }
// }
// console.log(missing)



// var countOdds = function(low, high) {
//     let res=[]
//     for(let i=low;i<=high;i++){
//         if(!(i%2==0)){
//             res.push(i)
//         }
//     }
//     return res.length
    
// };
// console.log(countOdds(3,7))