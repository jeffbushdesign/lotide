
const words = ["hello", "world", "lighthouse"];

// Declare the function
const without = function(source, itemsToRemove) {
  let result = []; // array to hold result
  // Loop through source
  for (let i = 0; i < source.length; i++) {
    let toRemove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        toRemove = true;
        break;
      } 
    }
    if (toRemove === false ) {
      result.push(source[i]);
      toRemove = true;
    }
  }
  console.log(result);
  // return result;
}


// Test the function
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);














