// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"

let content = document.getElementById('content');

//     b) отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');

//     c) замініть текст параграфа з id 'content' на будь-який інший

content.innerText = 'Звіт повинен бути виконаний українською мовою та оформлений відповідно до вимог Держстандарту України (ДСТУ 3008-95 "Документація. Звіти у сфері науки і техніки. Структура та правила оформлення").'

//     d) замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText = 'У звіті необхідно чітко й логічно розкрити зміст та результати виконаної роботи, уникати загальних фраз, тавтології, викривлення фактів, переказу книжок, підручників та іншої друкованої літератури. Варто також уникати „копіювання” матеріалу з друкованої літератури без посилань, або підтвердження розрахунками та відповідними висновками.'

//     e) змініть кожному елементу колір фону на червоний
//     f) змініть кожному елементу колір тексту на синій

let elements = document.body.children;
for (const i of elements) {
    i.style.backgroundColor = 'red';
    i.style.color = 'blue';
}

//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(rules.classList);

//     h) отримати всі елементи з класом fc_rules

let fcRules = document.getElementsByClassName('fc_rules');

//     i) поміняти колір тексту у всіх елементів fc_rules на червоний

for (let i of fcRules) {
    i.style.color = 'red';
}