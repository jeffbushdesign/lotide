// ASSERT ARRAY EQUALS
// Define the function
const eqArrays = function(array1, array2) {
  // Are both arrays the same length?
  if (array1.length !== array2.length) {
    // console.log("false");
    return false;
  } else {
    // Loop through each array item
    for (let i = 0; i < array1.length; i++) {
      // Are their values equal?
      if (array1[i] !== array2[i]) {
        return false;
      } 
    }
    // If none of the conditions are proved false then return true
    return true;
  } 
}


const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
}

// assertArraysEqual([2, 5], [2, 5]);

// ASSERT ARRAYS EQUAL

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  // console.log('array: ', array);
  // console.log('callback:` ', callback);
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;

}
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(["ground", "control", "to", "major", "tom"], ['g', 'c', 't', 'm', 't']);

// I don't understand what we're supposed to be doing with assertArraysEqual

const test2 = map(words, word => word.length);
const test3 = map(words, word => 'big ' + word);






assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(test2, [6, 7, 2, 5, 3]);
assertArraysEqual(test3, ['big ground', 'big control', 'big to']);









/*
const charLength = lighthouses.map(function(item) {
  return item.length;
});

console.log(charLength);

*/