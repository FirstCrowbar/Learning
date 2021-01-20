//СПОСОБЫ ПРЕВРАЩЕНИЯ В СТРОКУ
// 1. String
console.log(typeof(String(null)));
console.log(typeof (String(4)));

// 2. Конкатенация
console.log(typeof (5 + ''));   /* При сложении строкой получается строка */

const num = 5;
console.log("https://vk.com/catalog/" + num);
const fontSize = 26 + 'px';

//_________________________________________________________________________________
//СПОСОБЫ ПРЕВРАЩЕНИЯ В ЧИСЛО
// 1. Number
console.log(typeof (Number('4')));

// 2. Унарный плюс
console.log(typeof (+'4'));

// 3. parseInt
console.log(typeof (parseInt('15px', 10)));

//_________________________________________________________________________________
//СПОСОБЫ ПРЕВРАЩЕНИЯ В БУЛЕВОЕ ЗНАЧЕНИЕ
//0, '', null, undefined, NaN; - это всегда false! Всё остальное - true
// СПОСОБ 1
let switcher = null;
if (switcher) {                     /* Если switcher = true... */
    console.log('Working...');      /* Вывести в консоль */
}                                   /* т.к. он false - условие выполняться не будет */

switcher = 1;
if (switcher) {                     /* Если switcher = true... */
    console.log('Working...');      /* Вывести в консоль */
}                                   /* т.к. он екгу - условие выполняется */

//___________________________________________________________________________________
//СПОСОБ 2
console.log(typeof (Boolean('4')));

//___________________________________________________________________________________
//СПОСОБ 3
console.log(typeof(!!'4'));