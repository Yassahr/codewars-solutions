// Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .
function tidyNumber(n){
    let ascend = String(n).split('').sort((a,b)=> a>b?1:-1).join('')
    return n === parseInt(ascend)
  }