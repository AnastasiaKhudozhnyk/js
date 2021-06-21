// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let mas = [18, 2, 555, 7, 1997];
// let mas2 = ['Lucy', 'Samuel', 'Michael', 'Chloe', 'Eva']; 
// let mas3 = ['Dan', 71, 388, true, 4>9];

// console.log(mas);
// console.log(mas2);
// console.log(mas3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];

// arr[0] = 56;
// arr[1] = 7;
// arr[2] = 'zero';
// arr[3] = 'black';
// arr[4] = 999;

// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i < 10; i++ ){
//         document.write(`<div>bausch+lomb</div>`)
//     };

// for (let i = 0; i < 10; i++ ){
//         document.write(`<div>bausch+lomb ${i}</div>`)
//     };

// while (i < 20) {
//         document.write(`<h1>bausch+lomb</h1>`);
//         i++;
// }

// while (i < 20) {
//         document.write(`<h1>bausch+lomb ${i}</h1>`)
//         i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let massive = [55, 888, 42, 7452, 895, 85, 7452, 985, 563, 9523];

// for (i = 0; i < massive.length; i++) {
//         console.log(massive[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let massive1 = ['ad', 'segs', 'asedgsg', 'sfdgs', 'sbhgsg', 'sbs', 'sdfgbd', 'shsdf', 'sfhbsdb', 'sgbsd'];

// for (i = 0; i < massive1.length; i++) {
//         console.log(massive1[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let massive2 = [55, 'segs', 42, 'sfdgs', 895, 85, true, 985, 563, 9523];

// for (i = 0; i < massive2.length; i++) {
//         console.log(massive2[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let massive3 = [55, 'segs', 42, 'sfdgs', 895, 85, true, 985, 563, 9523];

// for (i = 0; i < massive3.length; i++) {
//         if (typeof massive3[i] === 'boolean') {
//                 console.log(massive3[i]);
//         }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let massive3 = [55, 'segs', 42, 'sfdgs', 895, 85, true, 985, 563, 9523];

// for (i = 0; i < massive3.length; i++) {
//         if (typeof massive3[i] === 'number') {
//                 console.log(massive3[i]);
//         }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let massive3 = [55, 'segs', 42, 'sfdgs', 895, 85, true, 985, 563, 9523];

// for (i = 0; i < massive3.length; i++) {
//         if (typeof massive3[i] === 'string') {
//                 console.log(massive3[i]);
//         }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let empty = [];

// empty[0] = 14658;
// empty[1] = 965;
// empty[2] = 'sfbijg';
// empty[3] = true;
// empty[4] = 258;
// empty[5] = 'srhg';
// empty[6] = false;
// empty[7] = 'swrfbhs';
// empty[8] = 4 < 8;
// empty[9] = 68;

// for (i = 0; i < empty.length; i++) {
//         console.log(empty[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 10; i++) {
//         console.log(i);
//         document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 100; i++) {
//         console.log(i);
//         document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 100; i = i + 2) {
//         console.log(i);
//         document.write(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (i = 0; i < 200; i++) {
//         if (i % 2 === 0) {
//                 console.log(i);
//                 document.write(i);
//         }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (i = 0; i < 200; i++) {
//         if (i % 2 !== 0) {
//                 console.log(i);
//                 document.write(i);
//         }
// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [{
                id: 1,
                name: 'vasya',
                age: 31,
                status: false
        },
        {
                id: 2,
                name: 'petya',
                age: 30,
                status: true
        },
        {
                id: 3,
                name: 'kolya',
                age: 29,
                status: true
        },
        {
                id: 4,
                name: 'olya',
                age: 28,
                status: false
        }
];

let citiesWithId = [{
                user_id: 3,
                country: 'USA',
                city: 'Portland'
        },
        {
                user_id: 1,
                country: 'Ukraine',
                city: 'Ternopil'
        },
        {
                user_id: 2,
                country: 'Poland',
                city: 'Krakow'
        },
        {
                user_id: 4,
                country: 'USA',
                city: 'Miami'
        }
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
        for (let _city of citiesWithId) {
                if (usersWithId[i].id === _city.user_id) {
                        usersWithCities[i] = usersWithId[i];
                        usersWithCities[i].address = _city;
                }
        }
};

console.log(usersWithCities)