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