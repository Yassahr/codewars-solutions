// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
function towerBuilder(f) {
    let arr = [];
    let star = 1;
    
    for(let i=1; i<=f; i++){
    let spaces = f - i;
    arr.push(' '.repeat(spaces) +'*'.repeat(star)+ ' '.repeat(spaces) )
    star += 2
    }
    return arr
  }