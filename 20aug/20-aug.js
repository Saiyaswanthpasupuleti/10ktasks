// let user=20;
// let a=0;
// let b=1;
// let nonfib=0;
// let res=" "
// while(nonfib<user){
//     for(let i=a+1;i<b;i++){
//         res=res+i+" "
       
//         nonfib++;
//         if(nonfib==user){
//             break;
//         }
//     }
   
//     c=a+b;
//     a=b;
//     b=c
// }
// console.log(res);



// 1) WAP to print the non fib numbers by using while loop.

// Input: Enter a number: 5

// Output: 4 6 7 9 10


// let user=5;
// let a=0;
// let b=1;
// let nonfib=0;
// let res="";

// while(nonfib<user){
//     for(let i=a+1;i<b;i++){
//         res=res+i+" "
        
//         nonfib++
//     if(nonfib==user){
//         break;
//     }
// }

//     var c=a+b;
//     a=b;
//     b=c;
// }
// console.log(res);






// 2) WAP to print nth non-fib number.

// Input: Enter a number: 10
// Output: 16


// let user=10;
// let a=0;
// let b=1;
// let nonfib=0;
// let res;
// while(nonfib<user){
//     for(let i=a+1;i<b;i++){
//         res=i
//         nonfib++;
//         if(nonfib==user){
//             break;
//         }
//     }
//     var c=a+b;
//     a=b;
//     b=c
// }
// console.log(res);



// 3) WAP to print the below series based on the input
// input: Enter a number: 13
// output: 4 6 7 9 10 11 12.


let user=13;
let a=0;
let b=1;
let nonfib=0;
let res="";
while(nonfib<user){
    for(let i=a+1;i<b;i++){
        if(i<user){
        res+=i+" "

        }
        nonfib++
       
        if(nonfib==user){
            break
        }
    
    }
    var c=a+b;
    a=b;
    b=c;
}
console.log(res)


