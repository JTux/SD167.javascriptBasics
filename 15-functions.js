// Functions are reusable blocks of code
// They define specific actions that can be "invoked"

// Parentheses indicate it's a function

// 1: function keyword, this declares that it's a function
// 2: function name, this can be named anything
// 3: function body, the code that gets executed/invoked

// Invoking a function || Calling a function
hiMom();
hiMom();

//  (1)   (2)
function hiMom() {
    // (3)
    console.log("Hi mom!");
    console.log("I'm on TV!");
}

// Functions as expressions
// hello is now the same function as hiMom
let hello = hiMom;
hello();

// Function declarations get hoisted
// function expressions do not
let petTheCat = function () {
    console.log("You pet the cat.");
}
petTheCat();

// Functions inside objects (methods)
let counter = {
    // key: value
    timesInvoked: 0,
    invoke: function () {
        console.log("You invoked the counter.invoke method.");
        console.log("THIS KEYWORD", this);
        // The "this" keyword refers to the object scope we're inside
        this.timesInvoked++;
    }
}
counter.invoke();
counter.invoke();
counter.invoke();
console.log(counter.timesInvoked);

/*
    Declare an object that has both a firstName
    and lastName property inside the object.
    Give the object a method (property) that logs
    to the console the full name ("firstName lastName").

    This should be dynamic if the names change.
*/

let person = {
    firstName: "Paul",
    lastName: "O'Connor",
    getFullName: function () {
        // Concatenation
        let fullName = this.firstName + " " + this.lastName;
        // String interpolation
        fullName = `${this.firstName} ${this.lastName}`;
        console.log(fullName);
    }
}
person.getFullName();

// person.lastName = "Doe";
person.firstName = "Jane";
person.getFullName();

// object declaration = { object body }
let banana = {
    // propertyKey: propertyValue
    // What the object is/looks like
    isPeeled: false,
    // functionPropertyKey: functionPropertyValue() {}
    // What the object does
    peel: function () {
        // Function body
        isPeeled = true;
    }
}

let pen = {
    // Properties
    lengthIn: 5,
    color: "Orange",
    isOpen: false,
    // Functions
    open: function () {
        this.isOpen = true;
    },
    close: function() {
        this.isOpen = false;
    }
}

console.log("The pen is open", pen.isOpen);
pen.open();
console.log("The pen is open", pen.isOpen);
pen.close();
console.log("The pen is open", pen.isOpen);

// Arrow Functions
let write = () => {
    console.log("You write something.");
}
// Invoke the function
write();

// Assigning a function to a property of the pen object
pen.jot = write;
pen.jot();