/*
input: a number
output: a number if perfect square input, else -1
rules:
- if input is not a perfect square, return -1
- perfect square means that the square root of the number is an integer
- 

algorithm
if square root of number is not an integer, return false
else squareRoot = Math.sqrt(number);
  return (squareRoot + 1) ** 2;
*/

console.log(findNextSquare(121)); // --> 144
console.log(findNextSquare(625)); //--> 676
console.log(findNextSquare(114)); // --> -1 since 114 is not a perfect square

function findNextSquare(number) {
  let squareRoot = Math.sqrt(number);
  if (!Number.isInteger(squareRoot)) return -1;
  else {
    return (squareRoot + 1) ** 2;
  }
}
