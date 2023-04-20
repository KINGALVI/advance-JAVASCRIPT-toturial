//// ১। JavaScript এ যদি আমারা কোন HTML ট্যাগ এর অ্যাক্সেস পেতে চাই তাহলে  সে ক্ষেত্রে document.getElementsByTagName ব্যবহার করতে হবে ।
const tagCollection = document.getElementsByTagName('body')
// console.log(tagCollection);

for (const tag of tagCollection) {
// console.log(tag);
}


//// ২। JavaScript এ যদি আমারা কোন একটা নিদিষ্ট HTML ট্যাগ এর অ্যাক্সেস পেতে চাই তাহলে সে ক্ষেত্রে document.getElementsByid() ব্যবহার করতে হবে ।
const idCollection1 = document.getElementById('Fruits-title').innerText = 'Fruits changed by JavaSript';

const idCollection2 = document.getElementById('Fruits-title').innerHTML = '<h5>Fruits changed by JavaSript</h5>'

const idCollection3 = document.getElementById('Fruits-title').style.backgroundColor = 'yellow';


//// ৩। JavaScript এ যদি আমারা কয়েকটা নিদিষ্ট HTML ট্যাগ এর অ্যাক্সেস পেতে চাই তাহলে সে ক্ষেত্রে document.getElementsByClassName() ব্যবহার করতে হবে । 
const classNameCollection = document.getElementsByClassName('impontant-places');
// console.log(classNameCollection);

for(const className of classNameCollection){
    // console.log(className.innerText);
}


//// ৪। JavaScript এ যদি আমারা CSS এর class কিনবা id এর অ্যাক্সেস পেতে চাই তাহলে সে ক্ষেত্রে document.querySelectorAll() এবং document.querySelector() ব্যবহার করতে হবে ।

//যদি আমরা CSS এর আনেকগুলো class বা id পেতে চাই তাহলে সে ক্ষত্রে JavaScript এর ব্যবহার ।
const querySelectorAllCollection = document.querySelectorAll('.place-container li')
// console.log(querySelectorAllCollection);

for(const li of querySelectorAllCollection){
    // console.log(li);
}

//যদি আমরা CSS এর কেবল মাত্র একটি class বা id পেতে চাই তাহলে সে ক্ষত্রে JavaScript এর ব্যবহার ।
const querySelectorCollection = document.querySelector('.place-container li').innerHTML = 'ALVI'
console.log(querySelectorCollection)