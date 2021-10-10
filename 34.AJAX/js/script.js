const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd'),
    btn = document.querySelector('button');

btn.addEventListener('click', () => {
    console.log('ok');
    const alrt = new XMLHttpRequest();
    alrt.open('GET', 'js/what.json');
    // alrt.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    alrt.send();
    alrt.addEventListener('load', () => {
        const text = JSON.parse(alrt.response);
        console.log(text.text);
    })

});

// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest();
//     //метод open() настраивает запрос
//     //open(method, url, async, login, pass)
//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send(); //инициирование коммуникации с сервером
//     //отслеживаем стостояние запроса в текущий момент. Следит за readyState
//     request.addEventListener('load', () => {
//         if (request.status === 200) {
//             console.log(request.response);
//             const data = JSON.parse(request.response);
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//         } else {
//             inputUsd.value = "ERROR";
//         }
//     })
//     //Ответ сервера обладает следуюшими свойствами:
//     // status - показывает статус ( спасибо, кэп)
//     // statusText - текстовое описание ответа от сервера
//     // response - ответ от сервера
//     // readyState - текущее состояние запроса
// })

