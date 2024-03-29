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










function handelclick() {
    const handeralstatusone = document.getElementById('text-change-one');
    handeralstatusone.innerText = 'the text is change !!'
}

document.getElementById('text-change-two').addEventListener('click', function () {
    const handeralstatustwo = document.getElementById('text-change-one')
    handeralstatustwo.innerText = 'my text is change !!'
})










// update text using input 

document.getElementById('update-input').addEventListener('click', function () {
    const inputField = document.getElementById('input-field')
    const inputText = inputField.value;
    const updatedInputText = document.getElementById('update-input-text');
    updatedInputText.innerText = inputText;
    inputField.value = '';
})










// advance update text using input

document.getElementById('input-btn').addEventListener('click', function () {
    const bigInputField = document.getElementById('comment-field');
    const bigInputText = bigInputField.value;
    const commentBox = document.getElementById('comment-box')
    const commentField = document.createElement('p');
    commentField.innerText = bigInputText;
    commentBox.appendChild(commentField);
    bigInputField.value = '';

})










// eaxmple of add nvew element and remove useing javascript

document.getElementById('item-container').addEventListener('click', function (event) {

    // event.target.parentNode.removeChild(event.target);

    // if you want to avoid the error = ' TypeError: Cannot read properties of null (reading 'removeChild') ' then use the method to remove child from parent .
    if (event.target.classList.contains('item')) {
        event.target.parentNode.removeChild(event.target);
    }

})

document.getElementById('add-new-item').addEventListener('click', function () {
    const parentContainer = document.getElementById('item-container')
    const newLi = document.createElement('li');
    newLi.classList.add('item');
    newLi.innerText = 'lorem';
    parentContainer.appendChild(newLi);
})










// example of useing CSS and HTML inside JAVASCRIPT 
document.getElementById('apply-btn').addEventListener('click', function () {
    const applyBackground = document.getElementsByClassName('friend');
    for (const applyBg of applyBackground) {
        applyBg.style.backgroundColor = "red";
    }
    const button1 = document.getElementById('alvi')
    button1.style.backgroundColor = 'green'

    const button2 = document.getElementById('al')
    button2.style.backgroundColor = 'blue'
})

let alvi = 5;
document.getElementById('add-btn').addEventListener('click', function () {
    alvi ++;
    const section = document.getElementById('section');
    const createElement = document.createElement('div')
    createElement.innerHTML = `
    <div class="friend">
    <h3 class="friend-name">friend-${alvi}</h3>
    <p>Quibusdam velit nihil tenetur quam.</p>
    </div>
    `
    section.appendChild(createElement);
});