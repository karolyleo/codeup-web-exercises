// 1 - Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 2 - Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let threeLanguages = users.filter(function(user){
    return user.languages.length >= 3
});

// 3 - Use .map to create an array of strings where each element is a user's email address
let emailList = users.map((user)=>{
    return user.email;
})

// 4 - Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalExp = users.reduce((sum, user)=>{
    return sum + user.yearsOfExperience;
},0)
let avgExp = totalExp / users.length

// 5 - Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((longEmail, user)=>{
    if(user.email.length>longEmail.length){
        return longEmail = {
            email: user.email,
            length: user.email.length
        };
    }
    return longEmail
},{email: '', length: 0})


// 6 - Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let nameList = users.reduce((names, user)=>{
    return `${names} ${user.name}`
}, 'Your instructors are: ')

// Bonus
// Use .reduce to get the unique list of languages from the list of users.
let languageList = users.reduce((languages, user) => {
    user.languages.forEach((language) => {
        if(languages.indexOf(language) === -1){
            languages += `${language} `;
        }
    });
    return languages;
}, "");
