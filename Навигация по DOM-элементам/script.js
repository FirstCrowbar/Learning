// console.log(document.head); //Обращение к элементу head
// console.log(document.documentElement); //Обращение к элементу html (главному в иерархии)
// console.log(document.body.firstElementChild);  //Обращение к первому родительскому элементу
// console.log(document.body.lastElementChild);   //Обращение к последнему родительскому элементу
// console.log(document.querySelector('#current').parentElement); //Обращение к родительскому элементу через дочернего
// console.log(document.querySelector('#current').parentElement.parentElement); //Ещё на одного родителя выше
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //Обращение к следующему элементу через дата-атрибут предыдущего
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); //Обращение к предыдущему элементу через дата-атрибут следующего

// console.log(document.body.childNodes); //Вывод всех дочерних элементов в виде массива (включая текстовые ноды)
//избавиться от них можно следующим перебором
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}
//Выводятся только элементы страницы (включая комментарии)