// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
function rowWeights(array){
    return [array.filter((n,i)=>i%2==0).reduce((acc,n)=>acc+n,0), array.filter((n,i)=>i%2!=0).reduce((acc,n)=>acc+n,0)]
  }