//  arrays.js
//Activity 1
const steps = ["one", "two", "three"];
const listTemplate = (step) => {`<li>${step}</li>`; //the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML

//Activity 2
const grades = ['A', 'B', 'A'];

function gradeToPoints(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    } else if (grade === 'B') {
        points = 3;
    }
    return points;
}

//Activity 3
const pointsGPA = grades.map(gradeToPoints);
const totalPoints = pointsGPA.reduce((total, item) => total + item);
const gpa = totalPoints / pointsGPA.length;

//Activity 4
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const fruits2 = fruits.filter((fruit) => fruit.length < 6);

//Activity 5
const values = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = values.indexOf(luckyNumber);

