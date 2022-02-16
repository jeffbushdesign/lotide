const countLetters = (string) => {
  const result = {}; // object to hold final result object
  // const array = string.split('');
  for (const char of string) {
    // console.log(char);
    if (char === ' ' || char === '.') {
      continue;
    } else if (!result[char]) {
      result[char] = 1;
      // console.log('peanuts');
    } else {
      result[char]++;
    }

  }
  console.log(result);
  // return result;
};


countLetters('I went to school today.');

module.exports = countLetters;



