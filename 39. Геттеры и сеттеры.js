const persone = {
    name: "Alex",
    age: 25,

    //создаём свойство-ацессор (геттер), возвращающее одно из значений данного объекта
    get userAge() {
        return this.age;
    },
    //создаём сеттер, позволяющий изменять содержимое геттера
    set userAge(num) {
        this.age = num;
    }
};

//Обращаемся к свойству - ацессору
console.log(persone.userAge = 30);
console.log(persone.userAge);