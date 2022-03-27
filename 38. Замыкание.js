//Простейшее определение замыкания - это "функция в функции"

function urlGenerator(domain) { //Внешняя функция принимает аргумент и возвращает внутреннюю
    return function (url) {     //Внутренняя функция также принимает аргумент
        return `https://${url}.${domain}`;  //И возвращает сформированный url-адрес
    }
}

//Как с этим взаимодействовать?
//Переменной присваиваем значение внешней функции и передаём ей аргумент
const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');

//Т.к. эта переменная содержит в себе внутреннюю функцию, можно её вызвать. Также передав аргумент
console.log(comUrl('google'));
console.log(comUrl('netflix'));

console.log(ruUrl('yandex'));
console.log(ruUrl('vk'));