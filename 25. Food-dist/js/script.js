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
        modal = document.querySelector(".modal"),
        modalCloseBtn = document.querySelector('[data-close]');

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
    modalCloseBtn.addEventListener('click', modalClose);
    //Закрытие при нажатии в затенённую область
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
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


});