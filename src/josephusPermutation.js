function josephus(items, k) {
  const queue = [...items]; 
  const result = [];

  while (queue.length > 0) {
    for (let i = 1; i < k; i++) { 
      queue.push(queue.shift());
    }
    result.push(queue.shift()); 
  }

  return result;
}