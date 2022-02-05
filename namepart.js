/** @format */
"use strict;";
const fullName = "Malte Tambo Skjoldager";
const headmaster = "Albus Percival Wulfric Brian Dumbledore";

printName(headmaster);

function printName(name) {
	let firstName = name.substring(0, name.indexOf(" ")).trim();
	console.log(firstName);
	let middleName = name
		.substring(name.indexOf(" "), name.lastIndexOf(" "))
		.trim();
	console.log(middleName);
	let lastName = name.substring(name.lastIndexOf(" "), name.length).trim();
	console.log(lastName);
}
