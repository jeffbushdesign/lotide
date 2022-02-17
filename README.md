# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @jeffbushdesign/lotide`

**Require it:**

`const _ = require('@jeffbushdesign/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual()` : assert that 2 arrays are equal or not
- `assertEqual()` : assert that 2 strings or numbers are equal or not
- `assertObjectsEqual()` : assert that 2 objects are equal or not
- `countLetters()` : takes a string and returns a count of the number of occurances of each letter in the string
- `eqArrays()` : takes 2 arrays, returns true if they're equal and false if they're not equal
- `eqObject()` : takes 2 objects, returns true if they're equal and false if they're not
- `findKey()` : takes an object and callback, returns the first key that meets the criteria of the callback
- `findKeyByValue()` : takes an object and a value, returns the key that has that value
- `findWaldo()` : REMOVE
- `findWaldoAnonymously()` : REMOVE
- `flatten()` : takes an array containing another array, returns a flattened array
- `head()` : takes an array, returns 1st element
- `map()` : receives an array and a callback, returns a new array based on running callback on all array items
- `mapTest()` : REMOVE
- `middle()` : receives an array, returns middle-most element of array
- `min()` : REMOVE
- `passingGradesOnly()` : REMOVE
- `tail()` : receives an array, returns an array with everything except the first item of the array
- `takeUntil()` : receives an array and a callback, returns a slice of the array based on callback
- `without()` : receives an array and an items to remove array, returns array without items in items to remove array
