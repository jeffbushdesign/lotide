
const findWaldo = function(names, found) {
  names.forEach((element, index, array) => {
    console.log(element, index, array);
    if (element === 'Waldo') {
      return found(index);
    }
  })
}
  
  // const findWaldo = function(names, found) {
  //   for (let i = 0; i < names.length; i++) { // loop through names array
  //     let name = names[i]; // name variable is set to first name in names array
  //     if (name === "Waldo") { // check current name to see if it equals Waldo
  //       // actionWhenFound(i);
  //       found(i);   // execute callback // if true execute actionWhenFound
  
  //     }
  //   }
  // }
  


// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);

const actionWhenFound = function(index) {

  
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston", "Waldo"], actionWhenFound);

// The function actionWhenFound is known as a callback function. 
// It is first defined, then passed as an argument to another function, 
// and finally executed once a specific event occurs.



/*
Backup
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) { // loop through names array
    let name = names[i]; // name variable is set to first name in names array
    if (name === "Waldo") { // check current name to see if it equals Waldo
      actionWhenFound(i);
      // found();   // execute callback // if true execute actionWhenFound

    }
  }
}

*/
