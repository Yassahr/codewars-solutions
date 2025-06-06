// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(par=0) {
    return par.length>1 ? Math.floor(Number(eval('0' + par))) : "0"
  }
  function one(par=1) {
      return par.length>1 ? Math.floor(Number(eval('1' + par))) : "1"
  
  }
  function two(par=2) {
      return par.length>1 ? Math.floor(Number(eval('2' + par))) : "2"
  }
  function three(par=3) {
      return par.length>1 ?Math.floor( Number(eval('3' + par))) : "3"
  
  }
  function four(par=4) {
      return par.length>1 ? Math.floor(Number(eval('4' + par))) : "4"
  
  }
  function five(par=5) {
    console.log(par)
      return par.length>1 ? Math.floor(Number(eval('5' + par))) : "5"
  
  }
  function six(par=6) {
      return par.length>1 ? Math.floor(Number(eval('6' + par))) : "6"
  
  }
  function seven(par=7) {
    console.log(par, par.length>1,  Number(eval('7' + par)) )
    return par.length>1 ? Math.floor(Number(eval('7' + par))) : "7"
  
  }
  function eight(par=8) {
    return par.length>1 ? Math.floor(Number(eval('8' + par)) ): "8"
  
  }
  function nine(par=9) {
        return par.length>1 ? Math.floor(Number(eval('9' + par))) : "9"
  
  }
  
  function plus(num) {
      return `+${num}`
  
  }
  function minus(num) {
    return `-${num}`
  
  }
  function times(num) {
      return `*${num}`
  
  }
  function dividedBy(num) {
    return `/${num}`
  }
  