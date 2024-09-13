
// Problem statement: “Given two strings text and pattern find the first occurrence of str1 in str2 if found print it’s index if not found print -1.”

// Examples:

// Example 1:
// Input: str1 = "takeuforward"
//        str2 = “forward”
// Output: 5


// let a="takeuforward";
// let b="forward";
// let c=a.indexOf(b);
// console.log(c)





// maximum number of times in the string. If the maximum occurrence of two or more characters is the same, return any one of them. 

// Examples:

// Example 1:
// Input: str = “takeuforward”
// Output: a
// Explanation: The character 'a' and 'r’ have the same  maximum occurrence i.e 2. Hence we can print any one of them



// let a="takeuforward".split("")
// let emp="";
// for(let i of a){
//     if(!emp.includes(i)){
//         emp+=i
//     }
// }
// let obj={}
// for(let i of emp){
//     let c=0;
//     for(let j of a){
//         if(i==j){
//             c++
//         }

//     }
//     obj[i]=c
// }

// let length = 0;
// let maxchar ="";

// for(let key in obj){
   
//   if(obj[key]>length){
//     length=obj[key];
//     maxchar=key
//   }
// }

// console.log(maxchar)













// input: Hello World

// output:

// d - 1
// e - 1
// H - 1
// // l - 3
// // o - 2
// // r - 1
// // W - 1
// let x="Hello World".split("")
// let z=x.sort((a,b)=>a.localeCompare(b)).join("")
// let q="";
// for(let i of z){
//     if(!q.includes(i)){
//         q+=i
//     }
// }
// let a=z.replace(" ","");
// let emp=q.replace(" ","")
// let obj={}
// for(let i of emp){
//     let c=0
//     let res=""

//  for(let j of a){
    
//     if(i==j){
//         c++
//     }
//     obj[i]=c
   
//  }


// }

// for(let keys in obj){
//     console.log(keys,obj[keys])
// }