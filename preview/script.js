const  btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay'),
    btns = document.querySelectorAll('button');

//Алерт при клике на кнопку
// btn.addEventListener('click', () => {
//     alert('Click');
// });
// btn.addEventListener('click', () => {   //При одном нажатии вылезает и второй обработчик
//     alert('Second click');
// });

//При наведении
// btn.addEventListener('mouseenter', () => {  //Наведение срабатывает каждый раз
//     console.log('Hover');
// });
// btn.addEventListener("mouseenter", (e) => { //Второй аргумент - элемент
//     console.log(e.target);                              //Вывести в консоль его содержание
//     // e.target.remove();    //Возможные действия с элементом (удалить, изменить свойства и т.д.)
// });

//Можно вызывать действие через функцию
// let i = 0;
// const deleteElement = (e) => {
//     e.target.remove();
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };
// btn.addEventListener('click', deleteElement);

//Работа через overlay
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
};
btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

//Способ обратиться к нескольким одинаковым элементам (стандартно, через forEach)
// btns.forEach(item => {
//     item.addEventListener('click', deleteElement);
// })

//Изменение стандартного поведения браузера
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();             //Отменяет поведение браузера по умолчанию
    console.log(event.target);         //После этого делаем что захотим

})


//_______________________________________________________
const red = (e) => {
    e.target.style.backgroundColor = "red";
}
btns[1].addEventListener('click', red);
btns[2].addEventListener('click', red);





const badImage = document.createElement('div');
badImage.style.cssText = 'height: 200px; width: 200px; background-image: url("sobaka.jpg")';
document.body.append(badImage);
const  deleteImage = (e) => {
    badImage.remove();
};
btns[1].addEventListener('click', deleteImage);