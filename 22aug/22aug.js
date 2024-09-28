
/*---------------------------------------------------------------------------------------------------------------------- */
// 1.⁠ ⁠Double the numbers in an array: [1, 2, 3, 4, 5] → [2, 4, 6, 8, 10]

// let a=[1, 2, 3, 4, 5];
// let b=a.map((a)=>{return a*2;})
// console.log(b)


// 2.⁠ ⁠Convert strings to uppercase: ["hello", "world"] → ["HELLO", "WORLD"]
// let a=["hello", "world"];
// let b=a.map((c)=>{
//     let b=c.toString();
//     return b.toUpperCase()
    
// })
// console.log(b)

/*---------------------------------------------------------------------------------------------------------------------- */






// Filter
// 1.⁠ ⁠Get even numbers from an array: [1, 2, 3, 4, 5] → [2, 4]
// 2.⁠ ⁠Get strings longer than 5 characters: ["hello", "world", "abc"] → ["hello", "world"]


// let a=[1, 2, 3, 4, 5];
// let b=a.filter((a)=>{
//     return a%2==0;
// })
// console.log(b)





// let a=["hello", "world", "abc"];
// let b=a.filter((a)=>{
//     let d=a.toString();
//     return d.length>=5
// })
// console.log(b)

/*----------------------------------------------------------------------------------------------------------------------





// ForEach
// 1.⁠ ⁠Log each number in an array: [1, 2, 3, 4, 5] → console logs each number
// 2.⁠ ⁠Append "!" to each string in an array: ["hello", "world"] → ["hello!", "world!"]

//
/** */


// let a=[1, 2, 3, 4, 5];
// let b=a.forEach((a)=>{
//     console.log(a)
// })



// let a= ["hello", "world"];
// let b=a.forEach((a)=>{
//     let d=[a]+ "!";;
//     let e=d.split(" ")
//     console.log(e);
    
   

// })

// let a= ["hello", "world"];
// let b=a.forEach((a)=>{
//     let d=a+"!"
//     console.log(d)
// })


/*----------------------------------------------------------------------------------------------------------------------*/




// Every
// 1.⁠ ⁠Check if all numbers in an array are positive: [1, 2, 3, 4, 5] → true
// 2.⁠ ⁠Check if all strings in an array are longer than 5 characters: ["hello", "world", "abc"] → false

// let a= [1, 2, 3, 4, 5];
// let b=a.every((a)=>{
//     return a>0
// })
// console.log(b)

// 2.⁠ ⁠Check if all strings in an array are longer than 5 characters: ["hello", "world", "abc"] → false


// let a=["hello", "world", "abc"];
// let b=a.every((a,b,c)=>{
//     return a.length>=5;
// })
// console.log(b)


/*----------------------------------------------------------------------------------------------------------------------*/


// Some
// 1.⁠ ⁠Check if any number in an array is even: [1, 2, 3, 4, 5] → true
// 2.⁠ ⁠Check if any string in an array contains "x": ["hello", "world", "max"] → true


// let a=[1, 2, 3, 4, 5];
// let b=a.some((a)=>{
//     return a%2==0;
// })
// console.log(b)

// let a=["hello", "world", "max"];
// let b=a.some((a)=>{
//     let d=a.toString();
//     let e=d.includes("x");
//     return e;
// })
// console.log(b)

/*----------------------------------------------------------------------------------------------------------------------*/


// Find
// 1.⁠ ⁠Find the first even number in an array: [1, 2, 3, 4, 5] → 2
// 2.⁠ ⁠Find the first string in an array that contains "x": ["hello", "world", "max"] → "max"

// let a=[1, 2, 3, 4, 5];
// let b=a.find((a)=>{
//     return a%2==0
// })
// console.log(b)

// let a=["hello", "world", "max"];
// let b=a.find((a)=>{
//     let d=a.toString();
//     let e=d.includes("x");
//     return e;
// })
// console.log(b)


/*----------------------------------------------------------------------------------------------------------------------*/

// FindIndex
// 1.⁠ ⁠Find the index of the first even number in an array: [1, 2, 3, 4, 5] → 1
// 2.⁠ ⁠Find the index of the first string in an array that contains "x": ["hello", "world", "max"] → 2

// let a=[1, 2, 3, 4, 5];
// let b=a.findIndex((a)=>{
//     return a%2==0;
// })
// console.log(b)


// let a= ["hello", "world", "max"];
// let b=a.findIndex((a)=>{
//     let d=a.toString();
//     let e=d.includes("x");
//     return e;
// })

// console.log(b)


/*----------------------------------------------------------------------------------------------------------------------*/
