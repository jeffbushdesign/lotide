/// FLATTEN ///

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    // Not using template literals
    // console.log("🟢 Assertion Passed: " + actual + " === " + expected);

    // Using template literals
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    // Not using template literals
    // console.log("🔴 Assertion Failed: " + actual + " !== " + expected);

    // Using template literals
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Jeff", "Jeff");
// assertEqual(1, 17);



// Define the function
const eqArrays = function (array1, array2) {
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
};

// Test the Function
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const flatten = (array) => {
  const result = []; // empty array to hold result
  // loop through array
  for (let i = 0; i < array.length; i++) {
    // check each array item to see if it's an array
    if (Array.isArray(array[i]) === false) {
      // if it's NOT an array item then add the item to the result array
      result.push(array[i]);
    } else {
      // if it IS an array item then loop through the sub array
      for (let j = 0; j < array[i][j]; j++) {
        // add each sub-array item to result
        result.push(array[i][j]);
      }
    }
  }
  console.log(result); // return result
};
// Test the function
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;


