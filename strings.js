/** @format */
"use strict";
console.log("Hello Basics");

const longline =
	"a very, very, very, very, VERY! long line of text.\nThat spands across the width og the editor!";

console.log(longline);

const name = "John";
const drink = "Coffee";

console.log(`Hello ${name}, would you like a ${drink}?`);
// ${variable} inserts the value og the variable in the string.
// Classic concatenation would look like this
console.log("Hello " + name + ", would you like a " + drink + "?");

// Template Literals Exercise
const name1 = "Peter";
const cat = "Mandu";
console.log(`My name is ${name1}.\nI have a cat 
called ${cat}`);
