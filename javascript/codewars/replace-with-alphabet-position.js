/*
input: string of letters
output: a strinf of numbers, where each number represents the position of the letter in the alphabet
rules
- if not a letter, ignore and don't return
- the return value is a string
- approach: take the string and put it into an array
- iterate through the array and find the matching postiion against a refernece Object
- if the character does not exist, i.e. there is no refernece then do not return
- else return this

algorithm
letterArray = a-z
iterator = 0;
letterArray.forEach(element) => 
  iterator + 1
  Object[element] = iterator
stringArr = string.split('')
resultArr = stringArr.map(element => 
  if (Object[element]) {
    return Object[element]; // returns the value as an array element
  } else return 'x';
)
resultArr.filter(element => isNumber(element)).join(' ');

*/

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(string) {
  const LETTER_REF = createAlphabetObject();
  let stringArr = string.split('');
  let resultArr = stringArr.map(element => {
    if (LETTER_REF[element.toLowerCase()]) return LETTER_REF[element.toLowerCase()];
    else return 'x';
  })
  return resultArr.filter(element => Number.isInteger(+element)).join(' ');
}

function createAlphabetObject() {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let letterArray = alphabet.split('');
  let iterator = 0;
  const LETTER_REF = {}; 
  letterArray.forEach(element => {
    iterator += 1;
    LETTER_REF[element] = iterator;
  })
  return LETTER_REF;   
}