const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');


// console.log(btns[0].classList.length); //кол-во стилей элемента
// console.log(btns[0].classList.item(1)); //название стиля элемента

// console.log(btns[1].classList.add('red', 'effec')); //добавить элементу новые стили
// console.log(btns[0].classList.remove('blue')); //удалить старые стили
// console.log(btns[0].classList.toggle('blue')); //возвратить ранее удалённый класс
//

//Условие: если элемент содержит класс, то...
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

//Если не содержит, то добавить. Если содержит, то удалить
//Т.е. при каждом нажатии меняется цвет
btns[1].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});


//Метод делегирования. Обращаемся к кнопке как к дочернему элементу <div>
//"BUTTON" - одно из свойств event, в данном случае <div>
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello')
    }
});