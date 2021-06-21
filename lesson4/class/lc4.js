// -створити класс попелюшка з полями ім'я, вік, розмір ноги

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }

// --Створити 10 попелюшок , покласти їх в масив

// let cinderellas = [
//     new Cinderella('anna', 20, 37),
//     new Cinderella('ella', 25, 39),
//     new Cinderella('masha', 24, 38),
//     new Cinderella('karina', 20, 38),
//     new Cinderella('katya', 27, 37),
//     new Cinderella('vika', 29, 37),
//     new Cinderella('sonya', 20, 37),
//     new Cinderella('sveta', 21, 40),
//     new Cinderella('anna', 24, 37),
//     new Cinderella('eva', 20, 40),
// ]

// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }

// let prince = new Prince('alex', 29, 39);

// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// let find = cinderellas.find(i => i.footSize === prince.shoeSize);
// console.log(find);

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги

function SnowWhite(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

// --Створити 10 попелюшок , покласти їх в масив

let snowWhites = [
    new SnowWhite('anna', 20, 37),
    new SnowWhite('ella', 25, 39),
    new SnowWhite('masha', 24, 38),
    new SnowWhite('karina', 20, 37),
    new SnowWhite('katya', 27, 37),
    new SnowWhite('vika', 29, 37),
    new SnowWhite('sonya', 20, 37),
    new SnowWhite('sveta', 21, 40),
    new SnowWhite('anna', 24, 37),
    new SnowWhite('eva', 20, 40),
]

// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Charming(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;

    this.findSnowWhite = function () {
        for (let i of snowWhites) {
            if (i.footSize === this.Charming.shoeSize) {
                console.log(i.name);
            }
        }
    }
}

let charming = new Charming('alex', 29, 39);

charming.findSnowWhite();

// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

// function Tag(title, action, attributes = []) {
//     this.title = title;
//     this.action = action;
//     this.attributes = attributes;
// }

// function Attr(titleOfAttr, actionOfAttr) {
//     this.titleOfAttr = titleOfAttr;
//     this.actionOfAttr = actionOfAttr;
// }

// let a = new Tag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [new Attr('accesskey', 'Активация ссылки с помощью комбинации клавиш.'), new Attr('coords', 'Устанавливает координаты активной области.')]);
// console.log(a);
// let div = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [new Attr('align', 'Задает выравнивание содержимого тега <div>'), new Attr('title', 'Добавляет всплывающую подсказку к содержимому.')]);
// console.log(div);
// let h1 = new Tag('h1', 'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.', [new Attr('align', 'Определяет выравнивание заголовка.', new Attr('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'))]);
// console.log(h1);
// let span = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа.', [new Attr('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'), new Attr('id', 'Указывает имя стилевого идентификатора.')]);
// console.log(span);
// let input = new Tag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [new Attr('type', 'Сообщает браузеру, к какому типу относится элемент формы.'), new Attr('multiple', 'Позволяет загрузить несколько файлов одновременно.')]);
// console.log(input);
// let form = new Tag('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.', [new Attr('action', 'Адрес программы или документа, который обрабатывает данные формы.'), new Attr('target', 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.')]);
// console.log(form);
// let option = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [new Attr('label', 'Указание метки пункта списка.'), new Attr('value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.')]);
// console.log(option);
// let select = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', [new Attr('autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.'), new Attr('required', 'Список обязателен для выбора перед отправкой формы.')]);
// console.log(select);