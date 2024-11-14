// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.
function getLengthOfMissingArray(arrayOfArrays) {
    console.log(arrayOfArrays)
 if (arrayOfArrays.length>=0 && arrayOfArrays.every(n=> n.length>0) ){
     let max =Math.max(...arrayOfArrays.map(n=>n.length));
     let min =Math.min(...arrayOfArrays.map(n=>n.length));
     for(let i=min; i<max; i++)
       if(!arrayOfArrays.map(n=>n.length).includes(i))
         return i;   
     }else{
       return 0
     }
    }