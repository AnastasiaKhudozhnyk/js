// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let mainHeader = document.getElementById('main_header');
mainHeader.innerText = 'april-2021';

//     b) робить шириниу елементу ul 400px

let ul = document.querySelector('ul');
ul.style.width = '400px';

//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     e) отримує всі елементи li та змінює ім колір фону на сірий

let linkList = document.getElementsByClassName('linkList');
for (let i of linkList) {
    i.style.width = '50%';
    i.style.backgroundColor = 'silver';
}

//     d) отримує текст який зберігається в елементі з класом listElement2

let listElement2 = document.querySelector('li.listElement2 a');
let textListElement2 = listElement2.textContent;

//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let a = document.getElementsByTagName('a');
for (let i of a) {
    i.classList.add(`anchor`, `element_${i.textContent}`);
    if (i.textContent === 'link3') {
        i.style.fontSize = '40px';
    }
}

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let subHeader = document.getElementsByClassName('sub-header');
let colorBack = prompt('choose background');
let colorText = prompt('choose text color');
for (let i of subHeader) {
    i.style.backgroundColor = `${colorBack}`;
    if (i.textContent === 'content 2 segment') {
        i.style.color = `${colorText}`;
    }
}

//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content1 = document.getElementsByClassName('content_1');
let promptText = prompt('write something');
for (let i of content1) {
    i.textContent = `${promptText}`;
}

//     l) отримати елементи p та змінити їм padding на 20px

let p = document.getElementsByTagName('p');
for (let i of p) {
    i.style.padding = '20px';
}
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

let text2 = document.getElementsByClassName('text2');
for (let i of text2) {
    i.innerText = 'april-2021';
}

// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

let f1 = document.forms.f1
let nameInput = f1.name
f1.addEventListener('submit', () => {
    let name = nameInput.value;
    localStorage.setItem('item', name)
})

