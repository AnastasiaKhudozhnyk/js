// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// // створити пустий масив, наповнити його 10 об'єктами User

// let arrUser = [
//     new User(1, 'chloe', 'decker', 'decker@gmail.com', 4513256485),
//     new User(2, 'lucifer', 'morningstar', 'morningstar@gmail.com', 74512356874),
//     new User(3, 'daniel', 'espinoza', 'espinoza@gmail.com', 5412645874),
//     new User(4, 'amenadiel', 'firstborn', 'firstborn@gmail.com', 542120356874),
//     new User(5, 'mazikeen', 'smith', 'smith@gmail.com', 34156156874),
//     new User(6, 'trixie', 'espinoza', 'espinoza1@gmail.com', 256212356874),
//     new User(7, 'linda', 'martin', 'martin@gmail.com', 56412356874),
//     new User(8, 'charlotte', 'richards', 'richards@gmail.com', 246512356874),
//     new User(9, 'ella', 'lopez', 'lopez@gmail.com', 5412312356874),
//     new User(10, 'eve', 'heaven', 'heaven@gmail.com', 12569356874),
// ]

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [
    new Client(1, 'chloe', 'decker', 'decker@gmail.com', 4513256485, ['juice']),
    new Client(2, 'lucifer', 'morningstar', 'morningstar@gmail.com', 74512356874, ['coffee', 'cake', 'cheese', 'ham']),
    new Client(3, 'daniel', 'espinoza', 'espinoza@gmail.com', 5412645874, ['juice', 'cake', 'almond']),
    new Client(4, 'amenadiel', 'firstborn', 'firstborn@gmail.com', 542120356874, ['coffee', 'cheese', 'ham']),
    new Client(5, 'mazikeen', 'smith', 'smith@gmail.com', 34156156874, ['juice', 'cake', 'almond']),
    new Client(6, 'trixie', 'espinoza', 'espinoza1@gmail.com', 256212356874, ['cheese', 'ham']),
    new Client(7, 'linda', 'martin', 'martin@gmail.com', 56412356874, ['juice', 'cake', 'almond']),
    new Client(8, 'charlotte', 'richards', 'richards@gmail.com', 246512356874, ['coffee', 'cheese', 'ham']),
    new Client(9, 'ella', 'lopez', 'lopez@gmail.com', 12312356874, ['juice', 'cake', 'coffee', 'almond']),
    new Client(10, 'eve', 'heaven', 'heaven@gmail.com', 12569356874, ['coffee', 'cheese', 'ham']),
]

// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, vEngine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.vEngine = vEngine;

//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         console.log(this.model, this.producer, this.year, this.maxSpeed, this.vEngine);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver = {}) {
//         this.driver = driver
//     }
// }

// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxSpeed, vEngine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.vEngine = vEngine;
//     }
//     drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info = function () {
//         console.log(this.model, this.producer, this.year, this.maxSpeed, this.vEngine);
//     }
//     increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     addDriver = function (driver = {}) {
//         this.driver = driver
//     }
// }

// let camry = new Car('camry', 'toyota', 2015, 200, 50);
// camry.drive();
// camry.increaseMaxSpeed(100);
// camry.changeYear(2000);
// camry.addDriver({
//     name_: 'Vasya',
//     age: 25,
//     status: true
// });
// camry.info();

// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню

// let filter = arrUser.filter(user => !(user.id % 2));

// arrUser.sort((user1, user2) => user1.id - user2.id);

// arrUser.sort((user1, user2) => user2.id - user1.id);

// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню
clients.sort((user1, user2) => user2.order.length - user1.order.length);