
// Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string.

// Examples:

// Example 1:
// Input: Str =  “ABCDCBA”
// Output: Palindrome
// Explanation: String when reversed is the same as string.

// Example 2:
// Input: Str = “TAKE U FORWARD”
// Output: Not Palindrome
// Explanation: String when reversed is not the same as string.






let user="TAKE U FORWARD";
res=""
for(let i=user.length-1;i>=0;i--){
    res+=user[i]
}
if(res==user){
    console.log("it is a palindrome")
}
else{
    console.log("it is not a palindrome")
}



// Problem Statement: Given a String, write a program to remove vowels from a given String.

// Examples:

// Example 1:
// Input: Str = “take u forward”
// Output: tk  frwrd
// Explanation: All vowels are removed from the given String.

// Example 2:
// Input: Str = “I am very happy today”
// Output:  m vry happy tdy
// Explanation: All vowels are removed from the given String.


// let user="I am very happy today"
// let vowels="aeiouAEIOU";
// let str=""
// for(let i of user){
//    if(vowels.includes(i)){
//     continue
//    }
//    else{
//     str+=i
//    }
// }
// console.log(str)







