console.log(countBits(1234)); // logs 5, binary representation is 10011010010
console.log(countBits(0));

/*
input: an integer
output: the sum of the bit count
rules:
- converting integer to binary steps:
  - divide integer by 2, get remainder
  - store remainder in an array
  - keep dividing by 2, storing remainder to array (including 0)
  - when finally 1 / 2, we are done
- group is an array containing 0s and 1s
- using the reduce method can get us to a single value

algorithm
fucntion getBinary(integer)
  let group = []
  while integer >= 1
    group.push(integer % 2)
    integer = Math.floor(integer / 2);
  return group.reduce((a, b) => a + b)
*/

function countBits(integer) {
  let group = [];
  while (integer >= 1) {
    group.push(integer % 2);
    integer = Math.floor(integer / 2);
  }
  return group.reduce((a, b) => a + b, 0);
}
