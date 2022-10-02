const reverseInt = (str) => {
  const numToStr = String(Math.abs(str));
  let result = '';
  for (let i = numToStr.length - 1; i >= 0; i -= 1) {
    result += numToStr[i];
  }
  const strToNum = Number(result);
  return str < 0 ? -strToNum : strToNum;
}