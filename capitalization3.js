/** @format */
"use strict;";

console.log("capitalization3");

let name = "christian";
capitalization(name);

function capitalization(name) {
	let thirdLetter = name.substring(2, 3).toUpperCase();
	console.log(
		`${name.substring(0, 2).toLowerCase()}${thirdLetter}${name
			.substring(3)
			.toLowerCase()}`
	);
}
