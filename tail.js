// Requirements:
// // Don't modify the existing array, return a new array
// // Assert equals won't work to compare it b/c it can't compare arrays
// What is a work-around to still use the assertEqual? Convert the array into a string?
// An array with only one element should yield an empty array for its tail
// An empty array should yield an empty array for its tail

// import assertEqual from within same folder
const assertEqual = require('./assertEqual');

// Define the function
const tail = function (array) {
  return array.slice(1);
};

// let tail function be accessible to other files
module.exports = tail;