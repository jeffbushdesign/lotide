// REFERENCE
// const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
// const evens = numbers.filter(function(num) {
//   return (num % 2 == 0);
// });
// console.log("Subset of even numbers:", evens);

// This node script should print out passing grades to the console. 
// Passing grades for this scenario can be those that are 70 or above.


// ANONYMOUS FUNCTION
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const pass = grades.filter(function(num) {
  return (num >= 70);

});
console.log(`The following are passing grades:\n${pass}`);

