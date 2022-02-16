
const findWaldoAnonymously = function (names, found) {
  names.forEach((element, index, array) => {
    console.log(element, index, array);
    if (element === 'Waldo') {
      return found(index); // callback function
    }
  });
};
findWaldoAnonymously(["Alice", "Bob", "Waldo", "Winston", "Waldo"], function (index) {
  console.log(`Found Waldo at index ${index}!`);

});

// The function actionWhenFound is known as a callback function. 
// It is first defined, then passed as an argument to another function, 
// and finally executed once a specific event occurs.

module.exports = findWaldoAnonymously;
