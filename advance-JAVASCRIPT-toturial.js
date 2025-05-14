                                  // advance-JAVASCRIPT-Tutorial-start //




// 1. To access any HTML tag in JavaScript, use document.getElementsByTagName()
const tagCollection = document.getElementsByTagName('body');
console.log(tagCollection);

for (const tag of tagCollection) {
    console.log(tag);
}





// 2. To access a specific HTML tag in JavaScript, use document.getElementById()

const idCollection = document.getElementById('Fruits-title')[0];

const idCollection1 = document.getElementById('Fruits-title').innerText = 'Fruits changed by JavaScript';

const idCollection2 = document.getElementById('Fruits-title').innerHTML = '<h5>Fruits changed by JavaScript</h5>';

const idCollection3 = document.getElementById('Fruits-title').style.backgroundColor = 'yellow';

//// 1. Get and set attributes
const idCollection4 = document.getElementById('Fruits-title').getAttribute('class');
const idCollection5 = document.getElementById('Fruits-title').setAttribute('attribute', 'ALVI');

//// 2. Modify class list
const idCollection6 = document.getElementById('Fruits-title').classList.remove('o');
const idCollection7 = document.getElementById('Fruits-title').classList.replace('o', 'o');
const idCollection8 = document.getElementById('Fruits-title').classList.add('o');





// 3. To access multiple specific HTML tags, use document.getElementsByClassName()
const classNameCollection = document.getElementsByClassName('important-places');
console.log(classNameCollection);

for (const className of classNameCollection) {
    console.log(className.innerText);
}





// 4. To access CSS classes or IDs, use document.querySelectorAll() and document.querySelector()

//// 1. Select multiple elements
const querySelectorAllCollection = document.querySelectorAll('.place-container li');
console.log(querySelectorAllCollection);

for (const li of querySelectorAllCollection) {
    console.log(li);
}

//// 2. Select a single element
const querySelectorCollection = document.querySelector('#places-container li').innerHTML = 'ALVI';
console.log(querySelectorCollection);





// 5. To create HTML elements dynamically in JavaScript, use document.createElement()
const elementCollection1 = document.createElement('li');
elementCollection1.innerText = 'My name is ALVI.';

const elementCollection2 = document.createElement('li');
elementCollection2.innerText = 'I am a web developer.';

console.log(elementCollection1);
console.log(elementCollection2);

//// 1. Append newly created elements
const appendChildCollection = document.getElementById('append-Child');
appendChildCollection.appendChild(elementCollection1);
appendChildCollection.appendChild(elementCollection2);





// 6. Using JavaScript functions for HTML button onclick events

const makeGreen = document.getElementById('Make-Green');
makeGreen.onclick = MakeGreen;

function MakeGreen() {
    document.body.style.backgroundColor = 'Green';
}

function MakeRed() {
    document.body.style.backgroundColor = 'Red';
}





// 7. Using addEventListener() for HTML buttons in JavaScript

document.getElementById('Make-White').addEventListener('click', function MakeWhite() {
    document.body.style.backgroundColor = 'white';
});

const makePurple = document.getElementById('Make-Purple');
makePurple.addEventListener('click', function MakePurple() {
    document.body.style.backgroundColor = 'purple';
});

const makeYellow = document.getElementById('Make-Yellow');
makeYellow.addEventListener('click', MakeYellow);

function MakeYellow() {
    document.body.style.backgroundColor = 'Yellow';
}





// 8. Counting keyboard key presses
document.getElementById('keyword').addEventListener('keyup', function (event) {
    console.log(event.target.value);
});





// 9. Deleting text like GitHub in JavaScript

document.getElementById('delete-btn').addEventListener('click', function () {
    const deletedText = document.getElementById('delete-text');
    deletedText.style.display = 'none';
});

document.getElementById('text-input').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('delete-btn');

    if (text === 'delete') {
        deleteButton.removeAttribute('disabled');
    } else {
        deleteButton.setAttribute('disabled', true);
    }
});





// 10. Using Event Bubbling

document.getElementById('container').addEventListener('click', function () {
    console.log('Container clicked');
});

document.getElementById('package').addEventListener('click', function () {
    console.log('Package clicked');
});

document.getElementById('item-1').addEventListener('click', function () {
    console.log('Item-1 clicked');
});

//// 1. Stopping Event Bubbling

document.getElementById('containers').addEventListener('click', function () {
    console.log('Container clicked');
});

document.getElementById('packages').addEventListener('click', function () {
    console.log('Package clicked');
});





// 11. Normal stopPropagation
document.getElementById('items-1').addEventListener('click', function (event) {
    console.log('item-1 clicked');
    event.stopPropagation();
});





//// 12. Advanced stopPropagation – Only the first event will be logged
document.getElementById('items-2').addEventListener('click', function (event) {
    console.log('item-2 first clicked');
    event.stopImmediatePropagation();
});





// 13. Removing a child element from a parent container in JavaScript
const products = document.getElementsByClassName('item');
for (const container of products) {
    container.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    });
}





// 14. Writing an Arrow Function in JavaScript
const math = (first, second) => {
    const result = first + second;
    return result;
};

const output = math(50, 50);
console.log(output);





// 15. Using the spread (...) method to merge an existing array with a new array
const Digit1 = [12, 13, 14, 15];
const Digits1 = [12, ...Digit1, 13, 14];
console.log(Digits1);





// 16. Using push and pop to add or remove items in an array
const Digit2 = [12, 13, 14, 15];
Digit2.push(55);
Digit2.pop();
console.log(Digit2);

const Digit3 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const Digit4 = [...Digit3];
Digit3.push(100, 200);
Digit3.pop();
Digit4.push(100, 200, 300);
Digit4.pop();
console.log(Digit3);
console.log(Digit4);





// 17. Using setTimeout to delay execution in JavaScript
setTimeout(() => {
    console.log('Lazy Log');
}, 3000);





// 18. Using setInterval for repeated execution in JavaScript
let number = 0;
const clockId = setInterval(() => {
    number++;

    if (number >= 5) {
        clearInterval(clockId);
    }
    console.log(clockId, number);
});





// 19. Using try, catch, throw, and finally for error handling in JavaScript
document.getElementById('input-field-button').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    inputField.value = '';
    const errorText = document.getElementById('error-text');

    try {
        const number = parseInt(inputFieldText);

        if (isNaN(number)) {
            throw 'Please enter a valid number!';
        } else if (number < 18) {
            throw 'Kids are not allowed!';
        } else if (number > 50) {
            throw 'Older people are not allowed!';
        }
        errorText.innerText = '';
    } catch (error) {
        errorText.innerText = error;
    } finally {
        setTimeout(() => {
            alert('All done inside try-catch block.');
        }, 1000);
    }
});





// 20. Storing Data in Browser Local Storage using JavaScript

document.getElementById('add-product').addEventListener('click', function () {

    const productNameInputField = document.getElementById('product-name');
    const productNameInputFieldText = productNameInputField.value;
    productNameInputField.value = '';

    const productQuantityInputField = document.getElementById('product-quantity');
    const productQuantityInputFieldText = productQuantityInputField.value;
    productQuantityInputField.value = '';

    productList(productNameInputFieldText, productQuantityInputFieldText);

    saveProductToShoppingStorage(productNameInputFieldText, productQuantityInputFieldText);
});

const productList = (Name, Quantity) => {
    const productListTable = document.getElementById('product-list');
    const productList = document.createElement('h2');
    productList.innerText = `${Name} : ${Quantity}`;
    productListTable.appendChild(productList);
};

const getStoredShoppingCart = () => {
    let cart = {};
    const getShoppingCart = localStorage.getItem('cart');
    if (getShoppingCart) {
        cart = JSON.parse(getShoppingCart);
    }
    return cart;
};

const saveProductToShoppingStorage = (Name, Quantity) => {
    const cart = getStoredShoppingCart();
    cart[Name] = Quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
};

const displayShoppingCart = () => {
    const savedCart = getStoredShoppingCart();
    for (const product in savedCart) {
        const quantity = savedCart[product];
        productList(product, quantity);
    }
};

displayShoppingCart();





// 21. Using JavaScript Array Methods (map, forEach, filter, find, and includes)

const products = [
    { name: 'laptop', price: 3200, brand: 'Lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iPhone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'Casio', color: 'yellow' },
    { name: 'sunglasses', price: 300, brand: 'Ribon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'Canon', color: 'gray' }
];

//// 1. Using map() to extract elements from an array – returns an array.
const brands = products.map(product => product.brand);
console.log(brands);

//// 2. Using forEach() to iterate over elements in an array – does not return an array.
products.forEach(product => console.log(product.brand));

//// 3. Using filter() to get elements based on a condition – returns an array.
const cheapProducts = products.filter(product => product.price <= 5000);
console.log(cheapProducts);

//// 4. Using includes() inside filter() to search for specific letters in elements.
const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

//// 5. Using find() to get the first matching element – returns an object.
const special = products.find(product => product.name.includes('n'));
console.log(special);

//// 6. Using the spread (...) method to merge an old array with a new array.
const newProduct = { name: 'webcam', price: 500, brand: 'Samsung', color: 'red' };
const newProducts = [...products, newProduct];
console.log(newProducts);





// 22. Destructuring Arrays and Objects in JavaScript

const studentInfo = {
    student: "Alvi",
    age: 23,
    tech: 'Computer',
    language: ['HTML', 'CSS', 'JavaScript'],
    specification: {
        height: 66,
        weight: 67,
        address: "Kumarkhali",
        drink: "Water"
    }
};

const displayStudentInfo = studentInfo;
console.log(displayStudentInfo);

const [language] = [studentInfo.language];
console.log(language);

const { height, weight, address, drink } = studentInfo.specification;
console.log(height, weight, address, drink);





// 23. Using Object.keys() and Object.values() to extract keys and values from objects.

const object = { name: 'Television', price: 50000, brand: 'Walton', color: 'black' };

//// 1. Extracting object keys using Object.keys().
const keys = Object.keys(object);
console.log(keys);

//// 2. Extracting object values using Object.values().
const values = Object.values(object);
console.log(values);





// 24. Simplified versions of if-else statements in JavaScript

//// 1. Short version of a single conditional if-else statement:
const money = 180;
let food = money > 100 ? "Biryani" : "Tea Biscuit";
console.log(food);

// A short version of multiple condition-based if-else statements:

//// 1. Short version using the && (AND) operator in if-else:
const Money1 = 50;
const Money2 = 50;
let Food = (Money1 > 100 && Money2 > 100) ? "Mojo" : "Mango Biscuit";
console.log(Food);

//// 2. Short version using the || (OR) operator in if-else:
const Money1 = 50;
const Money2 = 50;
let Food = (Money1 > 100 || Money2 > 100) ? "Mojo" : "Mango Biscuit";
console.log(Food);

//// 3. Short version of an else-if statement:
let score = 85;
let grade = (score >= 90) ? "A" :  // if
    (score >= 80) ? "B" :  // else-if
        (score >= 70) ? "C" :  // else-if
            (score >= 60) ? "D" : "F"; // else
console.log(grade);





// 25. Simplified versions of if-else statements in JavaScript

//// 1. Using a variable in a conditional if-else statement:
const money = 180;
let food = money > 100 ? "Biryani" : "Tea Biscuit";
console.log(food);

//// 2. Using variables in a multiple condition-based if-else statement:
const Money1 = 50;
const Money2 = 50;
let Food = (Money1 > 100 && Money2 > 100) ? "Mojo" : "Mango Biscuit";
console.log(Food);

//// 3. Using functions in a conditional if-else statement:
let isActive = true;
const showUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');

isActive ? showUser() : hideUser();
isActive = !isActive;




                                          // advance-JAVASCRIPT-Tutorial-end //