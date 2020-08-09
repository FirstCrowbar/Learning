let students = {        // Создаём объект с несколькими подобъектами
    mirzoev: {
        age: 25,
        rating: 30
    },
    obsosov: {
        age: 18,
        rating: 50
    },
    fufloev: {
        age: 40,
        rating: 50
    },
};
console.log(students.mirzoev.age);      //Обращаемся к одному из подобъектов через точку
console.log(students["fufloev"]);   //Обращаемся к одному из подобъектов через квадратные скобки
console.log(students);              //Обращаемся ко всему объекту
delete students.obsosov;            //Применяем оператор удаления к свойству объекта
console.log(students);