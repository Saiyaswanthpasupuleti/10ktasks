// let user=112234535;
// let q=user.toString();
// let a=q.split("").map(Number)
// let b=[];
// let uniq="";
// let dup="";
// for(let i of a){
//     if(!b.includes(i)){
//         b.push(i);
//     }
// }
// for(let x of b){
//     var count=0;
//     for(let y of a){
//         if(x==y){
//             count++
//         }
//     }
//     if(count==1){
//         uniq+=x+" "
//     }
//     else{
//         dup+=x+" "
//     }
// }
// if(uniq.length==2){
//     console.log("Unique is",uniq);
    
// }
// else{
//     console.log("Unique are",uniq);
// }
// if(dup.length==2){
//     console.log("duplicTE is",dup);
// }
// else{
//     console.log("duplicTE are",dup);
// }

let user=2788;
let q=user.toString();
let a=q.split("").map(Number);
let b=[];
let uniq="";
let dup="";
for(let i of a){
    if(!b.includes(i)){
        b.push(i);
    }
}
for(let x of b){
    var count=0;
    for(let y of a){
        if(x==y){
            count++;
        } 
    }
    if(count==1){
        uniq+=x+" "
    }
    else{
        dup+=x+""
    }
    console.log(`${x}=>${count}`)
}

