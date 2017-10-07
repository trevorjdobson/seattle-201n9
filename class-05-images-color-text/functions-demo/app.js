'use strict';
///gloval vs. local scope
//global scope x = 15;
var x = 15;
function foo() {
  console.log('I am outside of bar: ' , x);
  function bar() {
    //local scope x = 25;
    var x = 25;
    console.log('I am inside of bar: ', x);
  }
  bar();
}
foo();

///IIFE
(function() {
  var x = 10;
  x++;
  console.log(x);
})();
