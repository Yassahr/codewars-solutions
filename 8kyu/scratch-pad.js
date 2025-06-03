function fib(n){
    if(n<=1) return n
    return fib(n-1)+fib(n-2)
}

function memoFib(n, memo={}){
    if(n in memo) return memo[n]
    if(n<=1) return 1
    memo[n]= memoFib(n-1, memo) + memoFib(n-2, memo)
    return memo[n]
}



function ransonNote(note, mag){
    //hashmap of mag char
    //subtract letters in note from mag
    //if any of them are equal to 0 or dont exist return false
    mag=mag.replaceAll(' ','').split('');
    note=note.replaceAll(' ','').split('');

    let magWordCount ={}

    for(const letter of mag){
        magWordCount[letter]= (magWordCount[letter]|| 0)+1
    }

    for(const char of note ){
        if(!magWordCount[char]||magWordCount[char]===0){
            return false
        }
        magWordCount[char]--
    }
    return true
}


function addAProp(arr){
    arr.forEach(function(dev){
     dev.greeting = `${dev.firstname} and ${dev.firstname} `
    })
}

hashmap[property]=(hashmap[property]||0)+1

function integerReversal(int){
    Math.sign(int) * +int.toString().split('').reverse().join('')
}

function addMethod(arr){
    return arr.forEach(el=>{
        el.greeting=`tem[p]late literal of greeting`
    })
}

function findThePrimes(n){
    // fill an array with trues
    let prime = new Array(n+1).fill(true)
    //iterate through array and change the square values into false
    for(let i = 2; i<=n; i++){
        if(prime[i]){
            for(let j= i*i; j<n+1; j+=i){
                prime[j]=false
            }
        }
    }

    prime.reduce((acc, ele, i)=>{
        if(i>2&& ele===true){
            acc.push(i)
        }
        return acc
    }, [])
    //use reduce to go through array and check it the value is aboce 2 and equal to true
    //return array
}

function ceasarCipher(string, num){
    //function that actually replaces the thing
    string = string.toUppercase
    string.replacesAll(/[A-Z]/g,rot13)
    //function that replaces the works
    function rot13(string){
        let correspondence= string.CharCodeAt()

    }
    //changes it the from Char Code
    //charcodeAt with conditional for how much to add 
}
function sleep(millis){
    new Promise(resolve, reject)=>{
       return setTimeout(()=> resolve('whatever'),millis )
    }
}

function pyramid(level){

   for(let i=0; i>level; i++){ 
    let space = ' '.repeat(level-i)
    let pyr = '+'.repeat(2*i -1)}
    console.log(space + pyr + space)

}
function pyramid(level){

    for(let i=0; i>level; i++){ 
     let space = ' '.repeat(level-i)
     let stair = '+'.repeat(i)}
     console.log(pyr + space)
 
 }


 function findMode(arr){
    //hash values 
    //reduce and return the val more frequent
    //check if there are multiple values with same mode
    let freq={}
    for(let num of arr){
        freq[num]=(freq[num]||0)+1
    }

    const max=Math.max(...Object.keys(freq).map(Number))
     
    return arr.filter(n=> n==freq[max])
 }


 function persistence(number, counter =0){
    number = number.toString()
    if(number.length==1){
        return counter
    }else{
        number= +number.split('').reduce((acc,num)=> acc*1, 1)
        return persistence(number, counter++)
    }

 }

 function arrayChunking(length, n){
    let index =o
    let finalArray=[]

    while(i< arr.length){
        finalArray.push(arr.slice(i, i+n))
        index+=n
    }

    return finalArray
 }

 function findPrimes(n){
    //start with filling an array up to n
    let prime = new Array(n+1).fill(true)
    //iteriate through the array and if it exists 
    for(let i=2; i<=n; i++){
        if(prime[i]){
            for(let j = i*i; j<n+1; j+=i){
                prime[j]=false
            }
        }
    }
    //change sqaures of i to zero

    //iterate through array 
    let primeArray= prime.reduce((acc, ele, i)=>{
        if(ele===true&&i>=2){
             acc.push(i)
        }
        return acc
    },[])
    return primeArray
    //push all of the values that are false and above 2 to the primes array
 }
 async function sleep(millis){
   return new Promise(resolve, reject)=>{
       return setTimeOut(()=>resolve('answer'), millis)
    }
 }
 function capitilization(string){
    return string.split('').map(n=> n.toUpperCase()).join('')
 }
 //Goal of this function is to confirm that the magizine has the correct letter and # of letters to create the note
 //Return is going to be a boolean 
 //any not alphanumeric characters
 //Do capitilization
 function ransonNote(note, magazine){
//hashmap of the mag
//iteriate through note(for of)
//check if the char count>0
//confirm the char exists
//If yes>> subtract 1 from char in hashmap
//if no>> return false
let magazineCount={};

for(const letter of magazine){
    magazineCount[letter]= (magazineCount[letter]||0)+1
}
console.log(magazine,magazineCount)

for(const char of note){
    if(magazineCount[char]&& magazineCount[char]>0){
        magazineCount[char]--
    }else{
        return false
    }
}
return true

 }
 function staircase(level){
    for(let i=1; i<level; i++){
        let stair='x'.repeat(i-1);
    let spaces=' '.repeat(i)
    }
    console.log()
 }
 //number
 //an array of all of the prime numbers between 0 and the prime number
 function sieveOfEr(n){
//create at array with number of values from 0-num
//Check each value to see if they are a prime number
//if they are prime then push them to new array

//Use Array fill to fill array with boolean true
let prime= new Array(n+1).fill(true)
//use a for loop to interate through array
for (let i=0; i<=n; i++){
    if(prime[i]){
        for(let j= i*i;j>n; j+=i){
            prime[j]=false
        }
    }
}

let primeArry= prime.reduce((acc, e, i)=>{
    if(i>=2&& e===true){
        acc.push(i)
    }
    return acc
},[])
return primeArray
//every number that is a multiple sent it as false
//use reduce
//check if the value is equal to true and its index is above 2
//push to acc array
 }