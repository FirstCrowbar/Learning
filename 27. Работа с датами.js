const now = new Date();

// //МЕТОДЫ ПОЛУЧЕНИЯ ДАТЫ (get)
// console.log(now.getFullYear()); //Возвращает год
// console.log(now.getMonth()); //Возвращает месяц
// console.log(now.getDate()); //Возвращает число
// console.log(now.getDay()); //Возвращает день недели (начало - с воскресенья)
// console.log(now.getUTCHours()); //Возвращает время в формате UTC (Часовой пояс +00)

//МЕТОДЫ ИЗМЕНЕНИЯ ДАТЫ (set)
console.log(now.setHours(18));
console.log(now);

//СПОСОБ ИЗМЕРЕНИЯ ВРЕМЕНИ РАБОТЫ ЦИКЛА (бенчмарк)
let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end = new Date();
alert(`Цикл отработал за ${end - start} миллисекунд`);