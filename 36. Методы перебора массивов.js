// filter
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names.filter(function (name) {
    return name.length < 5; //Возвращает новый массив, подходящий под условия фильтра
});
console.log(shortNames);

//_______________________________________________________________________________________
// map
const answers = ['IvAn', 'AnnA', 'Hello'];
const result = answers.map(item => {
    return item.toLocaleLowerCase(); //Возвращает новый массив с изменёнными значениями
});
console.log(result);
//можно изменить и существующий массив
answers2 = ['IvAn', 'AnnA', 'Hello'];
answers2 = answers2.map(item => {
    return item.toLocaleLowerCase(); //Меняет значения и перезаписывает их в исходник
});
console.log(result);

//______________________________________________________________________________________
// every/some
const some = [4, 'qwq', 'sdsds'];
console.log(some.some(item => typeof(item) === 'number' )); //Возвращает true, если хотя бы один элемент удовлевторяет требованиям
console.log(some.every(item => typeof(item) === 'number' )); //Возвращает true, если все элементы удовлевторяют требованиям

//______________________________________________________________________________________
// reduce
const arr = [4, 3, 2, 1, 5, 6, 7];
const res = arr.reduce((sum, current) => sum + current, 3); //Суммирует все элементы (в данном случае)
console.log(res);

const arr2 = ['apple', 'pear', 'plum'];
const res2 = arr2.reduce((sum, current) => sum + ', ' + current); //Суммирует все элементы (в данном случае)
console.log(res);

//_____________________________________________________________________________________
//Пример. Нужно вытащить из объекта имена людей
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};
const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);
console.log(newArr);


//________________________________________________________________________________________
//ЭКСПЕРИМЕНТ. Увеличение и уменьшение всех чисел в существующем массиве
// let body = [0, 1, 2, 3, 6,];
// const btnPlus = document.querySelector("#plus");
// const btnMinus = document.querySelector("#minus");
//
// //Триггеры
// btnPlus.addEventListener("click", () => {
//     setArr("+");
// });
// btnMinus.addEventListener("click", () => {
//     setArr("-");
// });
//
// let setArr = function (direction) {
//     if (direction === "+") {
//         body = body.map(item => {
//             return item + 1;
//         });
//     } else if (direction === "-") {
//         body = body.map(item => {
//             return item - 1;
//         })
//     }
//     console.log(body);
// }

