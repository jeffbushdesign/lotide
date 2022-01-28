const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // Using template literals
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    // Using template literals
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Jeff", "Jeff");
assertEqual(1, 17);

// Define the function
function head(array) {
  return array[0];
  // Requirements:
  // Return the first item in the array
  // Don't return the first element as an array. Return the element itself
  // Even if the array has only 1 element, that 1 element should be returned
  // An empty array should return undefined
}

// head(['Jeff', 'Amy', 'Riley']);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

