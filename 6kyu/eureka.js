
// Task
// We need a function to collect these numbers, that may receive two integers 
// b that defines the range 
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range 
// [a,b] the function should output an empty list.

// 90, 100 --> []
// Enjoy it!!
// my solution

function sumDigPow(a, b) {
    let eurekaArray =[]
    for(let i=a; i<b; i++){
       let eureka = i.toString().split('').map((n,ind)=>n**(ind+1)).reduce((acc,n)=> acc + n,0)
  
       if(eureka == i){
        eurekaArray.push(i) 
        }
     }
      return eurekaArray
    }