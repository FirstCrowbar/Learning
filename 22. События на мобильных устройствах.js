// touchstart - событие при касании пальцем
// touchmove - событие при движении нажатого пальца
// touchend - событие при отпускании пальца
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', (e) => {
    const  box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');
        console.log(e.targetTouches[0].pageX); //Возвращает изменение координаты X
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    });

});

// touches - свойство, содержащее в виде объекта кол-во прикоснувшихся пальцев
// targetTouches - кол-во пальцев на объекте
// changedTouches

//Можно подключить готовый скрипт hammer.js, в котором всё это уже есть