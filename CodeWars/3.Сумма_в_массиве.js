//Задача: вывести кол-во положительных и сумму отрицательных чисел в массиве
//Игнорировать ноль и при отсутсвтии элементов вернуть пустой массив
function countPositivesSumNegatives(input) {
    let arr =[];
    if (input === null) {
        return(arr);
    } else if (input.length !== 0) {
        let plus = input.filter(item => item > 0).length;
        let minus = input.filter(item => item < 0).reduce((sum, current) => sum + current);
        arr.push(plus, minus);
    }
    return(arr);
}

countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]);