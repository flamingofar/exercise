/** @format */

"use strict";

// window.addEventListener("DOMContentLoaded", start);

// const allAnimals = [];

// function start() {
// 	console.log("ready");

// 	loadJSON();
// }

// function loadJSON() {
// 	fetch("animals.json")
// 		.then((response) => response.json())
// 		.then((jsonData) => {
// 			// when loaded, prepare objects
// 			prepareObjects(jsonData);
// 		});
// }

// function prepareObjects(jsonData) {
// 	// Main Animal Object
// 	const Animal = {
// 		name: "",
// 		type: "unknown",
// 		desc: "",
// 		age: 0,
// 	};
// 	jsonData.forEach((jsonObject) => {
// 		// TODO: Create new object with cleaned data - and store that in the allAnimals array
// 		console.log(jsonObject.fullname.substring(jsonObject.fullname.lastIndexOf("the") + 4, jsonObject.fullname.lastIndexOf(" ")));
// 		// console.log(
// 		// 	jsonObject.substring(
// 		// 		0,
// 		// 		jsonObject.fullname.substring(0, jsonObject.fullname.indexOf(" "))
// 		// 	)
// 		// );
// 		const animal = Object.create(Animal);
// 		animal.name = jsonObject.fullname.substring(0, jsonObject.fullname.indexOf(" "));
// 		animal.type = jsonObject.fullname.substring(jsonObject.fullname.lastIndexOf(" ") + 1);
// 		animal.desc = jsonObject.fullname.substring(jsonObject.fullname.lastIndexOf("the") + 4, jsonObject.fullname.lastIndexOf(" "));
// 		animal.age = jsonObject.age;

// 		allAnimals.push(animal);

// 		// TODO: MISSING CODE HERE !!!
// 	});

// 	console.log("This is all the animals", allAnimals);

// 	displayList();
// }

// function displayList() {
// 	// clear the list
// 	document.querySelector("#list tbody").innerHTML = "";

// 	// build a new list
// 	allAnimals.forEach(displayAnimal);
// }

// function displayAnimal(animal) {
// 	// create clone
// 	const clone = document.querySelector("template#animal").content.cloneNode(true);

// 	// set clone data
// 	clone.querySelector("[data-field=name]").textContent = animal.name;
// 	clone.querySelector("[data-field=desc]").textContent = animal.desc;
// 	clone.querySelector("[data-field=type]").textContent = animal.type;
// 	clone.querySelector("[data-field=age]").textContent = animal.age;

// 	// append clone to list
// 	document.querySelector("#list tbody").appendChild(clone);
// }

// // Filtering function which takes a filtering function as an argument
// function prepareData(filterFunction) {
// 	let filteredAnimals = allAnimals.filter(filterFunction);
// 	return filteredAnimals;
// }

// // Filtering options
// function isCat(animal) {
// 	if (animal.type === "cat") {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// function isDog(animal) {
// 	if (animal.type === "dog") {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// function isDragon(animal) {
// 	if (animal.type === "dragon") {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// function all(animals) {
// 	return true;
// }

/* SORTING */
const animals = [
	{ name: "Mandu", type: "cat" },
	{ name: "Mia", type: "cat" },
	{ name: "Leeloo", type: "dog" },
	{ name: "Freddie", type: "dog" },
];

function compareName(a, b) {
	if (a.name < b.name) {
		return -1;
	} else {
		return 1;
	}
}

// console.log(animals);

let filteredArray = animals.filter((animal) => {
	if (animal.type === "cat") {
		return true;
	} else {
		return false;
	}
});
filteredArray.sort(compareName);
console.table(filteredArray);
