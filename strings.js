/** @format */
"use strict";
// console.log("Hello Basics");

const longline =
	"a very, very, very, very, VERY! long line of text.\nThat spands across the width og the editor!";

// console.log(longline);

const name = "Malte";
const drink = "Coffee";

// console.log(`Hello ${name}, would you like a ${drink}?`);
// ${variable} inserts the value og the variable in the string.
// Classic concatenation would look like this
// console.log("Hello " + name + ", would you like a " + drink + "?");

// ************************************* Template Literals Exercise *************************************
const name1 = "Peter";
const cat = "Mandu";
// console.log(`My name is ${name1}.\nI have a cat called ${cat}`);

// .length and [index]
const len = name.length;

// console.log(`${name} is ${len} characters long`);

const letter = name[1];

// console.log(`The first letter of ${name} is ${letter}`);

// ************************************* .length and [index] exercise *************************************
const headmaster = "Albus Percival Wulfric Brian Dumbledore";
// 1. What is the total numbers of characters, including spaces?
console.log(
	`The total numbers of characters, including spaces, is ${headmaster.length}`
);
// 2. What is the character at index 2?
console.log(`The character at index 2 is ${headmaster[2]}`);
// 3. Which character is at index 6?
console.log(`The character of index 6 ${headmaster[6]}`);
// 4. What is the index of the first D in Dumbledore?
console.log(
	`The index of the first D in Dumbledore is ${headmaster.indexOf("D")}`
);
// 5. What is the index of the last e in Dumbledor?
console.log(
	`The total numbers of characters, including spaces, is ${headmaster.lastIndexOf(
		"e"
	)}`
);
