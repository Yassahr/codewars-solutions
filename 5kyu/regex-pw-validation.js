// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)

function doTest(string){
    if(string.length <6){
      return false
    }
    let validation=[0,0,0]
    for(let char of string ){
      console.log(char)
      //check if alphanumeric
      console.log(char)
      if(char >= "a" && char <= "z"){
        console.log("lowercase", char)
          validation[0]++
      }else if(char >= "A" && char <= "Z"){
         console.log("uppercase", char)
        validation[1]++
  
      }else if(Number(char) >= 1 && char <= 9){
          console.log("number", char)
        validation[2]++
      }else{
        return false
      }
  
    }
    return validation.every(n=> n>= 1)
  }