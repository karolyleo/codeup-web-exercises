//Step 2
// Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536
let i = 1
while(i<17){    // Create a while loop
    console.log(Math.pow(2, i));    //use a console.log()
    i++;
}

//Do While Loop
//An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.
//var allCones = Math.floor(Math.random() * 50) + 50;     // This is how you get a random number between 50 and 100
//Math.floor(Math.random() * 5) + 1;  // This expression will generate a random number between 1 and 5
//These given functions are nice, but I want to practice the mdn generator
//
// The output should be similar to the following:
//
//     5 cones sold...          // if there are enough cones
// Cannot sell you 6 cones I only have 3...         // If there are not enough cones
// Yay! I sold them all!        // If there are no more cones
let conesToSell = ranNum(50, 100);   //First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.
console.log(`I have ${conesToSell} cones to sell today.`);
do {
    let clientBuy = ranNum(1, 5);    //Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
    if(clientBuy<=conesToSell){
    conesToSell -= clientBuy; //if there is enough cones to sell then the client can buy
        console.log(`${clientBuy} cone${(clientBuy > 1)?'s':''} sold... (I have ${conesToSell} left)`);//Use a do-while loop to log to the console the amount of cones sold to each person
    if (conesToSell ===0) {
        console.log(`Yay! I sold them all!`);
    }
    } else {
        console.log(`Cannot sell you ${clientBuy} cones I only have ${conesToSell}...`); //there is not enough cones to sell to fufill the client's needs
    }
} while (conesToSell>0)

function ranNum(min, max) {      //inspired by mdn_web_docs url- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    min = Math.ceil(min);
    max = Math.floor(max);     //define max and min
    return Math.floor(Math.random() * (max - min + 1) + min);   // The max and min are inclusive
}


let num = 9
let art = ['This is my art', '\n']


for(let i=1;i<=num;i++) {
    if ((i <= (num / 2))) {
        for (let h = 1; h <= i; h++) {
            art.push(' ');
        }
    } else {
        for (let h = Math.round(num / 2); h >= 0; h--) {
            art.push(' ');
        }
        art.push(i, '\n');
    }
}
    console.log(art.join(' '))
