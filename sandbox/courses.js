// Definición del objeto 'aCourse' que representa un curso con sus secciones.
const aCourse = {
    code: "CSE121b", // Código del curso
    name: "Javascript Language", // Nombre del curso
    sections: [ // Array de secciones del curso
        { 
            sectionNum: 1, // Número de la sección
            roomNum: 'STC 353', // Número de salón
            enrolled: 26, // Número de estudiantes inscritos
            days: 'TTh', // Días en que se imparte la sección
            instructor: 'Bro T' // Nombre del instructor
        },
        { 
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A' 
        }
    ],
    // Método para inscribir a un estudiante en una sección
    enrollStudent: function(sectionNum) {
        // Encuentra el índice de la sección que coincide con el número de sección proporcionado
        const sectionIndex = this.sections.findIndex(section => section.sectionNum == sectionNum);
        // Si la sección existe (índice no es -1)
        if (sectionIndex !== -1) {
            // Incrementa el número de estudiantes inscritos en esa sección
            this.sections[sectionIndex].enrolled++;
            // Actualiza la visualización de las secciones
            renderSections(this.sections);
        }
    },
    // Método para dar de baja a un estudiante de una sección
    dropStudent: function(sectionNum) {
        // Encuentra el índice de la sección que coincide con el número de sección proporcionado
        const sectionIndex = this.sections.findIndex(section => section.sectionNum == sectionNum);
        // Si la sección existe y hay al menos un estudiante inscrito
        if (sectionIndex !== -1 && this.sections[sectionIndex].enrolled > 0) {
            // Decrementa el número de estudiantes inscritos en esa sección
            this.sections[sectionIndex].enrolled--;
            // Actualiza la visualización de las secciones
            renderSections(this.sections);
        }
    }
};

// Función para establecer la información del curso en el HTML
function setCourseInfo(course) {
    const nameCourse = document.querySelector("#courseName"); // Selecciona el elemento para el nombre del curso
    const numCourse = document.querySelector("#courseCode"); // Selecciona el elemento para el código del curso
    nameCourse.textContent = course.name; // Establece el nombre del curso
    numCourse.textContent = course.code; // Establece el código del curso
}

// Función para crear la plantilla de una fila de sección en la tabla
function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>`;
}

// Función para renderizar las secciones en la tabla
function renderSections(sections) {
    const sectionTable = document.querySelector('#sections'); // Selecciona el cuerpo de la tabla de secciones
    sectionTable.innerHTML = sections.map(sectionTemplate).join(""); // Actualiza el HTML con las filas de secciones generadas
}

// Evento que se ejecuta cuando el DOM se ha cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    setCourseInfo(aCourse); // Establece la información del curso en el HTML
    renderSections(aCourse.sections); // Renderiza las secciones en la tabla

    // Añade un event listener al botón de inscribir estudiante
    document.querySelector('#enrollStudent').addEventListener('click', () => {
        const sectionNumber = parseFloat(document.querySelector('#sectionNumber').value); // Obtiene el número de sección del input
        if (!isNaN(sectionNumber)) { // Si el número de sección es válido
            aCourse.enrollStudent(sectionNumber); // Llama al método para inscribir al estudiante
        }
    });

    // Añade un event listener al botón de dar de baja estudiante
    document.querySelector('#dropStudent').addEventListener('click', () => {
        const sectionNumber = parseFloat(document.querySelector('#sectionNumber').value); // Obtiene el número de sección del input
        if (!isNaN(sectionNumber)) { // Si el número de sección es válido
            aCourse.dropStudent(sectionNumber); // Llama al método para dar de baja al estudiante
        }
    });
});
