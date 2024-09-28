// Use Object.keys() and Object.values() to create a new object with only the keys and values that meet a certain condition.
// Example:
// const obj = { a: 1, b: 2, c: 3, d: 4 };

// const obj={};
// Object.keys(obj.a=1);
// Object.keys(obj.b=2);
// Object.keys(obj.c=3);
// Object.keys(obj.d=4);
// console.log(obj);




// 2:
// Use Object.assign() to merge two objects and create a new object with the combined properties.
// Example:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// // Create a new object with the com

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3= Object.assign(obj1,obj2);
// console.log(obj3);





// 3:
// Use Array.reduce() to sum up the values of an object's properties.
// Example:
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// // Sum up the values of obj's properties using reduce();
// // Output: 10


// const obj = { a: 1, b: 2, c: 3, d: 4 };
// let b=Object.values(obj);
// let c=b.reduce((a,b)=>{
//     return a+b
// })
// console.log(c);



// 4. scenario explained for array of objects using hasownproperty.

// let us take an example :

// let a={
//     name:"yaswanth",
//     age:21,
//     place:"India"
// }
// //here by using hasown property we can check the keys that are included in our object or not ;
// console.log(a.hasOwnProperty("age"))