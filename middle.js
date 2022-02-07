// Define the function
const eqArrays = function(array1, array2) {
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
}


const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
}

// assertArraysEqual([2, 5], [2, 5]);

// ---------------------------------------------------------------

// ACTUAL FUNCTION
const middle = function(array) {
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
}

console.log(middle([]));            // undefined
console.log(middle([0]));           // 0
console.log(middle([0,1]));         // [0, 1]
console.log(middle([0,1,2]));       // 1
console.log(middle([0,1,2,3]));     // [1, 2]
console.log(middle([0,1,2,3,4]));   // 2


/*
function middleItem(arr) {
  if (!arr.length)
    return;
    
  const mid = arr.length / 2;
  if (arr.length % 2 === 1) {
    return arr[Math.floor(mid)];
  } else {
    return [
      arr[mid - 1],
      arr[mid],
    ];
  }
}

console.log(middleItem([]));            // undefined
console.log(middleItem([0]));           // 0
console.log(middleItem([0,1]));         // [0, 1]
console.log(middleItem([0,1,2]));       // 1
console.log(middleItem([0,1,2,3]));     // [1, 2]
console.log(middleItem([0,1,2,3,4]));   // 2
*/

/*
let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 
// Prints 'Papayas are $1.29'
* */

// TEST CODE
// ...

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]