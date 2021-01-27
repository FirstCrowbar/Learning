'use strict';

//ПОЛУЧЕНИЕ ЭЛЕМЕНТА ПО ID
const box = document.getElementById('box');
console.log(box);

//__________________________________________________________________________________
//ПОЛУЧЕНИЕ ЭЛЕМЕНТА ПО НАЗВАНИЮ ТЕГА
//Этим способом всегда выводится псевдомассив и действовать с ним нужно соответствующе
//При работе с одним элементом ВСЕГДА нужно указывать его индекс
const btns = document.getElementsByTagName('button')[1];   /* Из псевдомассива тегов выделяется 1 элемент */
console.log(btns);
//ЛИБО МОЖНО ВЫЗЫВАТЬ ЕГО ПОСЛЕ
const btns2 = document.getElementsByTagName('button');
console.log(btns2[1]);

//_____________________________________________________________________________________
//ПОЛУЧЕНИЕ ЭЛЕМЕНТА ПО НАЗВАНИЮ КЛАССА
//Данный способ, также как и у тегов, выводит псевдомассив
const circle = document.getElementsByClassName('circle');
console.log(circle[0]);

//______________________________________________________________________________________
//ПОЛУЧЕНИЕ ЭЛЕМЕНТА ПО CSS-СЕЛЕКТОРУ (метод forEach)
const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item => {        /* Метод разбивает псевдомассив на отдельные элементы */
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); /* Метод берёт ТОЛЬКО ПЕРВЫЙ элемент по селектору */
console.log(oneHeart);                                     /* Поэтому лучше подходит для одиночных элементов */

const btns3 = document.querySelectorAll('button'); /* Работает аналогично CSS */
console.log(btns3);                /* То есть можно выбрать любой элемент на странице */
const box2 = document.querySelector('#box');    /* У id не забываем ставить # */
console.log(box2);


// ********************************************************
//ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ
const box10 = document.getElementById('box'),
    btns10 = document.getElementsByTagName('button'),
    circles10 = document.getElementsByClassName('circle'),
    hearts10 = document.querySelectorAll('.heart'),
    oneHeart10 = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

console.dir(box);  /* Вывести в консоль все возможные свойства объекта (ко, что можно изменить */

// box10.style.backgroundColor = 'blue';   /* Пример: изменение цвета фона */
// box10.style.width = '100px';            /* Пример: изменение ширины элемента */
let numb = 500;
box10.style.cssText = `background-color: green; width: ${numb}px`;     /* Пример: обращение сразу к группе параметров */
btns10[1].style.borderRadius = '100%';  /* Пример: скругление углов */
circles10[0].style.backgroundColor = 'red'; /* Не забываем указывать индекс в псевдомассиве ! */

console.dir(circles10);

//МЕТОД ОБРАЩЕНИЯ К ГРУППЕ ЭЛЕМЕНТОВ ПУТЁМ ПЕРЕБОРА МАССИВА (редко используется)
// for (let i = 0; i < hearts10.length; i++) {
//     hearts10[i].style.backgroundColor = 'green';
// };

//_____________________________________________________________________________________
//МЕТОД ОБРАЩЕНИЯ К ГРУППЕ ЭЛЕМЕНТОВ С ПОМОЩЬЮ МЕТОДА forEach
hearts10.forEach(item => {
    item.style.backgroundColor = 'blue';
});

//____________________________________________________________________________________
//МЕТОД СОЗДАНИЯ НОВЫХ ЭЛЕМЕНТОВ
const div = document.createElement('div'); /* Создаём новый элемент */
div.style.height = '200px';         /* Подправил высоту, чтоб всё поместилось */
div.classList.add('black');         /* Задаём ему стиль (создан ранее) */
document.body.append(div);          /* Добавляем элемент на страницу */
wrapper.append(div);                /* Добавление элемента в другой элемент по его селектору (append - конец) */
// wrapper.appendChild(div);           /* Устаревший вариант */
wrapper.prepend(div);               /* Добавление элемента в другой элемент по его селектору (prepend - начало) */
// hearts10[0].before(div);     /* Добавление элемента перед другим элементом по его селектору */
// wrapper.insertBefore(div, hearts[0]);   /* Устаревший вариант */
// hearts10[0].after(div);         /* Добавление элемента после другого элемента по его селектору */
// document.querySelector('.wrapper').append(div); /* Можно и так, если нужно по-быстрому */

//___________________________________________________________________________________
//УДАЛЕНИЕ ЭЛЕМЕНТОВ
// circles10[1].remove();

//___________________________________________________________________________________
//ЗАМЕНА ЭЛЕМЕНТОВ
// hearts10[2].replaceWith(circles10[0]);

//____________________________________________________________________________________
//ВСТАВКА HTML СТРУКТУРЫ
div.innerHTML = "<h3>Hello World</h3>";                                    /* Вставка в элемент */
div.insertAdjacentHTML("beforebegin", '<h3>Hello World</h3>');  /* Вставка перед элементом */
div.insertAdjacentHTML("afterbegin", '<h3>Hi</h3>');            /* Вставка в НАЧАЛО элемента */
div.insertAdjacentHTML("beforeend", '<h3>Goodbye</h3>');        /* Вставка в КОНЕЦ элемента */
div.insertAdjacentHTML("afterend", '<h3>Goodbye</h3>');      /* Вставка после элемента */

//____________________________________________________________________________________
//ВСТАВКА ТЕКСТА
// div.textContent = "Hi";
console.log(box2);

