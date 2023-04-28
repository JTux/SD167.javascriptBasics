// Loops allow us to repeat code while a given condition is true

// For loop -> loops for a given amount
/*
for (initialExpression; conditionalExpression; incrementExpression) {
    // Body of code to be executed each loop
}
- initialExpression set the starting value of the iterator
- condtionalExpression is evaluated and if true stay in the loop, else break
- incrementExpression updates the iterator
*/
//              0           1           2           3
let pets = ["Apollo", "Artemis", "Persephone"]; // 3

// console.log("Don't forget to pet _______");

// i is our iterator
// for (let i = 0; i < pets.length; i++) { // i = i + 1
//     // console.log(i, pets[i]);
//     console.log(`Don't forget to pet ${pets[i]}.`)
// }

// Loop from 1 - 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// For in loop
let student = {
    name: "Jackson",
    awesome: true,
    weeksExperience: "At least 1",
    hasCamOn: false
};

for (key in student) {
    console.log("KEY", key);
    console.log("VALUE", student[key]);
}

// For of loops
for (const pet of pets) {
    console.log(pet);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
for (const letter of alphabet) {
    console.log(letter);
}

// While Loop
// while (condition) {
//      // Body of the loop
// }

let countDown = 100;
while (countDown >= 0) {
    console.log("tick tock", countDown);

    // countDown = countDown - 1;
    countDown--;
}