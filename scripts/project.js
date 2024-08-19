// Selecciona el contenedor donde se mostrarán los datos de la API
const apodContainer = document.querySelector("#apodContainer");

// Variable global para almacenar la lista de APODs
let apodList = [];

/* 
 * Función async que obtiene los datos de APOD desde la API de la NASA.
 * Utiliza fetch para hacer la solicitud y recibe los datos en formato JSON.
 */
const getAPOD = async () => {
    // URL de la API con la clave de API incluida y un parámetro para obtener 10 resultados
    const url = `https://api.nasa.gov/planetary/apod?api_key=idlQFQsf3ELmv7te3o6NydVyAdGwgCUP9k4wknds&count=10`;

    try {
        // Realiza la solicitud a la API
        const response = await fetch(url);
        // Convierte la respuesta en formato JSON
        const data = await response.json();
        // Asigna los datos recibidos a la variable global apodList
        apodList = data;
        // Llama a la función displayAPODs para mostrar los datos en la página
        displayAPODs(apodList);
    } catch (error) {
        // Manejo de errores en caso de que la solicitud falle
        console.error("Error fetching the APOD data:", error);
    }

    // Imprime la lista de APODs en la consola para verificación
    console.log(apodList);
};

/* 
 * Función que muestra los APODs en el contenedor de la página.
 * Recibe un array de objetos APOD y crea elementos HTML dinámicamente.
 */
const displayAPODs = (apods) => {
    // Llama a la función reset para limpiar el contenedor antes de agregar nuevos elementos
    reset();

    // Itera sobre cada APOD en el array
    apods.forEach((apod) => {
        // Crea un elemento <article> para cada APOD
        const articleElement = document.createElement("article");

        // Crea un elemento <h3> para el título del APOD y establece su contenido
        const h3Element = document.createElement("h3");
        h3Element.textContent = apod.title;

        // Variable para almacenar el elemento multimedia (imagen o video)
        let mediaElement;

        // Si el APOD es una imagen, crea un elemento <img>
        if (apod.media_type === "image") {
            mediaElement = document.createElement("img");
            mediaElement.src = apod.url;
            mediaElement.alt = apod.title;
        } 
        // Si el APOD es un video, crea un elemento <iframe>
        else if (apod.media_type === "video") {
            mediaElement = document.createElement("iframe");
            mediaElement.src = apod.url;
            mediaElement.allowFullscreen = true;
        }

        // Crea un elemento <p> para la descripción del APOD
        const pElement = document.createElement("p");
        pElement.textContent = apod.explanation;

        // Agrega los elementos h3, mediaElement y p al elemento article
        articleElement.appendChild(h3Element);
        articleElement.appendChild(mediaElement);
        articleElement.appendChild(pElement);

        // Agrega el artículo completo al contenedor principal en el DOM
        apodContainer.appendChild(articleElement);
    });
};

/* 
 * Función que limpia el contenedor de APODs.
 * Se llama antes de mostrar nuevos resultados para evitar duplicaciones.
 */
const reset = () => {
    apodContainer.innerHTML = "";
};

/* 
 * Función para filtrar los APODs según la selección del usuario.
 * Filtra y muestra los resultados basados en el tipo de medio o la fecha.
 */
const filterAPODs = (apods) => {
    // Limpia el contenedor de APODs antes de mostrar los resultados filtrados
    reset();

    // Obtiene el valor seleccionado del elemento <select> con el id "filtered"
    const filter = document.querySelector("#filtered").value;

    // Filtra y muestra los APODs según el valor seleccionado
    switch (filter) {
        case "images":
            // Muestra solo APODs que son imágenes
            displayAPODs(apods.filter(apod => apod.media_type === "image"));
            break;

        case "videos":
            // Muestra solo APODs que son videos
            displayAPODs(apods.filter(apod => apod.media_type === "video"));
            break;

        case "recent":
            // Muestra solo APODs que fueron publicados en el último mes
            const recentDate = new Date();
            recentDate.setMonth(recentDate.getMonth() - 1); // Configura el filtro para el último mes
            displayAPODs(apods.filter(apod => new Date(apod.date) > recentDate));
            break;

        case "all":
        default:
            // Muestra todos los APODs
            displayAPODs(apods);
            break;
    }
};

/* 
 * Agrega un event listener para manejar cambios en la selección del filtro.
 * Cuando el usuario cambia la selección, se filtran los APODs mostrados.
 */
document.querySelector("#filtered").addEventListener("change", () => {
    filterAPODs(apodList);
});

// Llama a la función getAPOD al cargar la página para obtener y mostrar los APODs
getAPOD();
