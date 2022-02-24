console.log(validBraces("(){}[]"));   //True
console.log(validBraces("([{}])"));   //True
console.log(validBraces("(}"));       //False
console.log(validBraces("[(])"));     //False
console.log(validBraces("[({})](]"))  //False
console.log(validBraces("]][[())("))  //False

/*

"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

input: string of brace characters, three types []() and {}
output: boolean
rules:
- every opening brace should be matched by a closing brace
- going left to right is the order
- for every opening brace, + 1, for every closing brace, -1
- initiate a variable per brace type, three variables
- we should check at each iteration if the count has gone negative (or the equivalent logic); if it has gone negative, then return false
- with every new open, the CURRENT open, then the only valid close is its same. if it's different then return false

algorithm - 
function validBraces(string) {
  let countParen = 0;
  let countBrace = 0;
  let countCurly = 0;
  for (let counter = 0; counter < string.length; counter++){
    switch (string[counter]) {
      case '(':
        countParen += 1;
        break;

    }
  }
}

*/

function validBraces(string) {
  let countParen = 0;
  let countBrace = 0;
  let countCurly = 0;
  let openGroup = [];
  let openVal = '';
  let result = false;

  for (let counter = 0; counter < string.length; counter++){
    switch (string[counter]) {
      case '(':
        countParen += 1;
        openGroup.push('(');
        break;
      case ')':
        countParen -= 1;
        openVal = openGroup.pop();
        break;
      case '[':
        countBrace += 1;
        openGroup.push('[');
        break;
      case ']':
        countBrace -= 1;
        openVal = openGroup.pop();
        break;
      case '{':
        countCurly += 1;
        openGroup.push('{');
        break;
      case '}':
        countCurly -= 1;
        openVal = openGroup.pop();
        break;
    }

    if ((string[counter] === '}' && openVal !== '{')
      || (string[counter] === ']' && openVal !== '[')
      || (string[counter] === ')' && openVal !== '(')) {
      openVal = false;
      break;
    }

    if (countParen < 0 || countBrace < 0 || countCurly < 0) break;

  }

  if (countParen !== 0 || countBrace !== 0 || countCurly !== 0) result = false;
  else if (!openVal) {
    result = false;
  } else result = true;

  return result;
}
