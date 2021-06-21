// - створити функцію яка обчислює та повертає площу прямокутника висотою

// function rectangle(a, b) {
//     let S = 'S прямоугольника = ' +a*b;
//     return S;
// }

// console.log(rectangle(4, 5));

// - створити функцію яка обчислює та повертає площу кола

// function circle(r) {
//     let S = 'S круга = ' + Math.PI * Math.pow(r, 2);
//     return S;
// }

// console.log(circle(4));

// - створити функцію яка обчислює та повертає площу циліндру

// function cylinder(r, h) {
//     let S = 'S цилиндра = ' +2*Math.PI*r*h;
//     return S;
// }

// console.log(cylinder(4, 5));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function minAndMax() {
    let min = arguments[0],
        max = arguments[0];
    for (let item of arguments) {
        min = min > item ? item : min;
        max = max < item ? item : max;
    }
    console.log(max);
    return min;
}
console.log(minAndMax(1, 2, 3, 4, 5, -5, 6, 7));

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let massive = [1, 2, 3, 4, 5];

// function changePlace(mass = [], i) {
//     [mass[i], mass[i + 1]] = [mass[i + 1], mass[i]];
// }

// changePlace(massive, 2);
// console.log(massive);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100

// let num = [3, 77, 0, 5, 9, 0, 4, 0, 66, 34, 0, 33, 27];

// function zeroInTheEnd(mass = []) {
//     for (let i in mass) {
//         if (mass[i] === 0) {
//             mass.push(mass[i]);
//             mass.splice(i, 1);
//         }
//     }
// }

// zeroInTheEnd(num);
// console.log(num)

// - Дано список імен.
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// function accio(name = '') {
//     const res = [];
//     for (const item of name.split(' ')) {
//         if (item) {
//             res.push(item)
//         }
//     }
//     return res.join(' ');
// }

// n1 = accio(n1);
// console.log(n1);