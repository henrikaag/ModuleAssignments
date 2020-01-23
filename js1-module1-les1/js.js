console.dir(document.querySelector("h1"));

const heading2 = document.querySelector("h2");
console.dir(heading2);

const headingByClass = document.querySelector(".heading2");
console.dir(headingByClass);

const list = document.querySelector("#list");
console.dir(list);

const listItem = document.querySelector("li");
console.dir(listItem);

const listItems = document.querySelectorAll("li");
console.dir(listItems);

for (let i = 0; i < listItems.length; i++) {
    console.dir(listItems[i]);
}

for (let i = 0; i < listItems.length; i++) {
    console.dir(listItems[i].innerText);
}

// Dog
// Cat
// Donkey


const heading1 = document.querySelector("h1")
heading1.style.color = "purple";

heading1.style.border = "1px green solid";

heading1.style.backgroundColor = "lightGray";
heading1.style.padding = "1em";


const div = document.querySelector("div");
console.log(div.className);
// nothing will be displayed

div.classList.add("container");
console.log(div.className);
// container

div.classList.add("second-class");
console.log(div.className);
// container second-class


const allTheListItems = document.querySelectorAll("li");

// loop through all the li elements and change their innerText value
for (let i = 0; i < allTheListItems.length; i++) {
    allTheListItems[i].innerText = i + " changed";
}

const pageHeading = document.querySelector("h1");
pageHeading.innerHTML = "Updated using innerHTML";

const container = document.querySelector("div");
container.innerHTML = `<p>
                        <b>Bold text:</b> unbolded text
                    </p>`;



// select the ul
const list1 = document.querySelector("ul");

// get the existing HTML inside the ul element and assign it to a variable
const existingHTML = list.innerHTML;

// create the new li HTML
const newHTML = "<li>New item at the end</li>";

// set the ul's new HTML to the existing HTML plus the new HTML 
list.innerHTML = existingHTML + newHTML;



const list2 = document.querySelector("ul");

list.innerHTML = list.innerHTML + "<li>New item at the end</li>";



const list3 = document.querySelector("ul");

list.innerHTML = "<li>New item at the beginning</li>" + list.innerHTML;


const list4 = document.querySelector("ul");

const newHTML1 = `<li class="red">
                    New item at the end
                </li>`;

list.innerHTML = list.innerHTML + newHTML;

list.innerHTML += newHTML;