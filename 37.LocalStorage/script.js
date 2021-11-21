// localStorage.setItem('number', 5); //Добавление данных в LocalStorage
// localStorage.getItem('number'); //Получение данных из LocalStorage
// localStorage.removeItem('number'); //Удаление данных из LocalStorage
// localStorage.clear(); //Полное очищение хранилища


const  checkBox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

//Если стоит галочка, то после перезагрузки она остаётся
if (localStorage.getItem('isChecked')) {
    checkBox.checked = true;
}
//Если цвет был изменён, после перезагрузки остаётся таковым
if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

//При включении галочки в localStorage делается соответсвующая запись
checkBox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

//При нажатии на кнопку меняется цвет
change.addEventListener('click', () => {
   if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
   } else {
       localStorage.setItem('bg', 'changed');
       form.style.backgroundColor = 'red';
   }
});

//Запись объекта в JSON-формате и обратный его парсинг
const persone = {
    name: 'Alex',
    age: 25
};
const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);
console.log(JSON.parse(localStorage.getItem('alex')));