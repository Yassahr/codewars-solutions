// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

// Examples
// [1, 2, 3] returns 6 because the maximum product is obtained from multiplying 
//  2∗3=6
// [9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying 

//  5∗10=50
// [-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying 
//  −2∗7=−14
function adjacentElementsProduct(array) {
    //create and empty array for pushing
    let products=[];
    //create incrementation
    let i = 0;
    //go through array
    while(i<array.length-1){
      //add the product of adacent numbers
      products.push(array[i]*array[i+1])
      i++
    }
    //return the max for that array
    console.log(products)
    return Math.max(...products)
  }