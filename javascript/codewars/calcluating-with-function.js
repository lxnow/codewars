console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3

/*
input: functions of one of two types - numbers and operators
output: a resulting number
rules 
- each number is represented by a function
- functions must exist for plus, minus, times and dividedBy
- each calculation consists of exactly one operations and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
data types: 
number functions output integers, takes operator argument default none
operator functions output functions, takes one number argument

algorithm
- numberFunctions: 
numberFunc(opArg = null) {
  if opArg is null
    return number
  else if opArg[0] = '*' {
    return generatedNum * opArg[1]
  } 
}

- operatorFunctions:
operatorFunc(arg) {
  return ['*', arg]
}

*/

function calculate(array, number) {
  if (array[0] === '*') return number * array[1];
  else if (array[0] === '/') return Math.floor(number / array[1]);
  else if (array[0] === '+') return number + array[1];
  else if (array[0] === '-') return number - array[1];
}

function zero(opArg = null) {
  if (opArg === null) return 0;
  else return calculate(opArg, 0);
}
function one(opArg = null) {
  if (opArg === null) return 1;
  else return calculate(opArg, 1);
}
function two(opArg = null) {
  if (opArg === null) return 2;
  else return calculate(opArg, 2);
}
function three(opArg = null) {
  if (opArg === null) return 3;
  else return calculate(opArg, 3);
}
function four(opArg = null) {
  if (opArg === null) return 4;
  else return calculate(opArg, 4);
}
function five(opArg = null) {
  if (opArg === null) return 5;
  else return calculate(opArg, 5);
}
function six(opArg = null) {
  if (opArg === null) return 6;
  else return calculate(opArg, 6);
}
function seven(opArg = null) {
  if (opArg === null) return 7;
  else return calculate(opArg, 7);
}
function eight(opArg = null) {
  if (opArg === null) return 8;
  else return calculate(opArg, 8);
}
function nine(opArg = null) {
  if (opArg === null) return 9;
  else return calculate(opArg, 9);
}


function plus(number) { return ['+', number] }
function minus(number) { return ['-', number] }
function times(number) { return ['*', number ]}
function dividedBy(number) { return ['/', number]}