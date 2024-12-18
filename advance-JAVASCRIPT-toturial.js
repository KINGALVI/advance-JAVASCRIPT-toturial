                                              // advance-JAVASCRIPT-Toturial-start //





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










//// ১৪। JAVASCRIPT এ existing Array এর সাথে নুতুন Array যোগ করার জন্য (...) method ব্যবহার করতে হবে । 
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










// ১৬। Javascript এ যদি কোনো Function বা Program Browser এর ভিতরে Website Load হয়ে যাওয়ার কিছু সময় পর দেখাতে চায় তাহলে settimeout ব্যবহার করতে হবে ।

setTimeout(() => {
    console.log('Lazy Log')
}, 3000)










// ১৭। Javascript এ যদি কোনো Function বা Program Browser এর ভিতরে Website Load হয়ে যাওয়ার কিছু সময় পর পর দেখাতে চায় তাহলে setInterval ব্যবহার করতে হবে ।

let number = 0;

const ColckId = setInterval(() => {

    number++;

    if (number >= 5) {
        clearInterval(ColckId);
    }
    console.log(ColckId, number);
})










// ১৮। Javascript এ try, catch, throw এবং finally ব্যবহার করে Error Handling করার পদ্ধতি ।

document.getElementById('input-field-button').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    inputField.value = ''
    const errorText = document.getElementById('error-text');


    try {
        const number = parseInt(inputFieldText);

        if (isNaN(number)) {
            throw 'Please Put Some Number !';
        }

        else if (number < 18) {
            throw 'Kids Are Not Alowed !'
        }

        else if (number > 50) {
            throw 'Old People Are Not Alowed !'
        }
        errorText.innerText = ''

    }
    catch (error) {
        errorText.innerText = error;
    }
    finally {
        setTimeout(() => {
            alert('All Done Inside Try Catch');
        }, 1000);
    }
})










// ১৯। Browser এর ভিতরে থাকা Locl Stroage এ Javascript এর মাধ্যমে Data Store করার পদ্ধতি ।

document.getElementById('add-product').addEventListener('click', function () {

    const productNameInputField = document.getElementById('product-name');
    const productNameInputFieldText = productNameInputField.value;
    productNameInputField.value = ''

    const productQuntityInputField = document.getElementById('product-quantuty');
    const productQuntityInputFieldText = productQuntityInputField.value;
    productQuntityInputField.value = ''

    productList(productNameInputFieldText, productQuntityInputFieldText);

    saveProductToShoppingStroage(productNameInputFieldText, productQuntityInputFieldText);

})

const productList = (Name, Quantuty) => {
    const productListTable = document.getElementById('product-list');
    const productList = document.createElement('h2');
    productList.innerText = `${Name} : ${Quantuty}`;
    productListTable.appendChild(productList);
}

const getStroredShoppingCart = () => {
    let cart = {}
    const getShoppingCart = localStorage.getItem('cart');
    if (getShoppingCart) {
        cart = JSON.parse(getShoppingCart);
    }
    return cart;
}

const saveProductToShoppingStroage = (Name, Quantuty) => {
    const cart = getStroredShoppingCart();
    cart[Name] = Quantuty;
    const cartStringfy = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfy);
}

const displayShoppingCart = () => {
    const saveCart = getStroredShoppingCart();
    for (const product in saveCart) {
        const quantuty = saveCart[product];
        productList(product, quantuty)
    }
}

displayShoppingCart()











// ২০। JAVASCRIPT এ Array methods (map, forEach, filter, find and includes ) এর ব্যবহার

const products = [

    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },

    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },

    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },

    { name: 'sungalss', price: 300, brand: 'ribon', color: 'black' },

    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }

];




//// 1. Array ভিতরে কোনো নির্দিষ্ট Object এর Element খুজে পাওয়ার জন্য map() method এর ব্যবহার করতে হবে । map() method এর ফলাফল return হিসেবে Araay প্রদান করবে।

const barands = products.map(product => product.brand)
console.log(barands)




//// 2. map() method এর মত Array ভিতরে কোনো নির্দিষ্ট Object এর Element খুজে পাওয়ার জন্য forEach() method এর ব্যবহার করতে হবে । তবে forEach() method এর ফলাফল return হিসেবে Araay প্রদান করবে না ।

products.forEach(product => console.log(product.brand));




//// 3. Array ভিতরে শর্ত সাপেক্ষে কোন নির্দিষ্ট Object এর Element পেতে চাইলে filter() method এর ব্যবহার করতে হবে । filter() method এর ফলাফল return হিসেবে Araay প্রদান করবে ।

const cheapProducts = products.filter(product => product.price <= 5000);
console.log(cheapProducts);

// includes() ব্যবহার করে filter() method এর ব্যবহার । includes() ব্যবহার করা হয় মূলত নির্দিষ্ট চিহ্ন, সংখ্যা বা আক্ষর এর উপর ভিত্তি করে Object এর Element পাওযার জন্য ।

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);




//// 4. Array ভিতরে শর্ত সাপেক্ষে কোন নির্দিষ্ট Object এর সর্ব প্রথম Element পেতে চাইলে find() method এর ব্যবহার করতে হবে । find() method এর ফলাফল return হিসেবে Object প্রদান করবে ।

const special = products.find(product => product.name.includes('n'));
console.log(special);




//// 5. পুরাতন Array সাথে নুতুন Array যুক্ত করতে চাইলে (...) method ব্যবহার করতে হবে ।
const newProduct = { name: 'webcam', price: 500, brand: 'samsumg', color: 'red' }

const newProducts = [...products, newProduct]
console.log(newProducts);










// ২১। JAVASCRIPT এ Array এবং object Destructuring কিভাবে করতে হয় তা দেখানো হয়েছে ।

const studentInfo = {
    student: "alvi",
    age: 23,
    tech: 'computer',
    language: ['html', 'css', 'js'],
    specification: {
        hight: 66,
        weignt: 67,
        adress: "kumarkhali",
        dirnk: "water"
    }
}

const displayStudentInfo = studentInfo;
console.log(displayStudentInfo);

const [language] = [studentInfo.language];
console.log(language)

const { hight, weignt, adress, dirnk } = studentInfo.specification;
console.log(hight, weignt, adress, dirnk)










// ২২। Object এর ভিতরে যদি Object এর Key এবং value গুলো পেতে চাই , তাহলে Object.keys() method ব্যবহার করেতে হবে ।

const object = { name: 'Telivision', price: 50000, brand: 'walton', color: 'black' };

//// 1. Object এর ভিতরে যদি Object এর Keys গুলো পেতে চাই , তাহলে Object.keys() method ব্যবহার করেতে হবে ।

const keys = Object.keys(object);
console.log(keys);

//// 2. Object এর ভিতরে যদি Object এর values গুলো পেতে চাই , তাহলে Object.vlues() method ব্যবহার করেতে হবে ।

const value = Object.values(object)
console.log(value)










// ২৩। JAVASCRIPT এ if else এর সংক্ষিপ্ত রুপ দেখানো হলো । 


//// 1. short verstion of one conditional if-else :

const money = 180;
let food = money>100 ? "birani" : "cha biscuit";
console.log(food)

// // একাধিক শর্ত বিশিষ্ঠ if else এর একটি শর্ত সংক্ষিপ্ত রুপ হলো ঃ

//// 1. short verstion of && and operator if-else :

const Money1 = 50;
const Money2 = 50;
let Food = (Money1>100 && Money2>100) ? "Mojo" : "mango biscuit";
console.log(Food)

//// 2. short verstion of || or operator if-else :

const Money1 = 50;
const Money2 = 50;
let Food = (Money1>100 || Money2>100) ? "Mojo" : "mango biscuit";
console.log(Food)

//// 3. short verstion of else-if 

let score = 85;
let grade = (score >= 90) ? "A" : // if
            (score >= 80) ? "B" : // else-if 
            (score >= 70) ? "C" : // else-if 
            (score >= 60) ? "D" : "F"; // else
console.log(grade);










// ২৪। JAVASCRIPT এ if else এর সংক্ষিপ্ত রুপ দেখানো হলো । 


//// 1. Variable যুক্ত একটি শর্ত বিশিষ্ঠ if else এর সংক্ষিপ্ত রুপ হলো ঃ

const money = 180;
let food = money>100 ? "birani" : "cha biscuit";
console.log(food)

//// 2. Variable যুক্ত একাধিক শর্ত বিশিষ্ঠ if else এর সংক্ষিপ্ত রুপ হলো ঃ

const Money1 = 50;
const Money2 = 50;
let Food = (Money1>100 && Money2>100) ? "Mojo" : "mango biscuit";
console.log(Food)

//// 3. Function যুক্ত শর্ত বিশিষ্ঠ if else এর সংক্ষিপ্ত রুপ হলো ঃ

let isActive = (true);
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
isActive ? showUser() : hideUser();
isActive = !isActive;





                                              // advance-JAVASCRIPT-Toturial-end //
