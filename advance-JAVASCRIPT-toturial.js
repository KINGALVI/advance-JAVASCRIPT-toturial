//// ১। JavaScript এ যদি আমারা কোন HTML ট্যাগ এর অ্যাক্সেস পেতে চাই তাহলে  সে ক্ষেত্রে document.getElementsByTagName ব্যবহার করতে হবে ।
const tagCollection = document.getElementsByTagName('body')
// console.log(tagCollection);

for (const tag of tagCollection) {
// console.log(tag);
}


//// ২। JavaScript এ যদি আমারা কোন একটা নিদিষ্ট HTML ট্যাগ এর অ্যাক্সেস পেতে চাই তাহলে সে ক্ষেত্রে document.getElementsByid() ব্যবহার করতে হবে ।
const idCollection1 = document.getElementById('Fruits-title').innerText = 'Fruits changed by JavaSript';

const idCollection2 = document.getElementById('Fruits-title').innerHTML = '<h5>Fruits changed by JavaSript</h5>'


//// ৩। JavaScript এ যদি আমারা কয়েকটা নিদিষ্ট HTML ট্যাগ এর অ্যাক্সেস পেতে চাই তাহলে সে ক্ষেত্রে document.getElementsByClassName() ব্যবহার করতে হবে । 
const classNameCollection = document.getElementsByClassName('impontant-places');
// console.log(classNameCollection);

for(const className of classNameCollection){
    console.log(className.innerText);
}

