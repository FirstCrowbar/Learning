//МЕТОД .lenght (длина строки)
const str = "test";
const arr = [1, 2, 4];
console.log(str.length);    /* Метод вывода длины строки, применённая к строке (возвращает количество символов  */
console.log(arr.length);    /* Метод вывода длины строки, применённая к массиву (возвращает количество элементов) */

//МЕТОДЫ .toUpperCase, toLowerCase
console.log(str.toUpperCase()); /* Изменяет регистр содержимого на верхний */
console.log(str.toLowerCase()); /* Изменяет регистр содержимого на нижний */

//МЕТОД .indexOf
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); /* Возвращает порядковый номер первого символа указанного фрагмента */

//МЕТОД .slice
const logg = "Hello world";
console.log(logg.slice(6, 11)); /* Вырезает кусок в указанном диапазоне */

//МЕТОД .round
const num = 12.2;
console.log(Math.round(num));   /* Просто округление */

//МЕТОДЫ .parseInt и .parseFloat
const test = "12.2px";
console.log(parseInt(test));    /* Преобразует именющиеся в строке цифровые символы и возвращает их в виде целого числа */
console.log(parseFloat(test));  /* Преобразует именющиеся в строке цифровые символы и возвращает их в виде дробного числа */

