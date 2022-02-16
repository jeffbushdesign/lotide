
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

module.exports = eqArrays;

