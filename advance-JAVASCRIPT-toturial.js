//// ১। JavaScript এ যদি আমারা কোন HTML ট্যাগ এর অ্যাক্সেস পেতে চাই তাহলে  সে ক্ষেত্রে document.getElementsByTagName ব্যবহার করতে হবে ।
const tagCollection = document.getElementsByTagName('body')
     console.log(tagCollection);

for (const tag of tagCollection) {
     console.log(tag);
}










//// ২। JavaScript এ যদি আমারা কোন একটা নিদিষ্ট HTML ট্যাগ এর অ্যাক্সেস পেতে চাই তাহলে সে ক্ষেত্রে document.getElementsByid() ব্যবহার করতে হবে ।

const idCollection = document.getElementById('Fruits-title')[0];

const idCollection1 = document.getElementById('Fruits-title').innerText = 'Fruits changed by JavaSript';

const idCollection2 = document.getElementById('Fruits-title').innerHTML = '<h5>Fruits changed by JavaSript</h5>'

const idCollection3 = document.getElementById('Fruits-title').style.backgroundColor = 'yellow';

//

const idCollection4 = document.getElementById('Fruits-title').getAttribute('class');

const idCollection5 = document.getElementById('Fruits-title').setAttribute('attribute', 'ALVI');

const idCollection6 = document.getElementById('Fruits-title').classList
    .remove('o');

const idCollection7 = document.getElementById('Fruits-title').classList.replace('o', 'o');

const idCollection8 = document.getElementById('Fruits-title').classList.add('o');










//// ৩। JavaScript এ যদি আমারা কয়েকটা নিদিষ্ট HTML ট্যাগ এর অ্যাক্সেস পেতে চাই তাহলে সে ক্ষেত্রে document.getElementsByClassName() ব্যবহার করতে হবে । 
const classNameCollection = document.getElementsByClassName('impontant-places');
     console.log(classNameCollection);

for (const className of classNameCollection) {
     console.log(className.innerText);
}










//// ৪। JavaScript এ যদি আমারা CSS এর class কিনবা id এর অ্যাক্সেস পেতে চাই তাহলে সে ক্ষেত্রে document.querySelectorAll() এবং document.querySelector() ব্যবহার করতে হবে ।

//যদি আমরা CSS এর আনেকগুলো class বা id পেতে চাই তাহলে সে ক্ষত্রে JavaScript এর ব্যবহার ।
const querySelectorAllCollection = document.querySelectorAll('.place-container li')
     console.log(querySelectorAllCollection);

for (const li of querySelectorAllCollection) {
     console.log(li);
}

//যদি আমরা CSS এর কেবল মাত্র একটি class বা id পেতে চাই তাহলে সে ক্ষত্রে JavaScript এর ব্যবহার ।
const querySelectorCollection = document.querySelector('#places-container li').innerHTML = 'ALVI';
     console.log(querySelectorCollection)










//// ৫। JavaScript দিয়ে যদি কোন HTML এর Element তৈরি করতে চাই । তাহলে সে ক্ষত্রে document.createElement() ব্যবহার করতে হবে । 
const elementCollection1 = document.createElement('li');
elementCollection1.innerText = 'my name is alvi .';

const elementCollection2 = document.createElement('li')
elementCollection2.innerText = 'i am a web devoloper .';

     console.log(elementCollection1);
     console.log(elementCollection2)

// JavaScript এর মাধ্যমে document.createElement() তৈরি করার পর যদি যদি সেই Element এর ভিতরে আরোও নুতুন কোন Element যোগ করতে চাই , তাহলে সে ক্ষত্রে .appendChild() ব্যবহার করতে হবে ।
const appendChildCollection = document.getElementById('append-Child')

appendChildCollection.appendChild(elementCollection1);

appendChildCollection.appendChild(elementCollection2);










//// ৬। JavaScript এর মাধ্যমে function লিখে HTML button এর onclick="" এর ব্যবহার কিভাবে করা যায় তা দেখানো হয়েছে ।

//Option that we will will rearly use 
const makeGreen = document.getElementById('Make-Green');
makeGreen.onclick = MakeGreen;

function MakeGreen() {
    document.body.style.backgroundColor = 'Green';
}

//Option that we will use most 
function MakeRed() {
    document.body.style.backgroundColor = 'Red';
}










//// ৭। JavaScript এ HTML এর কোন button এ addEventListener() ব্যবহার করে কিভাবে সেই button কে কিভাবে কার্যকরি করা যায় তা দেখানো হয়েছে ।

// Option we will use most
document.getElementById('Make-White').addEventListener('click',

    function MakeWhite() {
        document.body.style.backgroundColor = 'white';
    }

)

// Option we will use rearly  
const makePurple = document.getElementById('Make-Purple');

makePurple.addEventListener('click',

    function MakePurple() {
        document.body.style.backgroundColor = 'purple';
    }

);


// Option we will not use that much
const makeYellow = document.getElementById('Make-Yellow');
makeYellow.addEventListener('click', MakeYellow);

function MakeYellow() {
    document.body.style.backgroundColor = 'Yellow';
}










//// ৮। key board এর key type কে count করার জন্য এই পদ্ধতি ব্যবহার করা হয় ।
document.getElementById('keyword').addEventListener('keyup', function (even) {
    console.log(even.target.value);
})










//// ৯। javascripr এর সাহ্যযে কোন লেখা gitHub এর মত করে Delete করার পদ্ধতি ।
document.getElementById('delete-btn').addEventListener('click', function () {
    const deletedText = document.getElementById('delete-text');
    deletedText.style.display = 'none';
})

document.getElementById('text-input').addEventListener('keyup', function (event) {
    const text = event.target.value;

    const deleteButton = document.getElementById('delete-btn')

    if (text === 'delete') {
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteButton.setAttribute('disabled', true)
    }

})





//// ১০। Event Bubble এর ব্যবহার ।
document.getElementById('containar').addEventListener('click', function () {
    console.log('continer clicked');
})

document.getElementById('package').addEventListener('click', function () {
    console.log('pakage clicked');
})

document.getElementById('item-1').addEventListener('click', function () {
    console.log('item-1 clicked');
})



//Event Bubble বন্ধ করার পদ্ধতি । 
document.getElementById('containars').addEventListener('click', function () {
    console.log('continer clicked');
})

document.getElementById('packages').addEventListener('click', function () {
    console.log('pakage clicked');
})









//// ১১। normal stopPropagation
document.getElementById('items-1').addEventListener('click', function (Event) {
    console.log('item-1 clicked');
    Event.stopPropagation();
})


//advance stopPropagation সব গুলোর মধ্যে মাত্র একটা দেখাবে ।
document.getElementById('items-2').addEventListener('click', function (Event) {
    console.log('item-2 frist clicked');
    Event.stopImmediatePropagation()
})

document.getElementById('items-2').addEventListener('click', function () {
    console.log('item-2 secoend clicked');
})

document.getElementById('items-2').addEventListener('click', function () {
    console.log('item-2 third clicked');
})

document.getElementById('items-2').addEventListener('click', function () {
    console.log('item-2 forth clicked');
})

document.getElementById('items-2').addEventListener('click', function () {
    console.log('item-2 fith clicked');
})










//// ১২। কোন parent container থেকে কোন child remove করর পদ্ধতি ।

const products = document.getElementsByClassName('item')
for (container of products) {
    container.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}










//// ১৩। JAVASCRIPT এ Arrow Function লিখার পদ্ধতি ।
const math = (first , secoend) =>{
    const alvi = first + secoend;
    return alvi;
  }

  const result = math(50 , 50);
  console.log(result)










//// ১৪JAVASCRIPT এ Array এর ভিতরে থাকা number বা string কে বের করে আনার জন্য কিনবা number বা string এর সামনে আথবা পিছনে
const Digit0 = [2, 3, 4, 5];
console.log( ...Digit0);

const Digit1 = [12, 13, 14, 15];
const Digits1 = [ 12 , ...Digit1 , 13, 14]
console.log(Digits1);









//// ১৫। JAVASCRIPT এ Array এর ভিতরে থাকা number বা string থেকে কোন কিছু বের করা বা যোগ করা জন্য push এবং pop এর ব্যবহার ।
const Digit2 = [12, 13, 14, 15]
Digit2.push(55)
Digit2.pop()
console.log(Digit2)

const Digit3 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const Digit4 = [...Digit3];
Digit3.push(100, 200)
Digit3.pop()
Digit4.push(100, 200, 300)
Digit4.pop()
console.log(Digit3);
console.log(Digit4);






                                              // advance JAVASCRIPT Toturial END //
