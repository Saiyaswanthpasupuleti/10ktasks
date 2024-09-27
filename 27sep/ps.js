// let obj={ a: 1, b: 2 }
// let arr=[]
// for(let i in obj){
//     values=i
//     keys=obj[i]
//     arr.push(values,keys)
// }
// console.log([arr])


// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples :

// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// function func(num, length){

    
//     let emp=[]
//     for(let i=1;i<=length;i++){
     
//         var x=num*i
    
//         emp.push(x)
//     }
//     console.log(emp)
   
   
  

// }
// func(12,10)










// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples :

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600



// let getBudgets=([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 },
// ])

// let sum=0;
// for(let i of getBudgets){
//     sum+=i.budget
// }
// console.log(sum)






// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If a student has no notes (an empty array) then let's assume avgNote: 0.
// 	Example :

// [
//   { name: "John", notes: [3, 5, 4]}
// ] ➞ [
//   { name: "John", avgNote: 4 }
// ]




// let a={ "name": "John", 
//     "notes": [3, 5, 4]
// } 
// let emptyObj={}
// for(let i in a){
//     values=i
//     keys=a[i]
//     emptyObj[values]=keys
    

// }
// console.log(emptyObj)



// Create a function that moves all capital letters to the front of a word.
// 	Examples :

// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"


// let a="hApPy"
// let capital=""
// let lowe=""
// for(let i of a){
//     if(i>="A" && i<="Z"){
//         capital+=i
//     }
//     else{
//         lowe+=i
//     }
// }
// console.log(capital+lowe)





// Count each occurrence of number(can not use predefined function).

// 			Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// 			Output: 1 present 2 times.
// 				   2 present 1 times.
// 				   3 present 2 times.
// 				   5 present 1 times …….  Etc


// let arr=[1,6,3,1,5,9,7,2,1,9,3,7,8,9,10];

// let counted={}
// for(let i=0;i<=arr.length-1;i++){

//     let Count=1
//     if (counted[arr[i]] !== undefined) {
//         continue; 
//     }

//     for(let j=i+1;j<=arr.length-1;j++){
//         if(arr[i]==arr[j]){
//             Count++
//         }
    
        
//     }
// counted[arr[i]]=Count
// }
// for(let key in counted){
//     console.log(key,counted[key])
// }





// Write a function that accepts an array of strings. Return the longest string(can not use predefined function).

// 		Input: [‘nik’, ’mikhil’, ’Cow’,’Elephant’] 							Output: Elephant


// let a= ["nik", "mikhil", "Cow","Elephant"]
// let max=""
// for(let i=0;i<=a.length-1;i++){
//     if(a[i].length>max.length){
//         max=a[i]
//     }
// }
// console.log(max)






// let arr=[1,2,3,4,5,3,2,41,22,3,2,4,21,3,2]

// let obj={}
// for(let i=0;i<=arr.length-1;i++){
//     let count=0
//     for(let j=i+1;j<=arr.length-1;j++){
      
//         if(arr[i]===arr[j]){
//             count++
//         }
  
        
//     }
// obj[arr[i]]=count
//    if(count>0){
//     console.log(count)
//    }
  

// }
// console.log(Object.keys(obj))




// let arr=[[2,3,1,2],[5,5,5],[7,88,2,1,7,1,7],[1,2]]
// let cont=0
// for(let i of arr){
//     let emp=[]
//    for(let j of i){
//     if(!emp.includes(j)){
//         emp.push(j)
//     }
    
//    }
//    if(emp.length!=i.length){
//     cont++
//    }
// }
// console.log(cont);


