//Step 2
//showMultiplicationTable(7)     // For example, showMultiplicationTable(7) should output // this is just an example so no need to have it logged everytime...
//create a function named showMultiplicationTable
const showMultiplicationTable = (num) => {  //must accept a number (num): allow users to input a number via prompt...
    for(let i=1; i<=10;i++) {
        console.log(`${num} x ${i} = ` + num * i);  // console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

    }
}
showMultiplicationTable(parseInt(prompt(`What number would you like to see? (in the console)`)))    // tested manually showMultiplicationTable(7) => now users can input/break it through a prompt...

//Step 3
//create a loop for 10 cycles
for(let i=0; i<10;i++) {
    let sumNum = ranNum(20, 200);   //get a random num between 20 & 200 (Check the function at the end).
    console.log((sumNum%2===0)? `${sumNum} is even` : `${sumNum} is odd`);  //console log as the examples: 123 is odd ,80 is even ,24 is even ,199 is odd.
}
function ranNum(min, max){      //inspired by mdn_web_docs url- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    min = Math.ceil(min);max = Math.floor(max);     //define max and min
    return Math.floor(Math.random() * (max - min + 1) + min);   // The max and min are inclusive
}

//Step 4
//Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
for(let row=1; row<=9; row++) {   //create a loop 9 times
    console.log((row * (placeValue(row))));//console.log each outcome
}
function placeValue(num){   //create a function that repeats '1' a desired amount of times then multiply it by i
    let ones = 1;
    for(let i=1;i<num;i++) {
ones += (Math.pow(10, i));
    }
    return ones;
}

//Step 5
// Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
for(let start = 100; start>0; start-= 5) {  //create a loop going down before zero
    console.log(start);//console.log each iteration
}