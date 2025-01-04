//->array of numbers, with at least 2 numbers
2
//could have negatives, be empty of a 2 digit number 
3
function upArray(arr){
4
  console.log('orignal arry', arr)
5
  let dig = arr.join('')
6
//   console.log(arr, dig)
7
  if(arr===''||Number.isInteger()){
8
    return null
9
  }else{
10
    if(dig[0]!=0){
11
      dig= parseInt(dig) + 1
12
      console.log(dig, dig.toString().split('').map(Number))
13
    return dig.toString().split('').map(Number)
14
    }else{
15
      dig= parseInt(dig) + 1
16
      dig= dig.toString().split('').map(Number)
17
      console.log('boom')
18
      return [0, ...dig]
19
    }
20
    
21
  }
22
  //concate all of the numbers
23
  //set up com if arr =''||arr[i] is 2 digits ||negative
24
  //add 1 to concated num
25
  //seperate into invididual digits
26
  
27
}
28
// array of the numbers with 1 added to it 
29
//upArray([4,3,2,5])--->[4,3,2,6]
30
//upArray([9,9])-> [1,0,0]