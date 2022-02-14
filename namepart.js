/** @format */
"use strict;";
const simpleName = "Malte Skjoldager";
const fullName = "Malte Tambo Skjoldager";
const headmaster = "Albus Percival Wulfric Brian Dumbledore";

printName(simpleName);

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
}
