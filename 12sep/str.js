// input: hello world

// output:

// d - 1
// e - 1
// H - 1
// l - 3
// o - 2
// r - 1
// W - 1

// let user="Hello World".split("")
// let emp=""
// for(let i of user){

//     if(!emp.includes(i) &&i!==" "){
//         emp+=i  

//     }

    
// }


// for(let i of emp){
//     c=0;
//     for(let j of user){
//         if(i==j){
//             c++
            
//         }
//     }
//     console.log(i,c);
  
    
// }

// Problem statement: “Given two strings text and pattern find the first occurrence of str1 in str2 if found print it’s index if not found print -1.”

// Examples:

// Example 1:
// Input: str1 = "takeuforward"
//        str2 = “forward”
// Output: 5



// let str1="takeuforward";
// let str2="forward";
// let res=str1.indexOf(str2);
// console.log(res);




// Problem Statement: Given a string, return the character that occurs the maximum number of times in the string. If the maximum occurrence of two or more characters is the same, return any one of them. 

// Examples:

// Example 1:
// Input: str = “takeuforward”
// Output: a
// Explanation: The character 'a' and 'r’ have the same  maximum occurrence i.e 2. Hence we can print any one of them

let str1="takeuforward"
let emp=""
let obj={}
for(let i of str1){
    if(!emp.includes(i)){
        emp+=i
    }
}

for(let i of emp){
    var c=0;
    for(let j of str1){
        if(i==j){
            c++
        }
        
    }

    obj[i]=c
   
}
for(let keys of obj){
    console.log(keys);
    
}
