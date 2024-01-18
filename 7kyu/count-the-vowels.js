// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
//My solution
function getCount(str) {
    let i = 0;
    for(const letter of str){
        if(letter == 'a'||letter == 'e'||letter == 'o'||letter == 'i'||letter == 'u'){
           i++
        }
    }
    return i
  }