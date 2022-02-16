const min = function (numbers) {
  // Write code here that returns the smallest value in numbers

  // Jeff
  // Loop through the array comparing numbers
  // Take the first array item and save it as a variable
  // With each new item in the array compare the variable to the current array item
  // If the item's value is higher then just continue
  // If the item's value is lower then replace the variable with that item

  // Comparable problem =
  // Kata 14 Change Calculator - https://flex-web.compass.lighthouselabs.ca/d5226362-f1e6-458c-a107-6d363a589ef6
  // Codecademy Workspace - https://www.codecademy.com/workspaces/61d888ede8251449417c2405

  // smallest variable starts as being equal to the 1st item in the array
  let smallest = numbers[0];

  // loop through the array starting at the beginning
  for (let i = 0; i < numbers.length; i++) {
    // check if the current array item is smaller than our variable smallest
    if (numbers[i] < smallest) {
      smallest = numbers[i]; // if the item IS smaller then smallest variable is redefined
    } else {
      continue; // if the current item is NOT smaller then just continue
    }

  }
  return smallest; // return the value of smallest
};


/*
 * This is some test runner code that's simply calling our min function defined
 * above to verify it's returning the proper minimum. Do not modify it!
 */

const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs $${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);

module.exports = min;
