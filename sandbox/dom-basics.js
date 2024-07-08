const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.setAttribute('src','https://picsum.photos/200');
newImage.setAttribute('alt','random image');
document.body.appendChild(newImage);

const newDiv = document.createElement('div');
newDiv.innerHTML = '<ul><li>One</li><li>Two</li><li>Three</li></ul>';
document.body.appendChild(newDiv);

const newSection = document.createElement('section');
const newH2 = document.createElement('h2');
newH2.innerText = 'Dom Basics';
document.body.appendChild(newH2);
const newP = document.createElement('p');
newP.innerText = "This was added through Javascript";
document.body.appendChild(newP);

document.body.appendChild(newSection);


/*const newSection = document.createElement('section');
newSection.innerHTML = '<h2>Dom Basics</h2><p>This was added through Javascript</p>';
document.body.appendChild(newSection);

This is one way to solve the step 4
*/