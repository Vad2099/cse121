/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);    
    let addNumber2 = Number(document.querySelector('#add2').value);

    // Verifica que los valores sean números
    if (isNaN(addNumber1) || isNaN(addNumber2)) {
        alert("Por favor, introduce números válidos.");
        return;
    }

    document.querySelector('#sum').value = add(addNumber1,addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);


/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2) {
    return number1 - number2;
}

let subtractNumbers = function() {
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);

    // Verifica que los valores sean números
    if (isNaN(subNumber1) || isNaN(subNumber2)) {
        alert("Por favor, introduce números válidos.");
        return;
    }

    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let multNumber1 = Number(document.querySelector('#factor1').value);
    let multNumber2 = Number(document.querySelector('#factor2').value);

    // Verifica que los valores sean números
    if (isNaN(multNumber1) || isNaN(multNumber2)) {
        alert("Por favor, introduce números válidos.");
        return;
    }

    document.querySelector('#product').value = multiply(multNumber1, multNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

function divideNumbers() {
    let divNumber1 = Number(document.querySelector('#dividend').value);
    let divNumber2 = Number(document.querySelector('#divisor').value);

    // Verifica que los valores sean números
    if (isNaN(divNumber1) || isNaN(divNumber2)) {
        alert("Por favor, introduce números válidos.");
        return;
    }

    document.querySelector('#quotient').value = divide(divNumber1, divNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', () => {
    // Declara e instancia una variable que almacena el valor numérico ingresado por el usuario en el campo subtotal
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    
    // Verificación básica de entrada
    if (isNaN(subtotal)) {
        alert("Por favor, introduce un subtotal válido.");
        return;
    }

    // Verifica si el checkbox de membresía está marcado
    const isMember = document.querySelector('#member').checked;

    // Aplica un descuento del 20% si es miembro
    if (isMember) {
        subtotal *= 0.80; // Aplica un 20% de descuento
    }

    // Muestra el total en el span #total con dos decimales usando una template string
    document.querySelector('#total').textContent = `$${subtotal.toFixed(2)}`;
});

/* or you can use this anonymous function and addEventListener
function getTotalDue() {
    // Obtiene el valor del campo de entrada de subtotal y lo convierte a número
    let subtotal = parseFloat(document.querySelector('#subtotal').value);

    // Verifica que el valor sea un número válido
    if (isNaN(subtotal)) {
        alert("Por favor, introduce un subtotal válido.");
        return;
    }

    // Verifica si el checkbox de membresía está marcado
    const isMember = document.querySelector('#member').checked;

    // Aplica un descuento del 20% si es miembro
    if (isMember) {
        subtotal *= 0.80; // Aplica un 20% de descuento
    }

    // Muestra el total en el span #total con dos decimales usando una template string
    document.querySelector('#total').textContent = `$${subtotal.toFixed(2)}`;
}

// Agrega un event listener al botón "Get Total Due"
document.querySelector('#getTotal').addEventListener('click', getTotalDue);
*/


/* ARRAY METHODS - Functional Programming */
let arrayDemo = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector('#array').innerHTML = arrayDemo.join(', ');

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = arrayDemo.filter(number => number % 2 !== 0).join(', ');
/* or you can use this method to do the same thing
let oddNumbers = arrayDemo.filter(number => number % 2 !==0);
document.querySelector('#odds').innerHTML = oddNumbers.join(', ');
*/

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = arrayDemo.filter(number => number % 2 === 0).join(', ');
/* or you can use this method to do the same thing
let evenNumbers = arrayDemo.filter(number => number % 2 ===0);
document.querySelector('#evens').innerHTML = evenNumbers.join(', ');
*/

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = arrayDemo.reduce((sum, number) => sum + number, 0);
/*or you can use this method to do the same thing
let sumOfArray = arrayDemo.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').innerHTML = sumOfArray;
*/


/* Output Multiplied by 2 Array */
//In this case, I use the second option because I need it for the final activity
//document.querySelector('#multiplied').innerHTML = arrayDemo.map((number) => number * 2).join(', ');

let multArray = arrayDemo.map((x) => x*2);
document.querySelector('#multiplied').innerHTML = multArray.join(', ');


/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumOfMultiplied').innerHTML = multArray.reduce((mult, number) => mult + number, 0);
