const pi = 3.14;
let radius = 0;

function circleArea(radius) {
    const area = radius * radius * pi;
    return area
}

area = circleArea(3);
console.log("Area1:", area);

area = circleArea(4);
console.log("Area2:", area);