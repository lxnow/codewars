function digital_root(n) {
  let numberArr = n.toString().split('');
  console.log(numberArr);
  let result = 0;
  while (numberArr.length > 1) {
    result = numberArr.reduce((acc, currentVal) => +acc + +currentVal);
    console.log(result);
    numberArr = result.toString().split('');
  }
  return result;
}

console.log(digital_root(16));