// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
function persistence(num, counter=0) {
    num = num.toString();
    if(num.length == 1){
      return counter
    }else{
      num = +num.toString().split('').reduce((acc, n)=> acc*n,1)
      counter++
      return persistence(num, counter++)  
    }
    
  }