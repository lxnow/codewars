/*
input: an array that contains n sub arrays of n length each
output: a single flat array that contains elements sorted in a snail shell fashion
rules:
- there are n sub arrays
- each sub array has n elements
- [[]] is acceptable ==> []
- traverse the first array (unshift?)
- after hitting the last element, traverse the last elements of all arrays, popping each one out along the way so there is a new end (pop)
- after hitting the last array, traverse the last element from last to first (pop)
- after hitting start first element of this last array, (unshift) the first element of each array from last to first array
- after hitting the last non-empty array, repeat the loop

algorithm:
array.length
array[sub].length
let toggle = move1, move2, move3, move4
let snailedArray = []
while array.flat !== [];
  toggle = move1
  counter = 0;
  if counter === 0 or toggle = move1 // array[counter - 1] is empty
    then while array[counter] !== []
      snailedArray.push(array[counter].shift());
    toggle = move2
  else if toggle = move2
    while counter is not equals to the last or array[counter + 1] !== []
      counter += 1
      snailedArray.push(array[counter][array[counter].length - 1].pop());
    toggle = move3
  else if toggle = move3
    while array[counter] !== []
      snailedArray.push(array[counter][array[counter].length - 1].pop());
    toggle = move4
  else if toggle = move4
    while array[counter] !== []
      counter -= 1
      snailedArray.push(array[counter].shift());
    toggle = move1
    counter += 1;
*/

const snail = function(array) {
  let counter = 0;
  let snailedArray = [];
  while ([].concat(...array).length > 0) {
    while (array[counter].length !== 0) {
      snailedArray.push(array[counter].shift());
    }
    while (counter !== array.length - 1 && array[counter + 1].length > 0) {
      counter += 1;
      snailedArray.push(array[counter].pop());
    }
    while (array[counter].length > 0) {
      snailedArray.push(array[counter].pop());
    }
    counter -= 1;
    while (array[counter].length > 0) {
      snailedArray.push(array[counter].shift());
      counter -= 1;
    }
    counter += 1;
  }
  return snailedArray;
}

let array = [[1,2,3,4],
         [8,9,4,10],
         [7,6,5,11],['x','x','x','x']]
console.log(snail(array));
