let red = "#ff0000";
let orange = "Orange";
let yellow = "Yellow";
let green = "Green";
let blue = "Blue";
let indigo = "Indigo";
let violet = "Violet";

// Arrays hold multiple items in one variable
// Arrays use [] to wrap around their items
let colors = [red, orange, yellow, green, blue, indigo, violet];
console.log(colors);

//           index: 0,  1,  2
let raceWinners = [33, 72, 64]; // Array of numbers
console.log(raceWinners);

// Arrays can hold any type of item
let randomThings = ["Broccoli", 37, colors, true, undefined];
console.log("Random Things:", randomThings);

// Indexing
let broc = randomThings[0]; // First item in the array randomThings
console.log(broc);

// More Practice
/*
    Print "Shiba Inu"
    Print the second value of the second array.
    Print "Guppy".
    Print the first value of the birds array.
*/
let dogs = ["Shiba Inu", "Husky", "Corgi", "Great Dane"];
let cats = ["Maine Coon", "Bengal", "Siamese", "Sphynx"];
let birds = ["African Grey Parrot", "Canary", "Macaw", "Finch"];
let fish = ["Goldfish", "Neon Tetra", "Betta", "Guppy"];

console.log(dogs[0]);
console.log(cats[1]);

let gup = fish[3];
console.log(gup);

let firstBird = birds[0];
console.log(firstBird);

// Multidimensional Array (An array of arrays)
let animals = [dogs, cats, birds, fish];
console.log(animals);

let siamese = animals[1][2];
/*
    let cats = animals[1]; -> returns an array
    let siamese = cats[2]; -> index into the first array
*/
console.log(siamese);

// Array Methods
// A method is an action that can be performed on an object (array)

let birdsLength = birds.length; // length property
console.log("Before shift:", birdsLength);

// .shift() removes the first item from the array and returns it
let firstItem = birds.shift();
console.log("After shift:", birds.length);

console.log(firstItem);
console.log(birds);

// .unshift() adds an item to the beginning of an array
birds.unshift("Robin");
console.log(birds);

// .pop() is like shift, but for the end of the array
let lastBird = birds.pop();
console.log(lastBird);
console.log(birds);

// .push() will add an item to the end of an array
birds.push("Pigeon");
birds.push("Eagle", "Hawk");
console.log(birds);

// .reverse() will reverse the order of the array
birds.reverse();
console.log(birds);

// .slice() copy a specified section of an array
let slice = birds.slice(1, 3);
console.log(slice);
console.log(birds);

// .splice() remove a specified section from an array
let removedBirds = birds.splice(1, 2);
console.log(removedBirds);
//      0       1       2           3       4       5
// [ 'Hawk', 'Eagle', 'Pigeon', 'Macaw', 'Canary', 'Robin' ]
console.log(birds);

birds.splice(2, 2, "Freedom Bird");
console.log(birds);

// .includes() checks to see if an item is in an array
let includesHawk = birds.includes("Hawk");
let includesEagle = birds.includes("Eagle");
console.log(includesHawk, includesEagle);

// .join() combine the items in an array into one string
// Can also add a "separator" to add between the items
let listOfBirds = birds.join("\n");
console.log(listOfBirds);