function scramble(str1, str2) {
  let chars = {};

  for (let char of str1) {
    chars[char] = (chars[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!chars[char]) {
      return false;
    } else {
      chars[char]--;
    }
  }

  return true;
}