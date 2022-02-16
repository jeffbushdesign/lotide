const eqArrays = require('../eqArrays');
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

// console.log(middle([]));            // undefined
// console.log(middle([0]));           // 0
// console.log(middle([0, 1]));         // [0, 1]
// console.log(middle([0, 1, 2]));       // 1
// console.log(middle([0, 1, 2, 3]));     // [1, 2]
// console.log(middle([0, 1, 2, 3, 4]));   // 2