/** @format */
"use strict;";
const simpleName = "Malte Skjoldager";
const fullNamePt1 = "Malte Tambo Skjoldager";
const headmaster = "Albus Percival Wulfric Brian Dumbledore";

printName(headmaster);

function printName(name) {
	let firstName, middleName, lastName;
	firstName = name.substring(0, name.indexOf(" ")).trim();
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
fullName("Potter", "Harry", "James");
fullName("Potter", "Harry");
fullName("Harry", "Potter");
fullName("Potter", "Harry", "James", "Pottypotpot");

function fullName(lastName, firstName, middleName) {
	console.log(`${firstName.trim()} ${middleName ? middleName + " " : (middleName = "")}${lastName.trim()}`);
}
