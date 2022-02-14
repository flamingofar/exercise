/** @format */
"use strict;";

console.log("Hello Color Convert");

let hex = "#c0ffee";
let converted = colorConvert(hex);

function colorConvert(hex) {
	r = parseInt(hex.substring(1, 3), 16);
	g = parseInt(hex.substring(3, 5), 16);
	b = parseInt(hex.substring(5, 7), 16);
	return { red: r, green: g, blue: b };
}
console.log(converted);
