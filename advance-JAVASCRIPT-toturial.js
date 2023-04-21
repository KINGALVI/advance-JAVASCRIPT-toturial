//// ১। JavaScript এ যদি আমারা কোন HTML ট্যাগ এর অ্যাক্সেস পেতে চাই তাহলে  সে ক্ষেত্রে document.getElementsByTagName ব্যবহার করতে হবে ।
const tagCollection = document.getElementsByTagName('body')
// console.log(tagCollection);

for (const tag of tagCollection) {
    // console.log(tag);
}


//// ২। JavaScript এ যদি আমারা কোন একটা নিদিষ্ট HTML ট্যাগ এর অ্যাক্সেস পেতে চাই তাহলে সে ক্ষেত্রে document.getElementsByid() ব্যবহার করতে হবে ।

const idCollection = document.getElementById('Fruits-title')[0];

const idCollection1 = document.getElementById('Fruits-title').innerText = 'Fruits changed by JavaSript';

const idCollection2 = document.getElementById('Fruits-title').innerHTML = '<h5>Fruits changed by JavaSript</h5>'

const idCollection3 = document.getElementById('Fruits-title').style.backgroundColor = 'yellow';

// const idCollection4 = document.getElementById('Fruits-title').getAttribute('class');

// const idCollection5 = document.getElementById('Fruits-title').setAttribute('attribute', 'ALVI');

// const idCollection6 = document.getElementById('Fruits-title').classList
// .remove('o');

// const idCollection7 = document.getElementById('Fruits-title').classList.replace('o', 'o');

// const idCollection8 = document.getElementById('Fruits-title').classList.add('o');


//// ৩। JavaScript এ যদি আমারা কয়েকটা নিদিষ্ট HTML ট্যাগ এর অ্যাক্সেস পেতে চাই তাহলে সে ক্ষেত্রে document.getElementsByClassName() ব্যবহার করতে হবে । 
const classNameCollection = document.getElementsByClassName('impontant-places');
// console.log(classNameCollection);

for (const className of classNameCollection) {
    // console.log(className.innerText);
}


//// ৪। JavaScript এ যদি আমারা CSS এর class কিনবা id এর অ্যাক্সেস পেতে চাই তাহলে সে ক্ষেত্রে document.querySelectorAll() এবং document.querySelector() ব্যবহার করতে হবে ।

//যদি আমরা CSS এর আনেকগুলো class বা id পেতে চাই তাহলে সে ক্ষত্রে JavaScript এর ব্যবহার ।
const querySelectorAllCollection = document.querySelectorAll('.place-container li')
// console.log(querySelectorAllCollection);

for (const li of querySelectorAllCollection) {
    // console.log(li);
}

//যদি আমরা CSS এর কেবল মাত্র একটি class বা id পেতে চাই তাহলে সে ক্ষত্রে JavaScript এর ব্যবহার ।
const querySelectorCollection = document.querySelector('#places-container li').innerHTML = 'ALVI';
// console.log(querySelectorCollection)


//// ৫। JavaScript দিয়ে যদি কোন HTML এর Element তৈরি করতে চাই । তাহলে সে ক্ষত্রে document.createElement() ব্যবহার করতে হবে । 
const elementCollection1 = document.createElement('li');
elementCollection1.innerText = 'my name is alvi .';

const elementCollection2 = document.createElement('li')
elementCollection2.innerText = 'i am a web devoloper .';

// console.log(elementCollection1);
// console.log(elementCollection2)

// JavaScript এর মাধ্যমে document.createElement() তৈরি করার পর যদি যদি সেই Element এর ভিতরে আরোও নুতুন কোন Element যোগ করতে চাই , তাহলে সে ক্ষত্রে .appendChild() ব্যবহার করতে হবে ।
const appendChildCollection = document.getElementById('append-Child')
appendChildCollection.appendChild(elementCollection1);
appendChildCollection.appendChild(elementCollection2);