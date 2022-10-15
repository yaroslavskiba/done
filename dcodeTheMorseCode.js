const decodeMorse = function(morseCode){
  const words = morseCode.trim().split('   ');
  return words.map(word => word.split(' ').map(letter => MORSE_CODE[letter]).join('')).join(' ');
}