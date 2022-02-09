/** @format */

"use strict;";

console.log("Hello from art.js");

const art = document.querySelectorAll(".artwork");

function start() {
	// Artwork 1
	for (let i = 100; i < 300; i += 20) {
		art[0].innerHTML += `<div class="box" style="width:${i}px; height:${i}px"></div>`;
	}

	// Artwork 2
	for (let i = 0; i < 90; i += 10) {
		art[1].innerHTML += `<div class="box" style="transform:rotate(${i}deg);"></div>`;
	}

	// Artwork 3
	for (let i = 0; i < 200; i += 10) {
		art[2].innerHTML += `<div class="circle" style="width:${i}px; height:${i}px"></div>`;
	}

	// Artwork 4
	for (let i = -90; i < 90; i += 20) {
		art[3].innerHTML += `<div class="box" style="transform: translate(${i}px, ${i}px);"></div>`;
	}

	// Artwork 5
	for (let i = 1; i < 512; i *= 2) {
		art[4].innerHTML += `<div class="circle" style="width:${i}px; height:${i}px"></div>`;
	}

	// Artwork 6
	for (let i = -20; i < 45; i += 5) {
		art[5].innerHTML += `<div class="circle" style="transform: translateX(${
			i - 50
		}px) rotate(${i * 4}deg);"></div>`;
	}

	// Artwork 7
	for (let i = 0; i < 200; i += 10) {
		art[6].innerHTML += `<div class="circle" style="width:${i}px; height: ${i}px; transform: translate(${i}px, ${
			-i / 2
		}px)"></div>`;
	}

	// Artwork 8
	for (let i = 50; i < 200; i += 10) {
		art[7].innerHTML += `<div class="box" style="width:${i}px; height: ${i}px; transform: translate(${
			i / 2
		}px) rotate(${i}deg)"></div>`;
	}

	// Artwork 9
	for (let i = 50; i < 200; i += 30) {
		art[8].innerHTML += `<div class="circle box" style="width:${i}px; height: ${i}px;"></div>`;
	}
}

start();
