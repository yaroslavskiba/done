const reverse = (str) => {
  if(str.length === 0) {
    return str;
  } else {
    return `${str.slice(-1)}${reverse(str.slice(0, -1))}`
  }

  //Тернарный оператор 
  // return str.length === 0 ? str
  //                  : `${str.slice(-1)}${reverse(str.slice(0, -1))}`;

}