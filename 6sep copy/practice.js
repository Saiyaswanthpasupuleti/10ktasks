let arr=[1,2,3,-1,4,5];

let c=0
for(let i=0;i<=arr.length-1;i++){
   
    if(arr[i]<arr[i+1]){
        c++
    }

 
}
if(c==arr.length-1){
    console.log("it is in increasing order");
    
}
else{
    console.log("it is in decreasing order");
    
}