//using node app to view console outputs

//examples
console.log("Hello world!");

const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

console.log(blogPosts);

const blogPosts2 = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

console.log(blogPosts2[0]); // Output: My first blog post
console.log(blogPosts2[1]); // Output: My second blog post
console.log(blogPosts2[2]); // Output: My third blog post

blogPosts2[3] = "My fourth blog post";

console.log(blogPosts2[3]); // Output: My fourth blog post

//Answers

let favouriteFoods = ["Pizza", "Steak", "Curry", "Hotwings"];
console.log(favouriteFoods);

let favouriteColours = ["Blue", "Red", "Black"];
console.log(favouriteColours);

let favouriteNumbers = [7, 42, 144];
console.log(favouriteNumbers);

//stretch goals

favouriteNumbers.pop(); //.pop() method deleted last element in the array
console.log(favouriteNumbers);

middleFavouriteFoods = favouriteFoods.slice(1, 3); //.slice(x, x) method returns elements from the array, which can be put into a new array. you can slice from start or end, and if picking between two indices, it seems the start index is included, whereas the end index is not, it will slice up to but not including the end index.
console.log(middleFavouriteFoods);
