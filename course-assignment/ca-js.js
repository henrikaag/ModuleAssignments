/* Question 1. Declare and initialise a variable with a string value. */

var stringValue  = "string";


/* Question 2
Create an object variable called person and give it two properties (a key and a value) of your choice. */

var person = {
    name : "John",
    age : 30
};


/* Question 3
Create a variable called outOfStock and assign it a boolean value.

Create an if else statement that checks the value of outOfStock.

If it is true, console log "Out of stock". Otherwise log "In stock". */

console.log("-------------------");

var outOfStock = "false";

if (outOfStock === true) {
    console.log("Out of stock");
    
} else {
    console.log("In stock");
    
}


/* Question 4
Create an array of five numbers.

Loop through the array and console log each value. */
console.log("-------------------");

var array = [10, 20, 30, 40, 50];

console.log(array);


/* Question 5
Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop. */

console.log("-------------------");

for(var i = 15; i <= 25; i++) {
    console.log(i);
}

/* Question 6
Using the same loop from the above question, only log the value of the counter variable if it is equal to 20. */
console.log("-------------------");

for(var i = 15; i <= 25; i++) {
    if (i === 20) {
    console.log("Number is", i);
    }
    
} 




/* Question 7
Create an array of two objects. Each object must have the same three properties (with different values):

one property with a string value
one property with a number value
one property with a boolean value
Loop through the array and console log the number value and the boolean value. */

console.log("-------------------");

var twoObjects = [
    {
        name: "Henrik",
        age: 20,
        human: true,
    },
    {
        name: "Henrik-9000",
        age: 5,
        human: false,
    }
];

for(var i = 0; i < twoObjects.length; i++) {

    console.log(twoObjects[i].age);
    console.log(twoObjects[i].human);
}

/* Question 8
Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.

Inside the function, log the string "I don't like " together with the argument.

Call the function and pass in a value of your choice.

Example:
If you pass in the value "giraffes", the function should log: "I don't like giraffes". */

console.log("-------------------");

function whatIDontLike(movie) {
    console.log("I don't like " + movie);

}

whatIDontLike("Once Upon a Time in Hollywood");

/* Question 9
Create a function that accepts two arguments.

Inside the function, subtract the second argument from the first and console log the result. */
console.log("-------------------");

function twoArguments(arg1, arg2) {
    var arg = arg1 - arg2;
    console.log(arg);
}

twoArguments(10, 5);

/* Question 10
Create an empty array.

Create a function that accepts one argument.

Inside the function, add the argument to the array.

Call the function and pass in a value of any type. */

console.log("-------------------");

var emptyArray = [];

function oneArg(fruit) {
    emptyArray.push("Banana")
}
oneArg();
console.log(emptyArray);


/* LEVEL 2 */

/* Question 1
Using the loop from question 5 above, only log the counter variable if it is an even number.

Hint: you can use the modulus % operator for this. */
console.log("-------------------");



/* Question 2
Create a function that logs the sentence "I am a function".

Assign this function to a variable called innerFunction.

Create another function called outerFunction that accepts one argument.

Inside outerFunction, call the argument like you would a function - with parenthesis ().

Call outerFunction and pass in the innerFunction variable. */

