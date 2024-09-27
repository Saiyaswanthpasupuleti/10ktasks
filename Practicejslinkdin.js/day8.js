// //find the midd elelement in an array

// let arr=[1,2,3]
// if(arr.length%2!=0){
//     let max=Math.floor(arr.length%2)
//     console.log(arr[max])
// }



// let arr=[1,2,3,4]
// if(arr.length%2==0){
//     let mid=Math.floor((arr.length/2))
//     console.log(arr[mid-1],arr[mid])
// }
// else{
//     console.log("the array length is odd")
// }


// let arr=[[1,2,3],[1,2,3,4],[1,2,3,4,5]];

// for(let i of arr){
//     if(i.length%2!=0){
//         let mid=Math.floor(i.length/2)
//         console.log(i[mid])
//     }
//     else{
//         let mids=Math.floor(i.length/2)
//         console.log(i[mids-1],i[mids])
//     }
// }



// let arr=[1,2,3,4,5,6,7,8,9,10]
// if(arr.length%2==0){
//     let mid=Math.floor(arr.length/2)
//     console.log(arr[mid-1],arr[mid])
// }



// let arr=[[2,3,1,2],[5,5,5],[7,88,2,1,7,1,7]]

// let dupCount=0
// for(let i of arr){
//    let emp=[]
//    for(let j of i){
//     if(!emp.includes(j)){
//         emp.push(j)
//     }
//    }

//    for(let a of emp){
//     c=0
//     for(let b of i){
//         if(a==b){
//             c++
//         }
//     }
//     if(c>1){
//         dupCount++
//     }
    
//    }
  

// }
// console.log(dupCount)



// let arr=[[2,3,1,2],[5,5,5],[7,88,2,1,7,1]]
// let uniqCount=0;
// for(let i of arr){
//     let emp=[]
//     for(let j of i){
//         if(!emp.includes(j)){
//             emp.push(j)
//         }
//     }
//     for(let a of emp){
//         c=0
//         for(let b of i){
//             if(a!=b){
//                 c++
//             }
//         }
//         if(c>1){
//             uniqCount++
//         }
//     }
// }
// console.log(uniqCount)


// let arr=[1,2,3,4,5,6,6,3,1,2,1]
// let sort=[...new Set([...arr])]
// let res=""
// for(let i=0;i<=sort.length-1;i++){
//     let c=1
//     for(let j=i+1;j<=arr.length-1;j++){
//         if(arr[i]===arr[j]){
//             c++
//         }
//     }
    
 

//   res+=c+" "

// }
// console.log(sort,"=>",res)




//chcecking unique count in each array 

// let arr=[[2,3,1,2],[5,5,5],[1,2,3],[1,2,4]]
// let uniqCount=0;
// for(let i of arr){
//     let emp=[]
//     for(let j of i){
//         if(!emp.includes(j)){
//             emp.push(j)
//         }
//     }
//     uniqCount+=emp.length

// }
// console.log(uniqCount)





// let arr=[1,2,3,2,1,4,3,2,1,1,3,1,5,6,4,3,6]
// let sort=[...new Set([...arr])]
// let res=""
// for(let i=0;i<sort.length;i++){
//     let count=0;
//     for(let j=0;j<arr.length;j++){
//         if(sort[i]==arr[j]){
//             count++
//         }
//     }
   
//         res+=count+" "
    
// }
// console.log(sort,"=>",res)
// //Output : [ 1, 2, 3, 4, 5, 6 ] => 5 3 4 2 1 2 




// let arr=[[2,3,1,3],[5,5,5],[7,88,2,7,1,7]]
// let unicount=0;

// for(let i of arr){
    
//     let emp=[]
//     for(let j of i){
//         if(!emp.includes(j)){
//             emp.push(j)
//         }
       
//     }
//     for(let a of emp){
//         let c=0
//         for(let b of i){
//             if(a===b){
//                 c++
//             }
//         }
//         if(c===1){
//             unicount++
//         }
//     }
    
// }
// console.log(unicount)


// let arr=[1,2,4,5,3,1,3,4,2,1,4,2]
// let sort=[...new Set([...arr])]
// let count=[]
// for(let i=0;i<sort.length;i++){
//     let c=0;
//     for(let j=0;j<arr.length;j++){
//         if(sort[i]==arr[j]){
//             c++
//         }
//     }
//     if(c>0){
//         count.push(c)
//     }
// }
// for(let i=0;i<=sort.length-1;i++){
//     console.log(sort[i],"=>",count[i])
// }

//Output : 1 => 3
// 2 => 3
// 4 => 3
// 5 => 1
// 3 => 2



// let arr=[1,2,8,0,9,3,5,2,4,2,5,3,6,9]
// let GivenNumber=9;

// for(let i=0;i<=arr.length-1;i++){
//     for(let j=i+1;j<=arr.length-1;j++){
//         if(arr[i]+arr[j]==GivenNumber){
//             console.log(`${arr[i]}+${arr[j]}=${GivenNumber}`)
//         }
//     }
// }
// //Output : 
// // 1+8=9
// // 0+9=9
// // 0+9=9
// // 3+6=9
// // 5+4=9
// // 4+5=9
// // 3+6=9





// Write a function that checks if the elements of an array form a palindrome.

// function palindrome(a){
//     let emp=[]
//     for(let i=a.length-1;i>=0;i--){
//         emp.push(a[i])
//     }
//     if(a==emp){
//         console.log("p");
        
//     }
//     let string1=a.toString()
//     let string2=emp.toString()
//     if(string1==string2){
//         console.log("It is Palindrome")
//     }
//     else{
//         console.log("it is not a Palindrome")
//     }
// }
// let array=[1,0,1]
// palindrome(array)

// //Output : It is Palindrome




// let arr=[1,2,3,1,3,1,3,5,7,4,2]

// let unique=[]
// let sum=0
// for(let i of arr){
//     if(!unique.includes(i)){
//         unique.push(i)
//     }
// }
// for(let j of unique){
//     sum+=j
// }
// console.log("The Sum of Unique Elements is :",sum,unique)


let arr=[1,2,4,3,4,3,2,1]
let dup=[]
for(let i of arr){
    if(!dup.includes(i)){
        dup.push(i)
    }
}

let sum=0;
DuplicateElements=""
for(let i of dup){
    let count=0;
    for(let j of arr){
        if(i==j){
            count++
            
        }

    }
   if(count>1){
    DuplicateElements+=i+" "
    sum+=i
    
   }
   

}
console.log("Duplicate Elements are :",DuplicateElements);
console.log("The sum of Duplicate Element is :",sum)
