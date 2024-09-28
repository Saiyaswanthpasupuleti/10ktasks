
// input:

// 1 2 3
// 4 5 3
// 2 5 3




// output:
// 1) Print the diagonal elements side by side:
// Diagonal elements are: 1 5 3 3 5 2


// let rows=+prompt("Enter no of rows : ");
// let cols=+prompt("enter no of cols : ");
// let c1=Math.floor(rows/2)
// let c2=Math.floor(cols/2)
// let matrix=[];
// for(let i=1;i<=rows;i++){
//     let x=[];
//     for(let j=1;j<=cols;j++){
//         let z=+prompt(`enter values ${i} & ${j} is : `);
//         x.push(z)
//     }
//     matrix.push(x)
// }
// console.log(matrix)
// let res="";
// for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[i].length;j++){
//         if(i==j || i+j==rows-1 ){
//             res=res+matrix[i][j]+" "
//         }
//         if(i==c1&&j==c2){
//              res=res+matrix[i][j]+" "
//         }
       
//     }
// }
// console.log(res)














// // input:

// // 1 2 3
// // 4 5 3
// // 2 5 3

// let rows=+prompt("enter no of rows : ");
// let cols=+prompt("enter no of cols : ");
// let matrix=[];
// for(let i=1;i<=rows;i++){
//     let x=[];
//     for(let j=1;j<=cols;j++){
//         let q=+prompt(`enter values ${i} & ${j} is `)
//         x.push(q)
//     }
//     matrix.push(x)
// }

// let res="";
// for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[i].length;j++){
//         if(i==0 || i==rows-1 || j==0 || j==cols-1){
//             res+=matrix[i][j]+" "
//         }
//     }
// }
// console.log(res)















// // // input:

// // 1 2 3
// // 4 5 3
// // 2 5 3

// // 2) Print the Outer layer elements side by side

// // Outer layer elements: 1 2 3 4 3 2 5 3


// let rows =+prompt("enter no of rows : ");
// let cols=+prompt("enter no of cols : ");
// let matrix=[];
// for(let i=1;i<=rows;i++){
//     let x=[];
//     for(let j=1;j<=cols;j++){
//         let z=+prompt(`enter values ${i} & ${j} is `);
//         x.push(z);
//     }
//     matrix.push(x)
// }
// let res="";
// for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[i].length;j++){
//         if(i==0|| i==rows-1 || j==0 || j==cols-1){
//           res+=matrix[i][j]+" "
//         }
//     }

// }
// console.log(res)






// Test Case2:
// Input: Nums = [1,2,-3,0,-4,-5]
// Output: 20
// Explanation: In the given array, we can see (-4)×(-5) gives maximum product value.
let num=[1,2,-3,0,-4,-5];
let x=num.slice(4)
let z=Number(x[0])*Number(x[1])
console.log(z);
