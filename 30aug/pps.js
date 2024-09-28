// Practice work:
// WAP to print number of pairs formed by the array of numbers

// input: 10 20 10 30 20 20

// output: 2

// input: 30 50 30 50 20 50 50 20 50 50 50
// pairs: 5


// Deadline: Complete as soon as possible

let a="30 50 30 50 20 50 50 20 50 50 50".split(" ").map(Number);
let b=a;
let counter={};
for(let i of a){
    let c=0;
    for(let j of b){
        if(i==j){
            c++
        }

    }
    counter[i]=c
}
let pair=0;
for(let q of Object.values(counter)){
    pair+=Math.floor(q/2);
}
console.log(pair)
