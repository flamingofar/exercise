/** @format */
"use strict;";

// console.log("Hello Basics");
randomBackground();

function randomBackground() {
	const rgbObj = randomColor();
	const cssColor = rgbToCSS(rgbObj);

	document.body.style.backgroundColor = cssColor;
}

function randomColor() {
	let r, g, b;
	r = generateRandomColor();
	g = generateRandomColor();
	b = generateRandomColor();
	return { r, g, b };
}

function generateRandomColor() {
	return Math.floor(Math.random() * 256);
}

function rgbToCSS(rgbObj) {
	return `rgb(${rgbObj.r}, ${rgbObj.g}, ${rgbObj.b})`;
}
