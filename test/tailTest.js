const assert = require('chai').assert;
const tail = require('../tail');

// Call the function
// const testArr = ["Jeff", "Amy", "Riley", "Liam"];
// tail(testArr);

describe("#tail", () => {
  it("returns ['Amy', 'Riley', 'Liam'] for ['Jeff', 'Amy', 'Riley', 'Liam']", () => {
    assert.deepEqual(tail(['Jeff', 'Amy', 'Riley', 'Liam']), ['Amy', 'Riley', 'Liam']);
  });
});
