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

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Jeff", "Jeff");
// assertEqual(1, 17);


// function getKeyByValue(object, value) {
//   return Object.keys(object).find(key => object[key] === value);
// }

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
};

// Call the function
const result1 = findKeyByValue(bestTVShowsByGenre, "The Wire");
console.log(result1);


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// Consider using the Object.keys function to help you easily search through all the object keys.

// Consider using for...of to loop over the keys returned by Object.keys.

// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.