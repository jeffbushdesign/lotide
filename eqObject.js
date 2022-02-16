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
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  // First, use the Object.keys function on both objects and compare their lengths. If not equal, there's no point in going further: return false
  // compare the length of both objects
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // loop through all keys in one object
  for (const keys of Object.keys(object1)) {
    // compare keys to other object
    if (Array.isArray(object1[keys]) === true && Array.isArray(object2[keys]) === true) {
      return eqArrays(object1[keys], object2[keys]);
    }
    if (object1[keys] !== object2[keys]) {
      return false;
    }
  }
  return true;
  // console.log('Both objects have the same number of keys');

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// Test the Function
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(cd, dc), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

module.exports = eqObjects;




















