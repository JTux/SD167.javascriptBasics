// Function defines an action
// Parameters define the input
// Return defines the output

// let consoleReturnValue = console.log("Example")
// console.log(consoleReturnValue);

let person1 = {
    firstName: "Joshua",
    lastName: "Tucker"
};

let person2 = {
    firstName: "Paul",
    lastName: "O'Connor"
};

function getFullName(person) {
    let fullName = person.firstName + " " + person.lastName;
    //  fullName = `${person.firstName} ${person.lastName}`;
    return fullName;
}

let fullName = getFullName(person1);
console.log(fullName);

// Passes the returned value straight to console.log()
console.log(getFullName(person2));

function add(num1, num2) {
    let total = num1 + num2;
    return total;
}
function subtract(num1, num2) {
    return num1 - num2;
}
// Block body arrow function (uses curly braces)
let multiply = (num1, num2) => {
    return num1 * num2;
}
// Concise Body arrow function (no curly braces)
// concise body functions return by default
let divide = (num1, num2) => num1 / num2;

let sum = add(5, 7);
console.log("SUM", sum);
console.log("SUBTRACT", subtract(5, 7));
console.log("MULTIPLY", multiply(5, 7));
console.log("DIVIDE", divide(5, 7));

// Constructor Functions
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
// The new keyword creates a new Person object instance
// news up an "instance" a specific copy of a type (Person)
let person3 = new Person("Ingeborg", "Slegers");
let person4 = new Person("Adam", "Jayne");
// console.log(person3);
// console.log(person1);

let people = [person1, person2, person3, person4];
console.log(people);

let getLongestName = (names) => {
    let longestName;
    let longestLength = 0;

    for (const name of names) {
        if (name.length > longestLength) {
            longestName = name;
            longestLength = name.length;
        } else if (name.length === longestLength) {
            longestName = [longestName, name].flat();
        }
    }

    return longestName;
}

let fullNames = [];

// .foreach method loops over every item in an array
// takes in a callback function (our arrow function below)
people.forEach((person) => {
    let fullName = getFullName(person);
    fullNames.push(fullName);
});

let longestName = getLongestName(fullNames);
console.log(longestName);

let students = ["Braulio", "Brianne", "Edwin", "Garrett", "Isaac", "Jackson", "Marla", "Shelby"];
let longestStudentName = getLongestName(students);
console.log(longestStudentName);

