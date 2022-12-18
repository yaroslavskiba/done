function findEvenIndex(arr)
{
  for (let i = 0; i < arr.length; i++) {
    const right = arr.slice(i + 1);
    const left = arr.slice(0, i);
    const rightSum = right.reduce((acc, num) => acc + num, 0);
    const leftSum = left.reduce((acc, num) => acc + num, 0);
    const div = rightSum - leftSum;
    if (div === 0) {
      return i;
    } else {
      continue;
    }
  }
  return -1;
}