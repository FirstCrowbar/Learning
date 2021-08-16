//Основоная функция-конструктор
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello, ${this.name}`);
//     }
// }
//
// //Добавление нового свойства в уже существующий объект
// User.prototype.exit = function () {
//     console.log(`Пользователь ${this.name} ушёл`);
// }
//
// //Создание новых объектов на основе функции-конструктора
// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);
//
// ivan.hello();
// alex.hello();
//
// ivan.exit();


//Тестинг
function Students(name, surname, rating) {
    this.name = name;
    this.surname = surname;
    this.rating = rating;
    this.ok = function () {
        console.log('Ok')
    }
}
const zabor = new Students('Zabor', 'Saraev', 95);
console.log(zabor);
const btn = document.querySelector("button");
btn.addEventListener('click', () => {
    zabor.ok();
})