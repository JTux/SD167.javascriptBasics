// Ternaries, or Conditional Operators
/*
condition ? code to run if true : code to run if false;

condition
    ? true code
    : false code;
*/

let gummyBears = 5;

if (gummyBears > 0) {
    console.log("I'm going to eat so many gummy bears!");
} else {
    console.log("I'm sad.");
}

gummyBears > 5 // Condition
    ? console.log("I'm going to eat gummy bears.") // True
    : console.log("Isaac ate my gummy bears. :("); // False

let isLeaving = true;
//            condition ? true       : false
let message = isLeaving ? "Goodbye!" : "Hello, glad to have you.";
console.log(message);

let num = 2;

message = (num > 5) 
    ? "Your number is greater than 5." 
    : (num === 5) 
        ? "Your number equals 5."
        : "Your number is less than 5.";

console.log(message);