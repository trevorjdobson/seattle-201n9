'use strict';

//basic funtion taking an elemnt from the DOM and changing it using javascript
//the function actls like a store; it holds what you need until you are ready to use them
var msg = 'Sign up to receive our newsletter for 10% off!';
function updateMessage() {
  //inside of the function this is a statement
  var element = document.getElementById('message');
  //second statement inside of the function
  element.textContent = msg;
}
//calling the function. Asking the function to do it's task.
updateMessage();

//declaring a function that needs info: parameters, used like variables in a function
//parameters are width and the height
function getArea(width, height) {
  //this function will calculate and return the value of width and height
  console.log('getArea: ' + width * height);
}
//when you call a function that has parameters, you specify the values it should use in the parentheses that follow it's name
//three and five are arguments
getArea(3, 5);

//getting a single value out of a function
function calculateArea(width, height) {
  var area = width * height;
  //return keyword is used to return the value to the code that called the function
  return area;
}
var wallOne = calculateArea(3, 5);
var wallTwo = calculateArea(8, 5);

console.log('wallOne:' + wallOne);
console.log('wallTwo:' + wallTwo);


//getting multiple values out of a function//function can return more than one value using an array
function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}
var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];

//immediately invoked function(IIFE "iffy")
//no name, instead are executed once as the interpreter comes across them
//use them for code that only needs to run once within a task ex: event handlers

var area = (function() {
  var width = 3;
  var height = 2;
  return width * height;
}());
console.log('area IIFE: ' + area);

//variable scope
//area is local scope (best practice!)
//wall size is global scope
function getArea(width, height) {
  var area = width * height;
  return area;
}
var wallSize = getArea(3, 2);
document.write(wallSize);
