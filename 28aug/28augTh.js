
//------------------------------------------------------------------

// Task 4: Get Number of Days Between Dates

// - Input: Two date strings (e.g., "2024-08-28", "2024-09-01")
// - Output: Number of days between dates (e.g., 4)


// let a=new Date("2024-08-28");
// let b=new Date("2024-09-01");
// let c=a-b;
// let d=Math.abs(c/(1000*60*60*24));
// console.log(d);



//------------------------------------------------------------------

// Task 3: Format Date as MM/DD/YYYY

// - Input: Date string (e.g., "2024-08-28")
// - Output: Formatted date string (e.g., "08/28/2024")


// let a=new Date("2024-08-28");
// let b=a.toLocaleDateString();
// console.log(b);



//------------------------------------------------------------------

// Task 2: Add Days to Date

// - Input: Date string (e.g., "2024-08-28"), number of days to add (e.g., 3)
// - Output: New date string (e.g., "2024-08-31")


// let a=new Date("2024-08-28");
// let b=a.getDate();
// let days=3;
// let c=a.setDate(b+days);
// console.log(a);




//------------------------------------------------------------------


// Task 1: Get Current Date and Time

// - Input: None
// - Output: Current date and time (e.g., "2024-08-28T14:30:00.000Z")


let a=new Date();
let b=["sun","mon","tue","wed","thur","fri","sat"];
let c=a.getDay();
console.log(b[c])
