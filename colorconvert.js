/** @format */
"use strict;";

console.log("Hello Color Convert");

// HEX to RGB
let hex = "#c0ffee";
let convertedHex = colorConvert(hex);

function colorConvert(hexString) {
	r = parseInt(hexString.substring(1, 3), 16);
	g = parseInt(hexString.substring(3, 5), 16);
	b = parseInt(hexString.substring(5, 7), 16);
	return { r, g, b };
}
console.log(convertedHex);

// RGB TO HEX
let rgb = { r: 4, g: 119, b: 123 };
let convertedRGB = rgbToHex(rgb);
function rgbToHex(rgbObject) {
	return `#${convertion(rgbObject.r)}${convertion(rgbObject.g)}${convertion(rgbObject.b)}`;
}
function convertion(color) {
	let hex = color.toString(16);
	return hex.length === 1 ? "0" + hex : hex;
}
console.log(convertedRGB);

// CSS to RGB
let css = "rgb(192, 13, 1)";

function cssToRGB(css) {
	const rawTxt = css
		.substring(css.indexOf("(") + 1, css.indexOf(")"))
		.trim()
		.split(", ");
	let r, g, b;
	r = parseInt(rawTxt[0].trim());
	g = parseInt(rawTxt[1].trim());
	b = parseInt(rawTxt[2].trim());
	console.log(`RGB Values are: r:${r}, g:${g}, b:${b}`);
}
cssToRGB(css);
