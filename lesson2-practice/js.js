// call endpoint
    // fetch statement
// loop through results
    // for loop
    // this loop might be in a function
// create some HTML with result.active
    // create something to hold HTML
    // variable of some kind to build that HTML
// first item need an active class (or wont work)
const screenshotsUrl = "https://api.rawg.io/api/games/4003/screenshots";
const imgUrl = `${screenshotsUrl}images`;

fetch(imgUrl)
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.dir(json);
    })
    .catch(error => {
        console.dir(error);
    });