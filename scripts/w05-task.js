/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    // Clear previous temple entries if any
    

    // Process each temple in the array
    temples.forEach((temple) => {
        // Create an <article> element
        const articleElement = document.createElement("article");

        // Create an <h3> element and set its content to the temple's name
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;

        // Create an <img> element and set its src and alt attributes
        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = `Image of ${temple.templeName}`;

        // Append the <h3> and <img> elements to the <article> element
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        // Append the <article> element to the global templesElement
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch() */
const getTemples = async () => {
    const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

    const response = await fetch(url);
    
    if (response.ok) {
        const data = await response.json();
        templeList = data; // Asigna el resultado a la variable global templeList
        displayTemples(templeList); // Llama a displayTemples con templeList
    } else {
        console.error("Error fetching the temples data:", response.statusText);
    }

    console.log(templeList); // Esto ahora mostrará el contenido correcto de templeList
};


/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
};

/* filterTemples Function Expression */
const filterTemples = (temples) => {
    // Llama a la función reset para limpiar la lista actual
    reset();

    // Obtén el valor del elemento select con el ID "filtered"
    const filter = document.querySelector("#filtered").value;

    // Usar un switch para manejar los diferentes casos de filtrado
    switch (filter) {
        case "utah":
            // Filtra templos cuyo location contiene "Utah"
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;

        case "notutah":
            // Filtra templos cuyo location NO contiene "Utah"
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;

        case "older":
            // Filtra templos cuya fecha de dedicación es anterior a 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;

        case "all":
            // No filtrar, solo mostrar todos los templos
            displayTemples(temples);
            break;

        default:
            // En caso de que no coincida con ningún caso, mostrar todos los templos
            displayTemples(temples);
            break;
    }
};


/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
});

getTemples();