// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial
function factorial(n){
    let factors =[];
    for(let i=n;i>0; i--){
      factors.push(i)
    }
    return factors.reduce((acc, num)=> acc*num, 1)
  }