/* Question 1
Refer: lesson 1
Convert the function below to an arrow function:

function(a, b) {
    return a - b;
}
*/

// Answer
const doSomething = (a, b) => {
    console.log(a, b);
}

/*
Question 2
Refer: lesson 2 / 4
Make a call to the URL below, pass the JSON it returns to a function and inside that function loop through the results and log each game's name.

In the catch method of your code, redirect to error.html if there is an error.
*/

// Make call to URL
// Pass the JSON it returns to a function
// Inside function, loop through results
// log each games name

const baseUrl = "https://api.rawg.io/api/games?genres=sports";

const gamesUrl = `${baseUrl}games`;

fetch(gamesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.dir(json)
    })
    .catch(function(error) {
        console.dir(error);
    });

function loadGames(json) {
    console.dir(json)
    const games = json.results;
}


    for (let i = 0; i < games.length; i++);

// I don really understand this part of the question and why it doesnt work with the fetching of the api.


/*
Question 3
Refer: lesson 3
Replace the word cats with the word giraffes in the following sentence:

These cats are outrageous.
*/
const h1Heading = document.querySelector("h1");

const replaceWord = h1.replace("cats", "giraffes");
