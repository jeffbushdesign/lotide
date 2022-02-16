
// ---------------------------------------------------------------

// ACTUAL FUNCTION
const middle = function (array) {
  if (!array.length) // if array is empty, return undefined
    return;

  if (array.length <= 2)
    return [];
  const mid = array.length / 2;
  if (array.length % 2 === 0) { // if array length is even number
    // return 2 middle array items
    return [
      array[mid - 1],
      array[mid],
    ];
  } else { // array length is odd number
    // return middle array item
    return [array[Math.floor(mid)]];
  }
};

module.exports = middle;