// ⁠Write a program to determine the discount on a product based on the quantity purchased:
//     - 1-5 units: No discount
//     - 6-10 units: 5% discount
//     - 11-20 units: 10% discount
//     - Above 20 units: 15% discount

let a="";
if(a<5&& a>1){
    console.log("no discount");
    
}
else if(a<10&&a>6){
    console.log("5 discount");
    
}
else if(a<20&&a>11){
    console.log("10 discount");
    
}
else{
    console.log("15 discount");
    
}