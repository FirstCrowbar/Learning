const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {      /* Метод объекта в виде вложенной функции */
        console.log("Test");
    }
};
options.makeTest();             /* Вызов внутриобъектного метода */

//ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА
const {border, bg} = options.colors;  
console.log(border);
console.log(options["colors"]["border"]); /* Другой способ обращения к подобъекту (неудобный) */


// console.log(options.colors.bg);
// delete options.name; /* Применяем оператор удаления к одному из свойств объекта */
// console.log(options);


//ЦИКЛ ВЫВОДА СОДЕРЖИМОГО ОБЪЕКТА (ПЕРЕБОР)
let counter = 0;                                /* создаём переменную, которая послужит счётчиком */
for (let key in options) {                      /* Создаём локальную перем. key внутри объекта options */
    if (typeof(options[key]) === 'object') {    /* Условие: если тип ключа в объекте options - объект */
        for (let i in options[key]) {           /* запускаем тот же цикл, только для подобъекта */
            console.log(`Свойство ${key} имеет значение ${options[key]}`);  /* Обращаемся сперва к ключу, затем к значению */
            counter++;                                                      /* Если цикл сработал, производится инкремент счётчика */
        }
    } else {                                                                /* В противном случае (если подобъекты отсутствуют) */
        console.log(`Свойство ${key} имеет значение ${options[key]}`);      /* Обращаемся сперва к ключу, затем к значению */
        counter++;                                                          /* Если цикл сработал, производится инкремент счётчика */
    }
}
console.log(counter);
console.log(Object.keys(options));          /* Метод вывода списка ключей из объекта */
console.log(Object.keys(options).length);   /* Метод вывода количество элементов объекта. Позволяет исключить счётчик из кода выше */