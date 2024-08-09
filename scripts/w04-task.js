/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Valdemar Lasnibat",
    photo: "images/me.jpeg",
    favoriteFoods: [
        'Tacos',
        'Pozole',
        'Mole',
        'Spaguetti',
        'Rice',
        'Molletes',
        'Chicken Roast',
        'Roast Beef',
        'Flautas',
        'Gorditas'
    ],
    hobbies: [
        'Reading',
        'Playing VideoGames',
        'Taking naps',
        'Walking',
        'Staying home with my wife',
        'Running',
        'Studying'
    ],
    placesLived: [],

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Boca del Rio, Veracruz',
        length: '11 years'
    },
    {
        place: 'Tezoyuca, Morelos',
        length: '6 months'
    },
    {
        place: 'San Martin, Puebla',
        length: '1 year'
    },
    {
        place: 'Villahermosa, Tabasco',
        length: '14 years'
    },
    {
        place: 'Hermosillo, Sonora',
        length: '3 months'
    },
    {
        place: 'GAM, CDMX',
        length: '7 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);

});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);

});


/* Places Lived DataList */
/* Places Lived DataList */
myProfile.placesLived.forEach((place) => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});


