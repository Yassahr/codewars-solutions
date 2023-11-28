// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//my solution
function count(string) {
    let letterCount = {};
     if(string){
       for(let letter of string){
         letterCount[letter] ? letterCount[letter]++ : letterCount[letter] = 1
       }
       
     }
      return letterCount
    }