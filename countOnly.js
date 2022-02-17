// COUNT ONLY // 

/*
countOnly receives an array and an object
it returns an object with counts based on the array and the input object
The input object has keys with boolean values.
The output object has counts of keys that are in the input array and are in the input object with a value of true
So for a count to appear in the output object
- it must be a key in the input array and the input object
- it's value in the input object must be true
*/

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


/*
Search through the itemsToCount object just looking for keys with a value of true
If you find a value of true then it needs to be counted
Now go through allItems array looking for whichever value was true, count the number of times that value appears
Output the result to a new object
 
*/
const countOnly = function (allItems, itemsToCount) {
  const result = {}; // empty object to hold answer
  // loop through itemsToCount object
  for (const items in itemsToCount) {
    // look for true value -->
    // itemsToCount[items] by itself will be true
    // && look to see if that key is also present in the allItems array
    if (itemsToCount[items] && allItems.includes(items)) {
      // if true
      let count = 0; // start count at 0
      // loop through the allItems array
      for (const names of allItems) {
        // if names in allItems is equal to items in itemsToCount
        if (names === items) {
          // add to the count counter
          count++;
        }
      }
      // assign the items to the result object as being equal to the current value of the count counter
      result[items] = count;
    }
  }
  return result; // return the result object
};

// return output; // function returns output object containing item counts ex: a: 3, b: 1


// test the countOnly function
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1);

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;




























