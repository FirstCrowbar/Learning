if (4 == 9) {               /* Если 4 = 9 */
    console.log('Ok');      /* Выводим в консоль Ок */
} else {                    /* Если нет */
    console.log('Error');   /* То выводим Error */
}

num = 49;                       /* Переменная - операнд */
if (num < 50) {                 /* Если число меньше пятидесяти */
    console.log('Мало');        /* Вывести в консоль Мало */
} else if (num > 50) {          /* Если число больше пятидесяти */
    console.log('Много');       /* Вывести в консоль Много */
} else {                        /* В противном случае (если не соблюдено ни одно из условий) */
    console.log('В точку!');    /* Вывести в консоль В точку */
}

// ТЕРНАРНЫЙ ОПЕРАТОР
numb = 50;
(numb === 50) ? console.log('Ok!') : console.log('Error');

// КОНСТРУКЦИЯ SWITCH (работает только на строгое соответствие!)
number = 52;
switch (number) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}
