// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
function countSmileys(smiles){
  
    //filter method
   return smiles.filter((smile)=>{
                //2 char check if first char is equal to :||; and if last is equal to ) || D
               if(smile.length===2){
                  if( (smile[0]===':'||smile[0]===';')&&(smile[1]==='\)'||smile[1]==='D') ){
                    console.log('OG smile')
                    return smile
                  }
                //3 char same as 2char but check if middle element equal to -||~
               }else if(smile.length===3){
                if( (smile[0]===':'||smile[0]===';') && (smile[1]==='-'||smile[1]==='~') && (smile[2]==='\)'||smile[2]==='D') ){
                    console.log('also a smile')
                    return smile
                  }
               }
              }).length
  }