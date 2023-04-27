let tempF = 80;

if (tempF <= 50) {              // <= 50
    console.log("It is cold.");
} else if (tempF <= 60) {       // > 50 && <= 60
    console.log("It is cool.");
} else if (tempF <= 80) {       // > 60 && <= 80
    console.log("It is warm.");
} else {                        // > 80
    console.log("It is hot.");
}

let weather = "sunny";
let response;

if (weather === "sunny") {
    response = "It's nice out.";
} else if (weather === "lightly cloudy") {
    response = "It's mostly nice out.";
} else if (weather === "mostly cloudy") {
    response = "It's cloudy out.";
} else if (weather === "rainy") {
    response = "Bring an umbrella";
} else if (weather === "storming") {
    response = "Stay inside.";
}

// Truthy/Falsy value of response variable
if (response) {
    console.log(response);
} else {
    console.log("Please enter a valid weather.");
}