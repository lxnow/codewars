/*
input: two argumetns, both digits, where first digit is the number and second number is the p (power to start with)
output: the value 'n' that is the number multiplied to first argument that leads to K

rules:
n = the likely multi-digit integer being iterated on
p = power to start with, which incrementally goes up for each digit
k = the unknown, hence division of result / n
split number into an array
iterate through array and raise it to the power of p
p += 1 for each iteration
assign the resulting value to 'result'
k = result / n... if k is an integer or has no remainder, then return this
else return -1

algorithm:
let nArray = n.toString().split('');
sumResult = nArray.reduce((a, b) => {
  a + b ** p;
  p += 1;  
}, 0);
console.log(sumResult);
if (sumResult % n === 0) return sumResult % n
else return - 1;
*/



console.log(digPow(46288, 3));
// return 51

function digPow(n, p) {
  let nArray = n.toString().split('');
  p -= 1;
  let sumResult = nArray.reduce((accum, currentVal) => {
    p += 1;
    return accum + currentVal ** p;
  }, 0)
  if (sumResult % n === 0) return sumResult / n;
  else return -1;
}