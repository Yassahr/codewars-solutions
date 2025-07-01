
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'
function switcheroo(x){
    let switched = "";
    
    for(const letter of x){
      if(letter=="a"){
       switched+="b" 
      }else if(letter=="b"){
       switched+="a" 
      }else{
         switched+="c" 
    
      }
    }
      return switched
    
    }