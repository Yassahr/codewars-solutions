// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
function solve(s){
    //store lowercase&&uppercase count in 2 variable 
    let lowerC = s.split('').filter(n=> n.toLowerCase()===n).length;
    let upperC = s.length-lowerC
    
    console.log(lowerC, upperC, s)
    //if either is equal to 0 then return string
    if(lowerC===0||upperC===0){
      return s
    }else if(upperC>lowerC){
    //if uppercase count is larger then return uppercase
      return s.toUpperCase()
     }else{
       //else return lowercase
      return s.toLowerCase()
     } 
  }