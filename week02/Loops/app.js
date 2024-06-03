//will use node app

//for loops, used when we know how many times we want to do an action

// for (initialisation; condition, afterthought) {
//code block here to be looped
//initialisation is the starting value
//condition - a value comparison
//afterthought is how we change the conidition after each loop, otherwise loop could never end
// };

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//example, create more than one DOM element

// for (let i = 0; i <= 3; i++) {
//   let myPTag = document.createElement("p");
//   myPTag.textContent = "This is p tag number ${i}";
//   div.appendChild(myPTag);
// }

//using the length method to loop through an entire array and return the values
let myArray = ["value1", "value2", "value3", "value4"];

for (let i = 0; i <= myArray.length; i++) {
  console.log(myArray[i]);
}

// while (condition  {
// action
// })

// let counter = 1;

// while (counter <= 10) {
//   console.log(counter);
//   counter++; //fulfils the condition, stops infinite loop
// }

//example

// isLoggedIn = true;

// while (isLoggedIn) { //this is a shortcut for isLoggedIn === true (!isLoggedIn is short for false)
//     console.log("welcome");
//     }

//other types of loops

// for.of -- simplified for loop, with no access to index

// let subjects = ["maths", "English", "science", "French"];

// for (let subject of subjects) {
//   console.log(subject);
// }

//array method .forEach (parameters are just variables within functions)

// subjects.forEach(function (subject) {
//   console.log(subject);
//   let myPTag = document.createElement("p");
//   myPTag.textContent(subject);
//   div.appendChild(myPTag);
// });

//workshop

//examples

// let counter = 1;

// while (counter <= 5) {
//   console.log(counter);
//   counter++;
// }

// let keepLooping = true;
// let i = 0;
// while (keepLooping === true) {
//   console.log("Iteration", i);
//   // set keepLooping to false with 10% chance: Math.random() returns a random value between 0 and 1
//   keepLooping = Math.random() < 0.1;
//   i++;
// }

let myFavColours = ["Blue", "Red", "value3", "value4"];

for (let i = 0; i <= myArray.length; i++) {
  console.log(myArray[i]);
}
