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
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Jeff", "Jeff");
assertEqual(1, 17);

// Requirements:
// // Don't modify the existing array, return a new array
// // Assert equals won't work to compare it b/c it can't compare arrays
// What is a work-around to still use the assertEqual? Convert the array into a string?
// An array with only one element should yield an empty array for its tail
// An empty array should yield an empty array for its tail




// Define the function

const tail = function(array) {
  console.log(array.slice(1));
};
// Call the function
const testArr = ["Jeff", "Amy", "Riley", "Liam"];
tail(testArr);
console.log(testArr);