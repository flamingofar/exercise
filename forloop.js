/** @format */
"use strict;";

console.log("Hello For Loop");

// From 0-9
for (let counter = 0; counter <= 9; counter++) {
	console.log(counter);
}

// From 1-10
for (let counter = 1; counter <= 10; counter++) {
	console.log(counter);
}

// From 10-0, and after 0 it console logs the text :"We have liftoff"
for (let counter = 10; counter >= 0; counter--) {
	console.log(counter);
}
console.log("We have liftoff");

// From 1-19, but only counts odd numbers (no if-statement; Change the increment)
for (let counter = 1; counter <= 19; counter += 2) {
	console.log(counter);
}

// From 1-16777216, but doubling each time (2, 4, 8, 16...)
for (let counter = 2; counter <= 16777216; counter *= 2) {
	console.log(counter);
}

// From 111-138, in steps of three (Meaning the second number is 114(111+3))
for (let counter = 111; counter <= 138; counter += 3) {
	console.log(counter);
}
// From 111-138, in steps of three (Meaning the second number is 114(111+3))
for (let counter = 100; counter >= 0; counter -= 10) {
	console.log(counter);
}
