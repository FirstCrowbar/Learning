// 1) Обычная функция: this = window, но если use strict - undefinded
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
// }
// showThis(4, 5);


// 2) Контекст у методов объекта - сам объект
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//     }
// };
// obj.sum();

// 3) this в конструкторах и классах - это новый экземпляр объекта
// function user(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new user('Ivan', 23);


// 4) Ручная привязка this: call, apply, bind
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// const  user = {
//     name: 'John'
// };
// sayName.call(user, ' Smith'); //вызов функции с присвоением ей содержимого
// sayName.apply(user, [' Smith']);
//
// function count(num) {
//     return this*num;
// }
// const double = count.bind(2); //bind создаёт новую функцию и подвязывает контекст
// console.log(double(3));
// console.log(double(13));


// 5)
//Ф случае написания function, this - это сам объект клика
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    console.log(this);
});

//В стрелочной функции, this - высший объект в иерархии
const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};
obj.sayNumber();

