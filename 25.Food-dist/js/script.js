import calc from './modules/calc';
import cards  from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import {modalOpen} from "./modules/modal";

window.addEventListener('DOMContentLoaded', () => {
const modalTimerId = setTimeout(() => modalOpen('.modal', modalTimerId), 3000);

    calc();
    cards();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        currentCounter: '#current',
        totalCounter: '#total',
        wrapper: '.offer__slider-wrapper',
        slide: '.offer__slide',
        field: '.offer__slider-inner'
    });
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2023-06-11');

});



//ПРИМЕР ИСПОЛЬЗОВАНИЯ fetch Api
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: "POST",
//     body: JSON.stringify({name: 'Alex'}),
//     headers: {
//         'Content-type': 'application/json'
//     }
// })
//     .then(response => response.json()) //Сервер возвращает промис в формате json (в данном случае)
//     .then(json => console.log(json));