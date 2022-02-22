"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [],
	filteredAnimals,
	filter = "*";

const settings = {
	filter: null,
	sortBy: null,
	sortDir: "asc",
};

// The prototype for all animals:
const Animal = {
	name: "",
	desc: "-unknown animal-",
	type: "",
	age: 0,
	// TODO: Add star
	star: false,
	stars: [],
};

function start() {
	console.log("ready");

	loadJSON();

	// FUTURE: Add event-listeners to filter and sort buttons
	const sortBtns = document.querySelectorAll("[data-action=sort]");
	sortBtns.forEach((btn) => {
		btn.addEventListener("click", sortingFunction);
	});

	const filterBtns = document.querySelectorAll("[data-action=filter]");
	filterBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			filter = e.target.value;
			buildList();
		});
	});
}

async function loadJSON() {
	const response = await fetch("animals.json");
	const jsonData = await response.json();

	// when loaded, prepare data objects
	prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
	allAnimals = jsonData.map(prepareObject);
	filteredAnimals = allAnimals;
	// filteredAnimals = prepareData(all);
	// TODO: This might not be the function we want to call first
	displayList(filteredAnimals);
}

function prepareObject(jsonObject) {
	const animal = Object.create(Animal);

	const texts = jsonObject.fullname.split(" ");
	animal.name = texts[0];
	animal.desc = texts[2];
	animal.type = texts[3];
	animal.age = jsonObject.age;
	animal.star = false;
	animal.stars = ["⭐", "☆"];

	return animal;
}

function buildList() {
	/************************** FILTERING ******************* */
	if (filter !== "*") {
		filteredAnimals = allAnimals.filter(isAnimalType);
	} else {
		filteredAnimals = allAnimals;
	}
	// prepareData(isCat(filter));
	function isAnimalType(animal) {
		if (animal.type === filter) {
			return true;
		} else {
			return false;
		}
	}
	displayList(filteredAnimals);
}

function displayList(animals) {
	// clear the display
	document.querySelector("#list tbody").innerHTML = "";

	// build a new list
	animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
	// create clone
	const clone = document.querySelector("template#animal").content.cloneNode(true);

	// set clone data

	// TODO: Show star ⭐ or ☆ DONE
	clone.querySelector("[data-field=name]").textContent = animal.name;
	clone.querySelector("[data-field=desc]").textContent = animal.desc;
	clone.querySelector("[data-field=type]").textContent = animal.type;
	clone.querySelector("[data-field=age]").textContent = animal.age;
	animal.star ? (clone.querySelector("[data-field=star]").textContent = animal.stars[0]) : (clone.querySelector("[data-field=star]").textContent = animal.stars[1]);

	// TODO: Add event listener to click on star
	clone.querySelector("[data-field=star]").addEventListener("click", () => {
		animal.star = !animal.star;
		buildList();
	});

	// append clone to list
	document.querySelector("#list tbody").appendChild(clone);
}

/************************* SORTING ***************************/
function sortingFunction() {
	let sortParam = this.dataset.sort;
	let direction = this.dataset.sortDirection;

	if (direction === "asc") {
		this.dataset.sortDirection = "desc";
	} else {
		this.dataset.sortDirection = "asc";
	}

	function sortFunction(direction) {
		if (direction === "asc") {
			filteredAnimals.sort(compare);
		} else {
			filteredAnimals.sort(compareReverse);
		}
		displayList(filteredAnimals);
	}

	function compare(a, b) {
		if (a[sortParam] < b[sortParam]) {
			return -1;
		} else {
			return 1;
		}
	}
	function compareReverse(a, b) {
		if (a[sortParam] > b[sortParam]) {
			return -1;
		} else {
			return 1;
		}
	}
	sortFunction(direction);
}
