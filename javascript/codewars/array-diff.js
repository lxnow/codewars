console.log(arrayDiff([1,2,2,2,3,4,5,6],[2,4,5,6])); 

/*
input: array1 and array2
output: arrays less the elements found in the second array
rules
- remove elements found in array2 from array1
- return an array with only elements not found in array1

algorithm

function filterLoop(arr, counter) {
  arr.filter(element => element !== array2[counter])
}

for each element in array2:
  answerArr = array1.filter if element !== array2[evalElement]; 
*/


function arrayDiff(array1, array2, counter = array2.length) {
  let holdingArr = array1.filter(element => element !== array2[counter]);
  if (counter === 0) {
    return holdingArr;
  } return arrayDiff(holdingArr, array2, counter - 1);
}