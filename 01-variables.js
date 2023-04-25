// JavaScript Variable Declaration
var myFirstVariable; // camelCasing

// Initialization
var patientId; // declaring the variable
patientId = 120024; // initializing the variable
console.log(patientId);

var lastName; // declare
lastName = "Tucker"; // initialize
console.log("Lastname:", lastName);
// lastName: 0x0000000 ["Tucker"]

var banana = lastName; // value type
console.log("Banana:", banana);
// banana: 0x0000001 ["Tucker"]

// re-initialize (reassigning)
lastName = "Slegers";
console.log("Lastname:", lastName);
// lastName: 0x0000000 ["Slegers"]

console.log("Banana:", banana)

// lastName: 0x0000000 ["Slegers"]
// banana: 0x0000001 ["Tucker"]



// Var and Hoisting
programmer = "Ada Lovelace";
var programmer;
console.log("Programmer:", programmer);

// Let and Hoisting
let jsVersion;
jsVersion = "es6";
console.log("Let:", jsVersion);
// Let has to be declared before it can be initialized

// Const and Re-initialization
const humansBestFriend = "cat";
// humansBestFriend = "dog";
// Cannot reinitialize a const variable as it's constant

const gratuity = .2;

let mealCost = 30;