function findUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const union = findUnion(array1, array2);
console.log(union);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]

function arr(a,b){
    return [...new Set([...a,...b])]
}
const a= [1, 2, 3, 4, 5]
const b=[4, 5, 6, 7, 8];
