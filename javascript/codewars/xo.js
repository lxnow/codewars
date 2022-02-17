/*
input: string
output: boolean
rules:
- number of x and o are equal return true
- number of x and o are not equal return false
- x starts at 0, o starts 0; if both don't exist, return true
- case insensitive

algorithm
stringarr = string.split('')
let xArr = stringArr.filter(element => element.toLowercase() = 'x');
let oArr = stringArr.filter(element => element.toLowerCase() = 'o')
if xArr.length = oArr.length return true
else return false

*/

console.log(XO("ooxx"))// => true
console.log(XO("xooxx"))// => false
console.log(XO("ooxXm"))// => true
console.log(XO("zpzpzpp"))// => true // when no 'x' and 'o' is present should return true
console.log(XO("zzoo"))// => false

function XO(string) {
  let stringArr = string.split('');
  let xArr = stringArr.filter(element => element.toLowerCase() === 'x');
  let oArr = stringArr.filter(element => element.toLowerCase() === 'o');
  if (xArr.length == oArr.length) return true;
  else return false;
}