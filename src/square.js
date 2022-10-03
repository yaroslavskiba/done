function squareDigits(num){
  const sqr = String(num).split('').map(item => Math.pow(item, 2)).join('');
  return Number(sqr);
}