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
	r = Math.floor(Math.random() * 255);
	g = Math.floor(Math.random() * 255);
	b = Math.floor(Math.random() * 255);
	return { r, g, b };
}

function rgbToCSS(rgbObj) {
	return `rgb(${rgbObj.r}, ${rgbObj.g}, ${rgbObj.b})`;
}
