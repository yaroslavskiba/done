function tribonacci(signature,n){
  if (n < signature.length){
    return signature.slice(0, n);
  }
  const result = signature.slice(0);
  const length = n - result.length;
  for (let i = 0; i < length; i++) {
    const sum = result[i] + result[i + 1] + result[i + 2];
    result.push(sum);
  }
  return result;
}