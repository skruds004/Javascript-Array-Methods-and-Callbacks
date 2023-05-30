const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

////////////////////////////////
// EVERY: 
// 1. Determine if every number is greater than or equal to 0
// 2. Determine if every word is shorter than 8 characters
////////////////////////////////

console.log(nums.every(num => num >= 0));
console.log(panagram.every(word => word.length <= 8));

////////////////////////////////
// FILTER:
// 1. Filter the array for numbers less than 4
// 2. Filter words that have an even length
////////////////////////////////

console.log(nums.filter(num => num < 4));
console.log(panagram.filter(word => word.length % 2 === 0));

////////////////////////////////
// FIND: 
// 1. Find the first value divisible by 5
// 2. Find the first word longer than 5 characters
////////////////////////////////

console.log(nums.find(num => num % 5 === 0));
//no words longer than 5 characters
console.log(panagram.find(word => word.length > 5));

/////////////////////////////////
// FIND INDEX:
// 1. Find the index of the first value divisible by 3
// 2. Find the index of the first word that is less than 2 characters long
////////////////////////////////

console.log(nums.findIndex(num => num % 3 === 0));
//no words that are less than 2 characters long
console.log(panagram.findIndex(word => word.length < 2));

//////////////////////////////////
// FOREACH:
// 1. Log each value in the array multplied by 3
// 2. Log each word with an ! at the end of it
////////////////////////////////

nums.forEach(num => console.log(num * 3));
panagram.forEach(word => console.log(word + '!'));

//////////////////////////////////////
// MAP:
// 1. Make a new array of each number multiplied by 100
// 2. Make a new array of all the words in all upper case
//////////////////////////////////////

const newMap = nums.map(num => num * 100);
const bigWords = panagram.map(word => word.toUpperCase());
console.log(newMap);
console.log(bigWords);

//////////////////////////////////////
// SOME:
// 1. Find out if some of the numbers are divisible by 7
// 2. Find out if some words have the letter 'a' in them
//////////////////////////////////////

//this will always evaluate to true as 0 % any number is 0
console.log(nums.some(num => num % 7 === 0));
console.log(panagram.some(word => word.includes('a')));

////////////////////////////////////////
// REDUCE: 
// 1. Add all of the numbers together
// 2. Concatenate all of the words together
///////////////////////////////////

console.log(nums.reduce((a, b) => a + b));
console.log(panagram.reduce((a, b) => a + b));

///////////////////////////////////////
// SORT:
// 1. Sort the number array without any arguments
// 2. Sort the panagram array without any arguments
// 3. Sort the numbers in ascending order
// 4. Sort the numbers in descending order
// 5. Sort the panagram in ascending order
// 6. Sort the panagram in descending order
////////////////////////////////////

console.log(nums.sort());
console.log(panagram.sort());
console.log(nums.sort((a, b) => a - b));
console.log(nums.sort((a, b) => b - a));
console.log(panagram.sort((a, b) => a.localeCompare(b)));
console.log(panagram.sort((a, b) => b.localeCompare(a)));

//////////////////////////////
// isPanagram:
// Check whether each letter is used at least once in the panagram
///////////////////////////////

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let sentence = panagram.join('').toLowerCase();
for (let i = 0; i < sentence.length; i++) {
    alphabet = alphabet.replace(sentence[i], '');
}

if(!alphabet) {
    console.log("It is a panagram");
}
else {
    console.log("It is not a panagram");
}

////////////////////////////////

const products = [
    {
      "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "LED lightbulb",
      "price": 6.55,
      "description": "It's super-efficient!"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
  ]

////////////////////////////////
// WORKING WITH DATA: Using the above data
// 1. Filter for products with a price that is less than 10
// 2. Sort alphabetically by product name
////////////////////////////////

console.log(products.filter(product => product.price < 10));
console.log(products.sort((a, b) => a.name.localeCompare(b.name)));



