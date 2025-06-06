// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.
function isVow(a){
    let vowels = [ 97, 101, 105, 111, 117]
    return a.map((n,i)=> vowels.includes(n)? String.fromCodePoint(n): n) 
    }