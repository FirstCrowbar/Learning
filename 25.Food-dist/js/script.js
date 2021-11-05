
window.addEventListener('DOMContentLoaded', () => {

    //_______________________________________________________________________________________________
    //ТАБЫ
    const  tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsParent = document.querySelector('.tabheader__items');
    //Функция скрытия табов
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    //Функция появления табов
    function showTabContent(i = 0) { //Делаем ноль аргументом по умолчанию
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();
    //Событие клика. Если элемент, на который кликнул пользователь, совпадает с элементом в массиве,
    //вызывается функция с аргументом в виде номера этого элемента
    tabsParent.addEventListener('click', (event) => {
        const target = event.target; //Для упрощения пихаем event.target в переменную
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    
    //_________________________________________________________________________________________________
    //ТАЙМЕР
    const deadLine = '2021-10-11';
    //Функция, считающая разницу между текущим временем и deadLine
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 *60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    //Подстановка нулей к однозначным числам
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }   else {
            return num;
        }
    }
    //Вывод данных на страницу
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock(); //Запуск, чтобы исключить мигание при перезагрузке страницы
        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }
    setClock('.timer', deadLine);

    //_____________________________________________________________________________________
    //МОДАЛЬНЫЕ ОКНА

    const  modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector(".modal");

    //Функция открытия модального окна
    function modalOpen() {
        modal.style.display = "block";
        document.body.style.overflow = 'hidden'; //Запретить прокрутку страницы
        clearInterval(modalTimerId); //Сброс повторного вызова по таймеру
    }
    //Функция закрытия модального окна
    function modalClose() {
        modal.style.display = "none";
        document.body.style.overflow = ''; //Разрешить прокрутку страницы
    }
    //Вызов функции путём нажатия на кнопки
    modalTrigger[0].addEventListener('click', modalOpen);
    modalTrigger[1].addEventListener('click', modalOpen);
    //Закрытие при нажатии в затенённую область
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') === '') {
            modalClose();
        }
    })
    //Закрытие при нажатии Escape
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            modalClose();
        }
    })
    //Всплытие модального окна по таймеру
    const modalTimerId = setTimeout(modalOpen, 3000);
    //Всплытие модального окна после прокрутки всей страницы
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.
            documentElement.scrollHeight) {
            modalOpen();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);

    //______________________________________________________________________________________
    //СОЗДАНИЕ ОТДЕЛЬНОГО КЛАССА ДЛЯ МЕНЮ
    let container = document.querySelector("#container");
    let menuField = document.querySelector(".menu__field");
    class MenuItem {
        constructor(img, altimg, title, descr, price) {
            this.img = img;
            this.altimg = altimg;
            this.title = title;
            this.descr = descr;
            this.price = price;
        }
        menuPublic () {
            container.innerHTML += `<div class="menu__item">
                    <img src=${this.img} alt=${this.altimg}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>`
        }
    }

    //_____________________________________________________________________________________________________
    //ПОСТРОЕНИЕ БЛОКОВ МЕНЮ НА ОСНОВАНИИ ДАННЫХ С СЕРВЕРА
    //Функция делает get-запрос к серверу
    const getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }
    // getResource('http://localhost:3000/menu') //Вызов функции с передачей адреса в виде аргумента
    //     .then(data => { //С сервера приходит массив, который необходимо перебрать
    //         data.forEach(({img, altimg, title, descr, price}) => { //В фигурных скобках - деструктуризация объекта
    //             new MenuItem(img, altimg, title, descr, price, '.menu .container').menuPublic(); //И для каждого элемента создать новый экземпляр класса
    //         });
    //     })
    //Альтернативный вариант, без использования конструктора. Если нужно построить только один раз
    getResource('http://localhost:3000/menu')
        .then(data => createCard(data));
    function createCard(data) {
        data.forEach(({img, altimg, title, descr, price}) => {
            const element = document.createElement('div');
            element.classList.add('menu__item');
            element.innerHTML = `<div class="menu__item">
                    <img src=${img} alt=${altimg}>
                    <h3 class="menu__item-subtitle">${title}</h3>
                    <div class="menu__item-descr">${descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${price}</span> грн/день</div>
                    </div>
                </div>`;
            document.querySelector('.menu .container').append(element);
        })
    }


    //__________________________________________________________________________________________________
    // ОТПРАВКА ФОРМЫ НА СЕРВЕР
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg', //путь к изображению
        success: 'Спасибо! Скоро мы с Вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    //Обращаемся ко всем формам на странице и для каждой вызываем функцию
    forms.forEach(item => {
        bindPostData(item);
    })

    //Функция отправки формы на сервер (вызывается из bindPostData)
    const postData = async (url, data) => {
        const res = await fetch(url, { //Адрес сервера (аргумент)
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data //Объект, отправляемый на сервер (аргумент)
        });
        return await res.json();
    }

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            //Подготовка сообщения статуса с добавлению на страницу
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading; //путь к элементу
            statusMessage.style.cssText = ` 
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage); //вставка элемента после формы
            //Подготовка формы к отправке на сервер
            const formData = new FormData(form); //Объект собирает все данные с формы
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            //Вызываем fetch функцию с двумя аргументами
            postData('http://localhost:3000/requests', json)
                .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    //_____________________________________________________________________________________________________
    //МОДАЛЬНОЕ ОКНО "СПАСИБО"
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        modalOpen();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
          <div class="modal__close" data-close>&times;</div>
          <div class="modal__title">${message}</div>
        </div>`;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            modalClose();
        }, 4000);
    }

    //ОБРАЩЕНИЕ К JSON-серверу
    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
});



//ПРИМЕР ИСПОЛЬЗОВАНИЯ fetch Api
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: "POST",
//     body: JSON.stringify({name: 'Alex'}),
//     headers: {
//         'Content-type': 'application/json'
//     }
// })
//     .then(response => response.json()) //Сервер возвращает промис в формате json (в данном случае)
//     .then(json => console.log(json));