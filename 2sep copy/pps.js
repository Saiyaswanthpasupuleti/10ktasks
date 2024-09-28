// Practice Work:

// 1)WAP to print  the sum of outer layers in the matrix

// 2 3 4
// 3 4 2
// 3 4 1


// 2+3+4+3+3+4+1+2 = ? (sum)




let rows=+prompt("enter no of rows : ");
let cols=+prompt("enter no of cols : ");
let matrix=[];
for(let i=1;i<=rows;i++){
    let x=[];
    for(let j=1;j<=cols;j++){
        let count=+prompt(`enter values ${i} & ${j} : `);
        x.push(count)
    }
    matrix.push(x);
}
let sum=0;
for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        if(i==0 ||i==rows-1 || j==0 || j==cols-1){
            sum=sum+matrix[i][j]
        }
    }
}
console.log(sum)


// 2) WAP to print the sum of diagonal elements in the matrix

// output: 2+4+1+4+4 (sum)


// let rows=+prompt("enter no of rows : ");
// let cols=+prompt("enter no of cols : ");
// let matrix=[];

// for(let i=1;i<=rows;i++){
//     let x=[];
//     for(let j=1;j<=cols;j++){
//         let z=+prompt(`enter the values ${i} & ${j} : `);
//         x.push(z)
//     }
//     matrix.push(x)
// }
// console.log(matrix)
// let sum=0;
// for(let i=0;i<matrix.length;i++){
//     for(j=0;j<matrix[i].length;j++){
//        if(i == j || i + j == rows-1){
//            sum+=matrix[i][j]
//        }
      
//     }
// }
// console.log(sum)



