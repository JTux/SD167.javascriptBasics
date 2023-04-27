/* if else statement
if (condition) {
    // if true run this code
} else {
    // if false run this code
}
*/

let num = 2;
if (num > 5) {
    console.log("Your number is greater than 5.");
} else {
    if (num === 5) {
        console.log("Your number is equal to 5.");
    } else {
        console.log("Your number is less than 5.");
    }
}

let weather = "sunny";
    // condition1 false || condition2 truthy
if (weather === "rainy" || "stormy") {
    console.log("Bring an umbrella!");
} else {
    console.log("You don't need an umbrella.");
}

// Truthy/Falsy
if ("storming") {
    console.log("Strings have a truthy value");
}
if (!undefined) {
    console.log("Undefined has a falsy value");
}

if ("" || null || undefined || false || 0) {
    console.log("These are all false or falsy");
}