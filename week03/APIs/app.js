//fetch API data
//this is an asynchronous function (async/await)
//we are telling our browser to wait for these data, instead of giving us a promise
const main = document.getElementById("mainDiv");

async function getFoxes() {
  const response = await fetch("https://randomfox.ca/floof");
  console.log(response);
  //translate (parse) the response into JSON format
  const data = await response.json();
  console.log(data);
  //filter the data (data wrangling) using dot notation
  const wrangledData = data.image;
  //   console.log(wrangledData);
  //   let foxImg = document.createElement("img");
  //   foxImg.setAttribute("image", wrangledData.image)
  return wrangledData;
}

getFoxes();

//create an element to contain my foxes
const mainContainer = document.getElementById("mainDiv");
function foxContainer(foxImg) {
  //the parameter foxImg will be called from the other function
  const newFox = document.createElement("img");
  newFox.src = foxImg;
  newFox.alt = "Fox Image";
  mainContainer.appendChild(newFox);
}

//function to display the foxes
async function displayFoxes() {
  //getFoxes contains my fox images
  const myFoxes = await getFoxes();
  foxContainer(myFoxes);
}

displayFoxes();
