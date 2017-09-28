'use strict';

var userPoints = 0;

console.log('hello yawllll');
alert('Welcome to my guessing game!');

var user = prompt('What is your name?');
alert('Hi ' + user + '! I am so glad you want to play my game.');

var answer = prompt('Is Rachel\'s favorite food kimchi? Type yes or no.').toLowerCase();
console.log(answer);

if(answer === 'yes' || answer === 'Y') {
  userPoints++;
} else {
  alert('Wrong! Actually, I like awwlllllll spicy food.');
}

alert('you have ' + userPoints + ' points.');
