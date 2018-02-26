'use strict';

var hi = `Hello`;

function greet(name) {
  console.log(hi + ', ' + name + '!');
}

function sum(a, b) {
  console.log('a=' + a + ',b=' + b);
  console.log('a + b = ' + (a + b));
}

module.exports = {
  greet:greet,
  sum:sum,
  hi:hi
};
