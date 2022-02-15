const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]
//Use the map method on lighthouses so that we instead see an array of numbers.

// The array of numbers should be the length of each name in the lighthouses.

// Start with the code below:

const charLength = lighthouses.map(function(item) {
  return item.length;
});

console.log(charLength);

// var names = animals.map(function(animal) {
//   return animal.name
//   })