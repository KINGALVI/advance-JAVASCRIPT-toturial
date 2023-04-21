//best example of qurySeletorAll 1 : useing Style (CSS) in javascrit 

const sections = document.querySelectorAll('section');

for (const section of sections) {
    section.style.border = '5px solid red';
    section.style.margin = '10px';
    section.style.borderRadius = '10px';
    section.style.backgroundColor = 'lightgray';
}










//best example of getElementById 1 : add a class with javascript

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('yellow-bg');










// best example of create Element and appendChild : add a section in main list .
const mainContainer = document.getElementById('main-container');

const createElement = document.createElement('section');
createElement.innerHTML = `           
<h1> countrys i like to visit </h1>
<ul>
    <li> Bangladesh</li>
    <li> Turkey </li>
    <li> Canada </li>
</ul>
`

const mainChild = mainContainer.appendChild(createElement);