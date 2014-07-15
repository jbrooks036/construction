/* jshint -W069 */
/* global prompt:true */
'use strict';

var prompt = require('sync-prompt').prompt;

// creating an object manually
// 5 equivalent ways to create dogs

var d1 = {};
d1.name = 'fido';
d1.age = 3;

var d2 = {name:'spot', age:5};

var d3 = {};
d3['name'] = 'lassie';
d3['age'] = 9;

var n = 'rex';
var a = 11;
var d4 = {name:n, age:a}; // json = javascript object notation

var name = 'name';
var age = 'age';
var d5 = {};
d5[name] = n;
d5[age] = a;

var dogs = [];

dogs.push(d1,d2,d3,d4,d5);

console.log('Dogs:', dogs);

// creating objects using a constructor
//

console.log(d1 instanceof Dog);
console.log(d1 instanceof Object); 

function Dog(name, age){
  this.name = name;
  this.age = age;
}

var d6 = new Dog('fluffy', 2);

console.log(d6);

console.log(d6 instanceof Dog);
console.log(d6 instanceof Object);

// create a bunch of dogs and add to array
var option = true;

while (option) {
  var dName = prompt('dog name: ');
  var dAge = prompt('dog age: ');
  dogs.push(new Dog(dName, dAge));

  option = ((prompt('enter a dog? y/n ') !== 'n') ? true : false);
}

console.log(dogs);

