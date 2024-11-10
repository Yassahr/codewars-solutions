// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.


function deepCount(a){
    console.log([[[[[[]]]]]].length)
     //interate through array 
     //establish count 
     //add length to count
     //conditonal if element == array do deepCount
      console.log(a)
     let count=0;
     a.forEach((n,i,s)=>{
       if(a.length==0){
         return count
       }
       count+=a.length
      console.log(count)
       if(Array.isArray(n)){
          count++;
        return deepCount(n)
       }
     })
     return count
   }
