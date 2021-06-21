// 1) створити функцію яка приймає масив та виводить його

let x = [4, 88, 54, 57, 23, 785, 94];

// function getOut(mass = []) {
//     console.log(mass);
// }

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function getRandom(massive = []) {
//     for (let i = 0; i < 10; i++) {
//         massive.push(Math.round(Math.random() * 10));
//     }
//     getOut(massive);
// }

// let y = [];

// getRandom(y);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function threeMin(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     } else {
//         console.log('There is more than one minimal!')
//     }
// }

// threeMin(5, 2, 2);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function threeMax(a, b, c) {
//     if (a >= b && a >= c) {
//         console.log(a);
//     } else if (b >= a && b >= c) {
//         console.log(b);
//     } else if (c >= a && c >= b) {
//         console.log(c);
//     }
// }
// threeMax(5, 5, 2);

// 5) створити функцію яка повертає найбільше число з масиву

// function arrMax(arr = []) {
//     console.log(Math.max.apply(null, arr));
// }

// arrMax(x);

// 6) створити функцію яка повертає найменьше число з масиву

// function arrMin(arr = []) {
//     console.log(Math.min.apply(null, arr));
// }

// arrMin(x);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

function sumMass(arr = []) {
    let s = 0;
    for (let i of arr) {
        s += i;
    }
    return(s);
}

sumMass(x);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function averMass(arr = []) {
//     let s = 0;
//     for (let i of arr) {
//         s += i;
//     }
//     let a = s / arr.length;
//     console.log(a);
// }

// averMass(x);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

let obj = [{
    name: 'Nastya',
    age: 18,
    status: false
}, {
    name: 'Kate',
    age: 27,
    status: true
}, {
    name: 'Anton',
    age: 21,
    status: false
}]

// function getKeys(mass = []) {
//     let keysArr = [];
//     for (let index of mass) {
//         for (let i in index) {
//             keysArr.push(i);
//         }
//     }

//     console.log(keysArr)
// }

// getKeys(obj);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// function getValues(mass = []) {
//     let valuesArr = [];
//     for (let index of mass) {
//         for (let i in index) {
//             valuesArr.push(index[i]);
//         }
//     }

//     console.log(valuesArr)
// }

// getValues(obj);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// let a = [3, 6, 33, 88];
// let b = [4, 22, 7, 19];

// function getSum(a = [], b = []) {
//     let c = [];
//     for (let i = 0; i < a.length; i++) {
//         let summ = a[i] + b[i];
//         c.push(summ);
//     }
//     console.log(c);
// }

// getSum(a, b);