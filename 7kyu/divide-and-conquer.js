//Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
function divCon(x){
    let numSum = 0,
        strSum =  0;
    x.forEach(n=>{
      typeof n == 'string'? strSum+= +n : numSum+=n
    })
    return numSum - strSum
   
   }

