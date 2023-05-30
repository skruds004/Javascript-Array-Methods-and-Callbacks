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