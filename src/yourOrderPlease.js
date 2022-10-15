function order(words){
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return words.split(' ').sort((a,b) => {
    a = [...a].filter(item => numbers.includes(item));
    b = [...b].filter(item => numbers.includes(item));
    return a - b;
  }).join(' ');
}