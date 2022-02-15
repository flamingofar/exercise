/** @format */
"use strict;";
const simpleName = "Malte Skjoldager";
const fullNamePt1 = "Malte Tambo Skjoldager";
const headmaster = "Albus Percival Wulfric Brian Dumbledore";

printName(headmaster);

function printName(name) {
	let firstName, middleName, lastName;
	// Get first name
	firstName = name.substring(0, name.indexOf(" ")).trim();

	// If
	if (name.trim().substring(name.indexOf(" ") + 1, name.lastIndexOf(" ")) !== " ") {
		middleName = name.trim().substring(name.indexOf(" ") + 1, name.lastIndexOf(" "));
	} else {
		middleName = null;
	}

	lastName = name.substring(name.lastIndexOf(" "), name.length).trim();
	console.table({ firstName, middleName, lastName });

	fullName(lastName, firstName, middleName);
}

// Nameparts Pt.2
// fullName("Potter", "Harry", "James");
// fullName("Potter", "Harry");
// fullName("Harry", "Potter");
// fullName("Potter", "Harry", "James", "Pottypotpot");

// function fullName(lastName, firstName, middleName) {
// 	console.log(`${firstName.trim()} ${middleName ? middleName + " " : (middleName = "")}${lastName.trim()}`);
// }

// Nameparts Pt.3

function fullName(lastName, firstName, middleName) {
	return `${firstName.trim()} ${middleName ? middleName + " " : (middleName = "")}${lastName.trim()}`;
}

let result = fullName("Potter", "Harry", "James", "Pottypotpot");
console.log("Result", result);
