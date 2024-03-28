// function findMissingLetter(arr){
 
//     let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//     let len = arr.length + 1
//     let array= arr.map(n=> n.toLowerCase())
//      abc = abc.slice(abc.indexOf(array[0]), abc.indexOf(array[0])+len)
//       return arr[0]== array[0]? abc.filter(n=> !array.includes(n))[0] : abc.filter(n=> !array.includes(n))[0].toUpperCase()
     
//     }
//my solution
function findMissingLetter(arr){
 
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let len = arr.length + 1
    let array= arr.map(n=> n.toLowerCase())
     abc = abc.slice(abc.indexOf(array[0]), abc.indexOf(array[0])+len)
      return arr[0]== array[0]? abc.filter(n=> !array.includes(n))[0] : abc.filter(n=> !array.includes(n))[0].toUpperCase()
     
    }