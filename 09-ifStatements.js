/**
 * if (condition) {
 *  // block of code to be executed/ran if condition is true
 * }
 */

let isOn = true;

// equality operator ===
if (isOn === true) {
    console.log("The light is on!");
}

if (isOn) {
    console.log("The light is still on!");
}

isOn = false;

// Does isOn have a value of true?
if (isOn) {
    console.log("The light has been on for a while!");
}

// (false === false) evaluates to true
if (isOn === false) {
    console.log("The light is off.");
}
// ! bang is the Logical NOT operator, inverts the boolean value
if (!isOn) {
    console.log("The light is still off.");
}