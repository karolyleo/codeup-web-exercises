(function() {
    "use strict";
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: 'Leonard',
        lastName: 'Karoly'
    };
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
person.sayHello = function() {
     return `Hello from ${this.firstName} ${this.lastName}`
};// console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    for(let i=0;i<shoppers.length;i++){
        let personGoods = shoppers[i]["amount"];
        let spent = (personGoods>200)?.88 * (personGoods):personGoods;
        console.log(`${shoppers[i]["name"]} has bought $${personGoods} worth of goods and spent $${spent}.`)
    }
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = [
    {
        title: `Start With Why` ,
        author: {
            firstName: `Simon`,
            lastName: `Sinek`
        }
    },
    {
        title: `Can't hurt Me` ,
        author: {
            firstName: `David`,
            lastName: `Goggins`
        }
    },
    {
        title: `The Guerrilla Factory` ,
        author: {
            firstName: `Tony`,
            lastName: `Schwalm`
        }
    },
    {
        title: `The 4-Hour Workweek` ,
        author: {
            firstName: `Timothy`,
            lastName: `Ferriss`
        }
    },
    {
        title: `Rich Dad, Poor Dad` ,
        author: {
            firstName: `Robert`,
            lastName: `kiyosaki`
        }
    }
];
// console.log(books[0].title) // "Start with Why"
// console.log(books[0].author.firstName) // "Simon"
// console.log(books[0].author.lastName) // "Sinek"
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
let desiredOutput = ''
for(let i=1; i<=books.length;i++){
    desiredOutput+= (`
    Book # ${i}
    Title: ${books[i-1].title}
    Author: ${books[i-1].author.firstName} ${books[i-1].author.lastName}
    ---`); if(i===books.length){desiredOutput+= "\n    ..."}
} //console.log(desiredOutput)
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
function createBook(title, author) {
        let book = {};
        let authorObj = {};
        book['title'] = title;
        let nameSplit = author.split(" ");
        authorObj['firstName'] = nameSplit[0];
        authorObj['lastName'] = nameSplit[1];
        book['author'] = authorObj;
        return book;
    }
    console.log(createBook('The Story of my Life', "Leonard Karoly"))
})();
/*=============================
Create a few beverage objects and assign values to each object for the following properties:
  - brandName
  - type
  - volumeInLiters
  - priceInCents
  - expirationDate
  - datesOfPreviousSips (use an array of strings)
  - isOpen
Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.
 */
let drinks = [{
    brandName: 'Starbucks',
    type: 'Coffee',
    volume: '.5 L',
    priceInCents: 500,
    expirationDate: 'When it cools off',
    datesOfPreviousSips : ['This morning', 'yesterday', 'day before yesterday'],
    isOpen: 'No'
}]
// -- Mini Exercise 2
const users = [
    {
        givenName: 'Sam',
        age: 21
    },
    {
        givenName: 'Cathy',
        age: 34
    },
    {
        givenName: 'Karen',
        age: 43
    }
];
//
// 0. Log each given name
let names = users.map(user=>user.givenName); console.log(names)
// 1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"
console.log(names.join(' '))
// 2. Change the names of all users to "John Doe"
users.map(user=>(user.givenName = 'John Doe'))
console.log(users)
// 3. Increase the current age of all users by 1
users.map(user=>(user.age+=1));
console.log(users);
// Can you accomplish each step using iteration?