// Boolean true/false Data Type examples

let isLoggedIn = true;
let isAuthenticated = true;
let hasLoggedInToday = false;
let hasToken = false;

// Comparison/Relational Operators

console.log("EQUALS:", 2 == '2'); // Value equality
console.log("STRICT EQUALS:", 2 === '2'); // Value & Type equality

console.log("INEQUALITY:", 3 != '3'); // Values are not equal 
console.log("STRICT INEQUALITY:", 3 !== '3'); // Value & Type inequality

console.log("GREATER THAN:", 5 > 5); // First value is greater than the second
console.log("GREATER THAN or EQUALS:", 5 >= 5); // First is greater/equal to the second

console.log("LESS THAN:", 7 < 8); // 7 is less than 8, true
console.log("LESS THAN or EQUALS:", 8 <= 8); // 8 is less than or equal to 8, true


// Extra examples
let numOne = 5;
let numTwo = 4;

let twoGreaterThanOne = numTwo > numOne;

let savedPassword = "HiMomI'mOnTV!";
let typedPassword = "HiMomImOnTV@";

let isCorrectPassword = savedPassword === typedPassword;
console.log("You have the correct password:", isCorrectPassword);

// Logical Operators

// Logical AND &&
// Logical OR  || (shift + \)
// Logical NOT !  (bang) (Inverse operator)

let x = true;
let y = false;

console.log(x && y);    // True AND False = false, Sunny AND Warm = is nice out
console.log(x || y);    // True OR False = true, Rainy OR Cold = staying inside
console.log(!x);        // NOT True = false, NOT Food = not eating it
console.log(!y);        // NOT False = true, FOOD = eat it