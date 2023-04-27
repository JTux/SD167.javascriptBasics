// Switch Statements / Switch Cases
/*
switch (valueToAssess) {
    case valueX:
        // code block to execute
        break;
    case valueY:
        // code block to execute
        break;
    default:
        // code for when no cases match
        break;
}
*/

let ingredient = "ChiCkEN";

switch (ingredient.toLowerCase()) {
    case "ground beef":
        // if ingredient matches "Ground Beef"
        console.log("Let's make burgers.");
        break;
    case "fish":
    case "cod":
    case "salmon":
        console.log("Let's make grilled fish.");
        break;
    case "chicken":
        console.log("Let's make chicken tacos.");
        break;
    default: // Catch all else
        console.log("I guess we'll order something.");
        break;
}