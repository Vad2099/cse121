// loops.js
myInfo = {
  name: "Brother T",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 year",
    },
  ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
/*
//using for each method
// Define the displayFavoriteFoods function
function displayFavoriteFoods(foodsArray) {
    // Get the <ul> element with the ID "favorite-foods"
    const favoriteFoods = document.querySelector("#favorite-foods");
    // Loop through each food in the array
    foodsArray.forEach(food => {
        // Create a new <li> element for each food
        let favoriteFood = document.createElement("li");
        // Set the text content of the <li> to the food
        favoriteFood.textContent = food;
        // Append the <li> to the <ul>
        favoriteFoods.appendChild(favoriteFood);
    });
}
*/
/*
// Call the displayFavoriteFoods function with the favoriteFoods array
displayFavoriteFoods(myInfo.favoriteFoods);

//using .map method
// with .map
const foodsElement = document.querySelector('#favorite-foods');

let mapFoodItem = (food) => {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    return favoriteFood;
}

const foodListElement = myInfo.favoriteFoods.map(mapFoodItem);
// we need to flatten the array of strings into one big string. .join does this.
foodsElement.innerHTML = foodListElements.join('');
*/

/*
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// The map example could be simplified as below:
const foodsElement = document.querySelector("#favorite-foods");
const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// we need to flatten the array of strings into one big string. .join does this.
foodsElement.innerHTML = foodListElements.join("");
*/

// Obtener los elementos HTML donde se añadirán las listas
const foodsElement =document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");


// Función para generar una cadena HTML <li> con una comida:
function createFoodHTML(food) {
  return `<li>${food}</li>`;
}

// Función para generar una cadena HTML <dt> y <dd> con un lugar y su duración:
function createPlaceHTML(place) {
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

// Función para transformar una lista usando una función de plantilla y devolver una cadena HTML combinada:
function HTMLTemplate (list, functionTemplate) {
  return list.map(functionTemplate).join('');
}

// Generar y establecer el HTML para las comidas favoritas
const foodHTML = HTMLTemplate(myInfo.favoriteFoods, createFoodHTML);
foodsElement.innerHTML = foodHTML;

// Generar y establecer el HTML para los lugares vividos
const placeHTML = HTMLTemplate(myInfo.placesLived, createPlaceHTML);
placesElement.innerHTML = placeHTML;

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
// Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.
for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

// Repeat the previous programming snippet by using a while loop.
let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}

// Repeat the previous programming snippet by using a forEach loop.
studentReport.forEach(function (item) {
  if (item < LIMIT) {
    console.log(item);
  }
});

// Repeat the previous programming snippet by using a for...in loop.
for (let i in studentReport) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

// Use any type of repetition (looping) statement to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date.
