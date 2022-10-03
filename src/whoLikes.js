function likes(names) {
  const one = names[0];
  const two = names[1];
  const three = names[2];
  if (names.length === 0) {
    return "no one likes this"
  }
  if (names.length === 1) {
    return `${one} likes this`
  }
  if (names.length === 2) {
    return `${one} and ${two} like this`
  }
  if (names.length === 3) {
   return `${one}, ${two} and ${three} like this`
  }
  if (names.length >= 4) {
    const [one, two, ...all] = names;
    return `${one}, ${two} and ${all.length} others like this`
  }
}