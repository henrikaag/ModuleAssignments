
/* Question 1
Refer: lesson 1
Create a function expression by assigning an anonmyous function to a variable called myFunctionExpression. The function should console log your name. */

const myFunctionExpression = function() {
    
}



/* Question 2
Refer: lesson 2
Select the button in the HTML below by its class. Add a click event listener. The callback function passed to the event listener should log the sentence I was clicked.

You can pass the function in directly, declare it and pass it in by its name or assign it to a variable and pass it in by the variable name. */

function respondToClick() {
    console.log('I was clicked');
}


/* Question 3
Refer: lesson 2
Select the input in the HTML below by its id. Add a keydown event listener. The callback function passed to the event listener should log the value of the key that was pressed. */

const textInput = document.querySelector("firstName")

function callWhenKeyDown(event) {
    console.dir(event);
    console.log("A key was released");
};



/* Question 4
Refer: lesson 2 / 3
Select the button in the HTML below by its tag. Add a mouseover event listener. The callback function should add a class called hover to the button. */
const buttons = document.querySelector("btn")

function callOnHover() {
    console.log("The cursor moved over the button");
};

buttons.addEventListener("mouseover", callOnHover);



/* Question 5
Refer: lesson 2 / 3
Select the button in the HTML below by its data attribute and add a mouseout event listener to it. The callback function should remove the class called hover from the button. */



/* Question 6
Refer: lesson 3
Select all the li tags from the HTML below. Using a loop, add a mouseover event listener to each tag.

The callback function should log the value of the data attribute on each element when the cursor moves over it. */



/* Question 7
Refer: lesson 3
Convert the if-else-if statement below to a switch statement. Use the code inside the else block in the default block in the switch. */




/* Question 8
Refer: lesson 4
Convert the for loop code below to a forEach loop. */




/* Question 9
Refer: lesson 4
Create a timer that logs the word hello every half a second. It must stop after its logged the word 6 times. */




/* Question 10
Refer: lesson 4
Select the div from the HTML below. Write code that updates the div's text to say Text updated after waiting 2 seconds. You can use either innerText or innerHTML to update the text. */


