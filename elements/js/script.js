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