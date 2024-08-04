const n = 6; // number of days forward
// get output location on document to append within list
const output = document.querySelector("ul");
// Intl.DateTimeFormat Options
const options = { weekday: 'long'}; // vs. short, etc.

// BEGIN
const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
document.getElementById('today').innerHTML = `Today is ${todaystring}.`;

// next n days
for (let i = 1; i <= n; i++ ) {
    let nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
    let item = document.createElement("li"); // list item
    item.textContent = nextdaystring;
    output.appendChild(item);
}
