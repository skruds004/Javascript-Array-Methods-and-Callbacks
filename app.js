const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// ////////////////////////////////
// // EVERY: 
// // 1. Determine if every number is greater than or equal to 0
// // 2. Determine if every word is shorter than 8 characters
// ////////////////////////////////

// console.log(nums.every(num => num >= 0));
// console.log(panagram.every(word => word.length <= 8));

// ////////////////////////////////
// // FILTER:
// // 1. Filter the array for numbers less than 4
// // 2. Filter words that have an even length
// ////////////////////////////////

// console.log(nums.filter(num => num < 4));
// console.log(panagram.filter(word => word.length % 2 === 0));

// ////////////////////////////////
// // FIND: 
// // 1. Find the first value divisible by 5
// // 2. Find the first word longer than 5 characters
// ////////////////////////////////

// console.log(nums.find(num => num % 5 === 0));
// //no words longer than 5 characters
// console.log(panagram.find(word => word.length > 5));

// /////////////////////////////////
// // FIND INDEX:
// // 1. Find the index of the first value divisible by 3
// // 2. Find the index of the first word that is less than 2 characters long
// ////////////////////////////////

// console.log(nums.findIndex(num => num % 3 === 0));
// //no words that are less than 2 characters long
// console.log(panagram.findIndex(word => word.length < 2));

// //////////////////////////////////
// // FOREACH:
// // 1. Log each value in the array multplied by 3
// // 2. Log each word with an ! at the end of it
// ////////////////////////////////

// nums.forEach(num => console.log(num * 3));
// panagram.forEach(word => console.log(word + '!'));

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
