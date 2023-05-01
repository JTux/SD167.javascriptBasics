// Parameters are placeholders for data we will pass into a function
// We "pass in" the parameters when we invoke (call) the function

// An example is the console.log(<parameter>)

// functionKeyword methodName( parameters )
function greet(name) {
    //log is the function
    // `Hello ${name}!` is the argument
    console.log(`Hello ${name}!`);
}

// greet is the function
// name is the Parameter
// "Josh", "Brianne", etc. are Arguments
greet("Josh");
greet("Brianne");
greet("Jackson");
greet("Apollo");

function add(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}

add(62, 107);
add(5, 8);
add(10, 10000);
add(3, 0.14);

// function: keyword - indicates that it's a function
// subtract: method name - can be whatever, should relate to the action
// (num1, num2): parameters - define input variables
function subtract(num1, num2) {
    console.log(num1 - num2);
}
// 62, 107: arguments
subtract(62, 107);
subtract(5, 8);
subtract(10, 10000);
subtract(3, 0.14);

let person1 = {
    firstName: "Joshua",
    lastName: "Tucker"
};

let person2 = {
    firstName: "Paul",
    lastName: "O'Connor"
};

// Arrow Function Expression
// let greetPerson = function (person) {
let greetPerson = (person) => {
    // get the full name
    let fullName = `${person.firstName} ${person.lastName}`;
    // create my greeting
    let greeting = `Howdy there, ${fullName}!`;
    // log to the console
    console.log(greeting);
}

greetPerson(person1);
greetPerson(person2);

let exampleArray = ["1", 2, 3, "thing4"]
function printArray(array) {
    for (const o of array) {
        console.log(o)
    }
}
printArray(["1", 2, 3, "thing4"]);
printArray(exampleArray);