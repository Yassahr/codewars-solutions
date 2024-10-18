//Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
function reverse(str){
    if(str==false){
      console.log(str)
      return str}
  return str.split(" ").map((n,i)=>{
    if(i%2===0){
      return n.trim()
    }else{
      return n.trim().split("").reverse().join("")
    }
  }).join(" ")
  }