//Step 2
//Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
let userNum = ""    //so I can store the value on a global scale (specifically step 3)
for(let i=0; i>-2;i++){   //create an infinite loop that will only 'break' with a valid input.
    userNum = prompt(`Please choose an odd number between 1 and 50.`);  //Prompt the user for an odd number between 1 and 50.
    if(userNum % 2 !== 0 && (userNum<50 && userNum>0)){
        break
    }else {console.log(`What is wrong with this user...
    fail counter at ${i+1}`)}
    alert(`Try choosing a valid input...`)
}

//Step 3
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:
//
//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49
console.log("Number to skip is: " + userNum +'\n  ')    //recreating the first two lines of the desired output
for(let i=1; i<50; i+= 2) {     //create a loop for odd numbers between 1 and 50
    if(i !== (parseInt(userNum))) {
        console.log(`Here is an odd number: ${i}`)  //output all odd numbers as a console.log
continue    //continue each iteration minus the userNumber (userNum)
    } else {
        console.log(`Yikes! Skipping number: ${userNum}`)
    }
}
