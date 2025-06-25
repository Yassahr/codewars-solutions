// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"


function diamond(n){
    if(n%2==0 || n<=0){
        return null
      }
      let ans= '';
      
      for(let s=1, i=1; i<=n; i++){
        let half=Math.ceil(n/2)
        let spaces= Math.abs(half-i)
        
        if(i==1){
          s=1
         }else if(i<=half){
          s= s+2
        }else{
          s=s-2
        }
      ans=ans+" ".repeat(spaces)+"*".repeat(s)+"\n"
      }
      return ans

}