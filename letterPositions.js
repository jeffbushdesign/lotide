const letterPositions = function (sentence) {
  const result = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    // console.log('i', i); // counter 
    // console.log('[i]:',[i]); // counter in an array
    // console.log('Sentence [i]', sentence[i]); // the actual character at position i

    if (sentence[i] !== ' ') {
      if (result[sentence[i]] === undefined) {
        result[sentence[i]] = [i];
      } else {
        result[sentence[i]].push(i);
      }
    }


    // console.log(sentence[i]);

  }
  console.log(result);
};

letterPositions("Copy your previously implemented assertArraysEqual and eqArrays functions into this file.");

module.exports = letterPositions;





