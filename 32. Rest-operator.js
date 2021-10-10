//Rest принимает в себя все лишние аргументы и формирует из них массив
const log = function (a, b, ...rest) {
    console.log(a, b, rest);
}
log('basic', 'rest', 'operator', 'usage');

//Параметр по умолчанию записывается в аргумент
//Он будет использован при отсутствии переданного аргумента
function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}
calcOrDouble(3);