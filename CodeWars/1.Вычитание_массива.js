//Задача: удалить из первого массива значения, идентичные второму

function arrayDiff(a, b) {
    let filter1 = a.filter(i => !b.includes(i));
    return(filter1);
}
//arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.

console.log(arrayDiff([], [4, 5]) + "ответ: []");
console.log(arrayDiff([3, 4], [3]) + "ответ: [4]");
console.log(arrayDiff([1, 8, 2], []) + "ответ: [1, 8, 2]");
console.log(arrayDiff([1, 2, 2], [1, 2]) + "ответ: [3]");
