var solution = function(firstArray, secondArray) {
    const result = [];
    for(let i = 0; i < firstArray.length; i++) {
      const divider = firstArray[i] - secondArray[i];
      result.push(Math.pow(Math.abs(divider), 2));
    }
    const sum = result.reduce((acc, i) => acc + i, 0);
    return sum / firstArray.length;
  }