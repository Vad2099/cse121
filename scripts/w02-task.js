/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullname = 'Valdemar Lasnibat';
var today = new Date();
var currentYear = today.getFullYear();
const profilePicture = 'images/me.jpeg';




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src',profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullname}`);





/* Step 5 - Array */
const favoriteFood = ["Tacos","Pizza","Pozole","Burgers","Grilled steak"];
const favFood = "Sushi";
foodElement.innerHTML = favoriteFood.join(", ");
favoriteFood.push(favFood);
foodElement.innerHTML += `<br>${favoriteFood}`;

const removedFirstItem = favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;

const removedLastItem = favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;




