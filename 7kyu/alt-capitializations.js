// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!


//My Solution
function capitalize(s){
    let even = s.split('').map((n, i)=> (i%2===0) ?n.toUpperCase(): n).join('')
    let odd = s.split('').map((n, i)=> (i%2===0) ?n:n.toUpperCase()).join('')
        return [even, odd]
   };