

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

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Jeff", "Jeff");
// assertEqual(1, 17);

// -------- FIND KEY BY VALUE ----------

// function getKeyByValue(object, value) {
//   return Object.keys(object).find(key => object[key] === value);
// }

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const findKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
};

// Call the function
// const result1 = findKeyByValue(bestTVShowsByGenre, "The Wire");
// console.log(result1);


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// -------- FIND KEY BY VALUE ----------

// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const findKey = (object, callback) => {
  // return Object.keys(object).find(key => callback());
  for (const key in object) {
    // console.log('key is: ', key);
    // console.log('key value is: ', object[key]);
    // console.log('callback value: ', callback(object[key]));
    if (callback(object[key])) {
      return key;
    }
  }
  // return 'abc';
};

// return Object.keys(object).find(key => object[key] === value);

const results1 = findKey(data1, x => x.stars === 2);
console.log(results1);

assertEqual(results1, 'Blue Hill');

// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

module.exports = findKey;


