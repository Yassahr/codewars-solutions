// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
//array of numbers, will they every be float/big int, will they even be in string form, empty array or an array with value> 2, will any of the elements ever be empty 
//id duplicate-> boolean in string form
//if a num appears more that 2 times then would that meet the criteria to pass?


//3 possible solutions
//new Set- comparing length 
//hashmap
//array method, every last index=lastIndex

function duplicateNums(array){
    return new Set(array).size == array.length? false: true;
   }
   console.log(duplicateNums([1,2,3,1]))