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