/**
 * lecture.js
 * Script for the lecture.html fille
 */
// @ts-check
"use strict";

let x = "Hello, World!";
console.log(x);
/**
 * Returns a greeting given a name
 * @param {string} name -name of person to greet
 * @returns {string}
 */
function getGreeting(name) {
    return "Hello, " + name + "!";
}

console.log(getGreeting("Joy"))

let seasons = ["spring", "summer", "fall", "winter"];
console.log(seasons.length);
console.log(seasons[0]);
seasons.push("seattle summer");
console.log(seasons);

for (let i = 0; i < seasons.length; i++) { // do not use for in loops
    console.log(seasons[i]);
} // does not declare variable is a block so doesn't need semicolon 
// objects
let person = { // key: value
    firstName: "Dave",
    lastName: "Stearns"
}; // delcares a new variable so needs semicolon
/* objects are simply maps*/
console.log(person.firstName);
// important! ***
let propName = "firstName";
console.log(person[propName]);

person.title = "Dr";
delete person.firstName;
console.log(person);