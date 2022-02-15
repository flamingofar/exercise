/** @format */
"use strict;";

console.log("Capitalization");

/*
 * Old Exercise
 */
// let name = "malte";
// capitalization(name);

// function capitalization(name) {
// 	let firstLetter = name.substring(0, 1).toUpperCase();
// 	console.log(`${firstLetter}${name.substring(1).toLowerCase()}`);
// }

// Capitalize Pt.3
let name = "malte";
let result = capitalization(name);

function capitalization(name) {
	let firstLetter = name.substring(0, 1).toUpperCase();
	return `${firstLetter}${name.substring(1).toLowerCase()}`;
}

console.log(result);
