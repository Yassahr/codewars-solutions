//-> array of subarray(2)
//with the array or subs every be empty, null
//will all of the sub arrays have the same order
function bingo(ticket, win){
    //set up a count for unicode
    //array method if Unicode of char is equal 
    //return compare value of win and mini-win  
    let count =0;
    ticket.forEach(([a,b])=>{
      console.log(a.split('').map(n=> a.codePointAt(n)), b, a,String.fromCodePoint(b))
  
      if(a.split('').filter(n=> a.codePointAt(n)==b).length >= 1){
        count++
        console.log(count)
      }
      
    })
    console.log(count, win)
    return count>=win?'Winner!':'Loser!'
  }
  //mini win if codePointAt === ['C||H||A||R', num] 
  //win if codePointAt(C+H+A+R)>=win