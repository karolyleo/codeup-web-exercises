"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(name){
    return name === 'red' ? "Strawberries are red"
        :name=== 'orange' ? "Sunsets are sometimes orange"
            :name=== 'yellow' ? "Bananas are yellow"
                :name=== 'green' ? "Grass are green"
                    :name === 'blue' ? "Oceans are blue"
                        : "I don't know anything about " + name;
}
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(randomColor){
    let colorResponse = "";
switch(randomColor) {
    case 'red':
        colorResponse = "Apples are red";
        break;
    case 'orange':
        colorResponse = "Ducks have orange beaks";
        break;
    case 'yellow':
        colorResponse = "Bananas are yellow";
        break;
    case 'green':
        colorResponse = "Frogs are green";
        break;
    case 'blue':
        colorResponse = "Oceans are blue";
        break;
    default:
        colorResponse = "I don't know anything about " + randomColor;
        break;
}
return colorResponse;
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let userColor = prompt("What is your favorite color?");
let analyzeUserColor = analyzeColor(userColor);
alert(analyzeUserColor);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNum, totalAmount) {
    let discount =
        luckyNum === 5 ? 1
        :luckyNum === 4 ? .5
            :luckyNum === 3 ? .35
                :luckyNum === 2 ? .25
                    :luckyNum === 1 ? .1
                        : 0;
    let totalDiscount = totalAmount * discount;
    let finalPrice = totalAmount - totalDiscount;
    return finalPrice;
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
let totalBill = prompt("What was your total bill?");
let discountedPrice = calculateTotal(luckyNumber, totalBill);
alert("Your lucky number is " + luckyNumber + ". Your price before the discount was $" + totalBill + ". Your price after the discount is $" + discountedPrice + ".");

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let userInput = confirm("Would you like to input a number?");
let userResponse = prompt("What is your number?");
let userNum = parseInt(userResponse);
if(userInput === true) {
    if(typeof(userNum)=== 'number') {
        if (userNum % 2 === 0) {
            alert("Your number is even.");
        } else {
            alert("Your number is odd.");
        }
        let numPlusHundred = userNum + 100;
        alert('Your number plus 100 is ' + numPlusHundred);
        userNum >= 0 ? alert("Your number is positive!")
            : alert("Your number is negative");
    } else {
        alert("Incorrect input data type!!")
    }
}
