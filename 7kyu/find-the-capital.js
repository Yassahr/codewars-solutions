// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]


//my soluttion
var capitals = function (word) {
    return word.match(/[A-Z]/g).map(char=> word.indexOf(char)).sort((a,b)=> a-b)
    };
//Drawbacks: if there are duplicates capitialized letters the index of method will return incorrect numbers