// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'
function dashatize(num) {
    let dashed=[]
    num=Math.abs(num).toString()
    for(let i=0; i<num.length; i++){
      if(num[i]%2==0){
        dashed.push(num[i])
      }else{
        dashed.push(`-${num[i]}-`)
      }
    }
    dashed = dashed.join('').replace(/--/g,'-')
  
    if(dashed[0]=='-'){
      dashed = dashed.replace('-','')
    }
     
    if(dashed[dashed.length-1]=='-'){
      let last = dashed.length -1
       dashed=dashed.slice(0,last )
    }
   return dashed
  
  }
  