console.log("Hello World");

// const body = document.querySelector("body");

// console.log(body);

// const h1 = document.querySelector("h1");

// console.log(h1);

const h1 = document.querySelector("h1"); //select the node and add to h1 variable

h1.textContent = "Hello world!"; //apply content to the node stored in h1 variable

const image = document.querySelector("img");

image.src = "https://picsum.photos/200/300";

// const body = document.querySelector("body");

// const h2 = document.createElement("h2");
// h1.textContent = "This is a heading!";
// body.appendChild(h1);

// const ul = document.createElement("ul");
// body.appendChild(ul);

// const list1 = document.createElement("li");
// ul.appendChild(list1);
// ul.appendChild(list1);

//from daniel

const list = document.createElement("ul");
const listItem1 = document.createElement("li");
listItem1.textContent = "This is fisrt";
const listItem2 = document.createElement("li");
listItem2.textContent = "This is second";
const listItem3 = document.createElement("li");
listItem3.textContent = "This is third";
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);
body.appendChild(list);
