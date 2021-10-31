console.log('Запрос данных...');

const req = new Promise((resolve, reject) => { //Перем. вмещает в себя новый промис
    setTimeout(() => {
        console.log('Погдотовка данных...');
        const product = {
            name: 'TV',
            price: 2000
        };
        resolve(product); //Выполнение кода выше считается успешным и возвращает элемент в скобках (только один!)
    }, 2000);
});

req.then((product) => { //После выполнения промиса следует метод .then, который принимает аргумент
    return new Promise((resolve, reject) => {   //Возвращение ещё одного промиса
        setTimeout(() => {
            product.status = 'order';
            resolve(product); //Выполнение кода выше считается успешным и возвращает элемент в скобках
        }, 2000);
    });
}).then(data => {   //Последующих методов .then может быть сколько угодно
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() => { //В случае, если один из блоков вызывает reject, срабатывает метод catch
    console.error('Произошла ошибка');
}).finally(() => {  //finally ставится в самом конце и срабатывает при любом условии
    console.log('finally');
})




const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};
//Promise.all вмещает в себя массив из промисов, которые выполняются последовательно
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});
//Promise.race срабатывает, когда выполнится первый элемент в массиве
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});


