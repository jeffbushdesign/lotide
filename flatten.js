/// FLATTEN ///

const assertEqual = function(actual, expected) {
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

// Test the Function
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

