// let a=[1,2,3,4,5]
// let b=[1,21,21,2,3,4,5,9,6,7,0,7,8,2,5,4]
// let c=0
// for(let i of a){
   
//     for(let j of b){
//         if(i==j){
//             c++
//         }
//     }
  
// }
// if(a.length==c){
//     console.log("it is a subset of a")
// }
// else{
//     console.log("it is not a subset of a")
// }



// function isSubset(arr1,arr2){
//     for(let i of arr1){
        
//         if(!arr2.includes(i)){
//         return  `arr1 is a subset of arr2`
//         }
        
//         return `it is a subset of arr2`

//     }

// }
// let a=[1,2,3,4,5]
// let b=[1,21,21,2,3,4,5,9,6,7,0,7,8,2,5,4]
// console.log(isSubset(a,b))



// let arr=[[1,2],[2,1],[3,4],[5,6],[4,3]]
// let paris=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
       
//         arr[i].sort((a,b)=> a-b)
//         arr[j].sort((a,b)=> a-b)
        
//         let c=0;
//         for(let k=0;k<arr[i].length;k++){
//             if(arr[i][k]==arr[j][k]){
//                 c++
//             }
//         }
//         if(arr[i].length==c && arr[j].length==c){
//             paris.push(arr[j])
//             break
//         }
//     }


// }
// console.log(paris)


// let arr=[[1,2],[2,1],[3,4],[5,6],[4,3],[6,5]]
// let pairs=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){

//        arr[i].sort((a,b)=>a-b)
//        arr[j].sort((a,b)=>a-b)
       
//        let c=0;
//        for(let k=0;k<arr[i].length;k++){
//         if(arr[i][k]==arr[j][k]){
//             c++
//         }
//        }
//        if(arr[i].length==c && arr[j].length==c){
//         pairs.push(arr[j])
//        }
//     }
// }
// console.log(pairs)\\\



// let arr=[[1,2],[2,1],[3,4],[5,6],[4,3],[6,5],[8,3]]
// let pairs=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){

//        arr[i].sort((a,b)=>a-b)
//        arr[j].sort((a,b)=>a-b)
//        let c=0;
//        for(let k=0;k<arr[j].length;k++){
//         if(arr[i][k]==arr[j][k]){
//             c++
//         }
    
//        if(arr[i].length==c && arr[j].length==c){
//         pairs.push(arr[j])
     
//        }
//     }
    
//     }
// }

// console.log(pairs)

// //Output : [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]


// let arr=[[1,2],[1,2],[3,4],[5,6],[3,4],[5,6],[8,3]]
// let temp=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
        
//         arr[i].sort((a,b)=>a-b)
//         arr[j].sort((a,b)=>a-b)
//         let c=0
//         for(let k=0;k<arr[j].length;k++){
            
//             if(arr[i][k]!=arr[j][k]){
//                 c++
//             }

//         }
        
//         if(c==1){
//             temp.push(arr[j])
//         }
        
//     }

// }
// console.log(temp)


// let arr=[2,3,5,3,7,9,4,9]
// let Prime=[]
// let NonPrime=[]
// for(let i=1;i<=arr.length-1;i++){
//     if(i>1){
//         var prime=true
//         for(let j=2;j<i;j++){
        
//             if(i%j==0){
//                 NonPrime.push(i)
//                 prime=false
//                 break
//             }

//         }
//         if(prime==true){
//             Prime.push(i)
//         }
//     }
// }
// console.log("Non Prime Number are : ",NonPrime)
// console.log("Prime Number are : ",Prime)

// let arr=[9,8,6,5,2,4,1,10,22,43,54,64,2,5]
// let even=[]
// let odd=[]
// let allNum=[]
// for(let i of arr){
//     if(i%2==0){
//         even.push(i)
//     }
//     else{
//         odd.push(i)
//     }
// }
// even.sort((a,b)=>a-b)
// odd.sort((a,b)=>a-b)
// for(let j of even){
//     allNum.push(j)
// }
// for(let k of odd){
//     allNum.push(k)
// }
// console.log(allNum)
// /*Output : [
//    2,  2,  4, 6, 8, 10,
//    22, 54, 64, 1, 5,  5,
//     9, 43
//  ]
//  */




// let arr1=[10,1,2,3,4,5]
// let b=[2,3,4,6]
// let MainArray=[]
// for(let i of arr1){
//     if(!MainArray.includes(i)){
//         MainArray.push(i)
//     }
// }
// for(let j of b){
//     if(!MainArray.includes(j)){
//         MainArray.push(j)
//     }
// }
// console.log(MainArray.sort((a,b)=>a-b))
// /*Output : [
//   1, 2,  3, 4,
//   5, 6, 10
// ]
// */


// let rows=+prompt("Enter No of rows :")
// let cols=+prompt("Enter No of cols :")
// let MainMAtrix=[]
// for(let i=1;i<=rows;i++){
//     let Matrix=[]
//     for(let j=1;j<=cols;j++){
//         let Inside=+prompt(`Enter ${i} and ${j} Num : `)
//         Matrix.push(Inside)
//     }
//     MainMAtrix.push(Matrix)
// }
// for(let i of MainMAtrix){
//     console.log(i.join(" "))
// }




// let rows=+prompt("Enter Rows :")
// let cols=+prompt("Enter Cols :")
// let MainMatrix=[]
// for(let i=1;i<=rows;i++){
//     let matrix=[]
//     for(let j=1;j<=cols;j++){
//         let input=+prompt(`Enter ${i} And ${j} Number :`);
//         matrix.push(input)
//     }
//     MainMatrix.push(matrix)
// }
// console.log(MainMatrix)
// for(let i=0;i<rows;i++){
//     str=""
//     for(let j=0;j<cols;j++){
//         str+=MainMatrix[j][i]+" "
//     }
//     console.log(str)
// }
// /*Output :
// 1 1 1 
// 2 2 2 
// 3 3 3 
// */


// let a=1;
// let b=2;
// [a,b]=[b,a]
// console.log(a,b)

// let a = 1; // Declare a
// let b = 2; // Declare b

// [a, b] = [b, a]; // Swap using destructuring
// console.log(a, b); // Outputs: 2 1


// let a=[1,2,3,4,5,"a","B","c"]
// let Numbers=[]
// for(let i of a){
//     if(!((i>="a"&&i<="z") || (i>="A"&& i<="Z"))){
//         Numbers.push(i)
//     }
    
// }
// console.log(Numbers)


// Create Function that will take one parameter and return type of the data.

// Input: 500
// Output: Integer
// Input: Coding
// Output: String

// function Datatype(q){
//     return typeof(q)
// }
// console.log(Datatype("Abcd"))
// //Output : string