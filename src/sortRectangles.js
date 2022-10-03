const sortByArea = a => {
  const getArea = i => Array.isArray(i) ? i[0] * i[1] : Math.PI * i * i;
  return [...a].sort((i, j) => getArea(i) - getArea(j));
}