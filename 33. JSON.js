const persone = {
    name: 'Alex',
    tel: '+7444444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};
// console.log(JSON.stringify(persone)); //Формат передачи объекта на сервер
// console.log(JSON.parse(JSON.stringify(persone))); //Метод получения с сервера

//Способ создания глубокого клона
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann'; //Клон можно изменять, не меняя оригинал
console.log(clone);
console.log(persone);