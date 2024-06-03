console.log("Hello World");

const newButton = document.querySelector("button");

console.log(newButton.textContent);

// newButton.addEventListener("click", function (event) {
//   console.log(event);
// });

newButton.addEventListener("mouseout", function (event) {
  console.log(event);
});
