'use strict';

var userPoints = 0;

console.log('hello world');

alert('Welcome to my guessing game.');

var user = prompt('What is your name?');

//while (user === ' ') || user === null) {
///this is the shorter version of the above expression.
//it is using type coercion to our advantage.
while (!user) {
  user = prompt('What is your name? Reall, we need your name or you do not get to play.');
}
//this is the not-equals comparison operator
if (user !== 'rachel') {
  alert('too bad you are not rachel');
}

alert('Hi ' + user + '! I am so glad you want to play my game.');

var answer = prompt('Is Rachel\'s favorite food kimchi.', 'type yes or no').toLowerCase();
console.log(answer);

var foodsILike = ['spicy chips', 'spicy ramen', 'hot sauce', 'green chili cheeseburgers'];

for (var i = 0; i < foodsILike.length; i++) {
  console.log(foodsILike[i]);
}

//more on array methods but remember to look them up too in mdn
//add to the end of my array
foodsILike.push('pho');
console.log(foodsILike);

//pop off the array
var pop = foodsILike.pop();
console.log(foodsILike);

//unshift adds elements to the fron tof the array
foodsILike.unshift('tomatoes from my garden');
console.log(foodsILike);

//indexOf
//splice

//example of a mixed array
var mixedArray = ['string', 37, true, ['burned my lip'], {}];

//check if the user's answer is correct
//list our cases!
//yes or y
//no or no OR some other answer besides yes or no

if (answer === 'yes' || answer === 'y') {
  //if it's correct give them a point
  userPoints++;
} else {
  //if it's not correct, tell them to try again
  alert('Nope, try again.');
}

alert('you have ' + userPoints + ' points.');
