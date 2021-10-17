const box = document.querySelector('.box'),
    btn = document.querySelector("button");

//Габариты элемента включая отступы
// const width = box.clientWidth;
// const height = box.clientHeight;

//Габариты элемента без отступов
// const width = box.offsetWidth;
// const height = box.clientHeight;

//Габариты элемента включая область прокрутки
const width = box.scrollWidth;
const height = box.scrollHeight;

//Функция вертикального раскрытия текста
// btn.addEventListener('click', () => {
//     box.style.height = box.scrollHeight +'px';
// });

//Функция расчёта пролистанного текста
btn.addEventListener('click', () => {
    console.log(box.scrollTop);
})
console.log(width, height);

console.log(box.getBoundingClientRect()); //Получить все координаты элемента
console.log(box.getBoundingClientRect().top); //Получить координаты одного параметра элемента

console.log(document.documentElement.clientWidth); //Кол-во пролистанных пикселей ВСЕЙ страницы