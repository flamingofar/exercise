/** @format */
"use strict;";
const simpleName = "Malte Skjoldager";
const fullNamePt1 = "Malte Tambo Skjoldager";
const headmaster = "albus percival wulfric brian dumbledore";

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
	// console.table({ firstName, middleName, lastName });

	// fullName(lastName, firstName, middleName);
	return { firstName, middleName, lastName };
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

// let result = fullName("Potter", "Harry", "James", "Pottypotpot");

// Create a function getNameParts( fullName ), that receives a string in any case, splits it into three parts: firstName, middleName and lastName, capitalizes each part correctly, and returns an object with all three parts.
returnedFullName = getNameParts(headmaster);
console.table(returnedFullName);

function getNameParts(fullName) {
	nameObj = printName(fullName);
	let firstName, middleName, lastName;
	//Get first name capitalized
	firstName = capitalization(nameObj.firstName);
	//Get middle name capitalized
	middleName = capitalizationMiddleName(nameObj.middleName);
	//Get last name capitalized
	lastName = capitalization(nameObj.lastName);

	return { firstName, middleName, lastName };
}

function capitalization(name) {
	let firstLetter = name.substring(0, 1).toUpperCase();
	return `${firstLetter}${name.substring(1).toLowerCase()}`;
}

function capitalizationMiddleName(middleName) {
	// Capitalize middle name
	middleName = capitalization(middleName);
	// If middlename contains more names, capitalize those
	// Split into array
	const textArr = middleName.split("");
	textArr.forEach((el, idx, arr) => {
		// If element index contains - or space, element before is uppercased
		if (el === "-" || el === " ") {
			arr[idx + 1] = arr[idx + 1].toUpperCase();
		}
	});
	// Joining the array to a string
	result = textArr.join("");
	return result;
}
capitalizationMiddleName("percival wulfric brian");
