// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
//My Solution
function pigIt(str){
    //Code here
   return str
          .split(' ')
          .map((n,i)=>{
           let end = n[0] + 'ay';
           return n.match(/[a-z]/i)? n.slice(1) + end : n
           })
         .join(' ')
  }