/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов

6) Реализовать функционал, при котором после заполнения формы и нажатия кнопки "Подтвердить* -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь несколько вариантов решения задачи, принимается любой, но рабочий.

7) если название фильма больше, чем 21 символ - обрезать его и добавить три точки

8) При клике на мусорную корзину - элемент будет удаляться из списка

9) Если в форме стоит галочка "Сделать любимым" - выводить сообщение в консоль

10) Фильмы должны быть отсортированы по алфавиту */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
//________________________________________________________________________________________________
//БАЗА ДАННЫХ С ФИЛЬМАМИ
    const movieDB = {
        movies: [
            "Логанс",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    let movieList = document.querySelector(".promo__interactive-list"); //Переменная - список фильмов на странице

//_______________________________________________________________________________________________
//БЛОК ДОБАВЛЕНИЯ НОВЫХ ФИЛЬМОВ
    let newFilms = {
        //СБОР ДАННЫХ С ФОРМЫ
        filmInput: function () {
            let add = document.querySelector(".add"); //Переменная - форма добавления новых фильмов
            let form = add.querySelector(".adding__input"); //Переменная - поле для ввода
            let checkBox = add.querySelector('[type ="checkbox"]'); //Переменная - чекбокс

            let newFilm = form.value; //Переменная, содержащая введённые данные
            if (newFilm) {
                if (newFilm.length > 21) {
                    newFilm = newFilm.substring(0, 22) + "...";
                    newFilm = newFilm.charAt(0).toUpperCase() + newFilm.slice(1); //Изменение первой буквы на заглавную
                    movieDB.movies.push(newFilm); //Добавление в массив содержимого формы
                    movieDB.movies.sort(); // сортировка по алфавиту базы с фильмами
                    newFilms.createMovieList(movieDB.movies, movieList); //Вызов функции формирования нового списка
                } else {
                    newFilm = newFilm.charAt(0).toUpperCase() + newFilm.slice(1); //Изменение первой буквы на заглавную
                    movieDB.movies.push(newFilm); //Добавление в массив содержимого формы
                    movieDB.movies.sort(); // сортировка по алфавиту базы с фильмами
                    newFilms.createMovieList(movieDB.movies, movieList); //Вызов функции формирования нового списка
                }
            }
            if (checkBox.checked) { //Проверка на наличие галочки
                console.log("Чек");
            }
        },

        //ФОРМИРОВАНИЕ СПИСКА
        createMovieList: function (films, parent) {
            movieDB.movies.sort(); // сортировка по алфавиту базы с фильмами
            parent.innerHTML = ""; // очистка предыдущего содержимого
            films.forEach((film, i) => { //Перебор массива с фильмами
                parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>`;
            });
            document.querySelectorAll('.delete').forEach((btn, i) => {  //Селектор + сразу перебор
                btn.addEventListener('click', () => {   //При событии "клик" запускается стрелочная функция
                    btn.parentElement.remove(); //Удалить родительский элемент со страницы
                    movieDB.movies.splice(i, 1);    //Удалить фильм из базы данных
                    console.log("delete");
                    newFilms.createMovieList(movieDB.movies, movieList); //ВОССТАНОВЛЕНИЕ НУМЕРАЦИИ!
                });
            });
            },

        //СОРТИРОВКА МАССИВА
        sortArray: function (arr) {
            arr.sort();
        },

        //ВИЗУАЛЬНЫЕ КОРРЕКЦИИ
        visualCorr: function () {
            //УДАЛЕНИЕ РЕКЛАМНЫХ БАННЕРОВ
            let spam = document.querySelectorAll(".promo__adv img");
            spam.forEach(item => {
                item.remove();
            });
            //ЗАМЕНА ЖАНРА
            let genreMain = document.querySelector(".promo__genre");
            genreMain.textContent = "Драма";
            //ЗАМЕНА ПОСТЕРА
            let posterMain = document.querySelector(".promo__bg");
            posterMain.style.backgroundImage = 'url("img/bg.jpg")';
        }

    };

//__________________________________________________________________________________________________
//ТРИГГЕР НАЖАТИЯ НА КНОПКУ "ПОДТВЕРДИТЬ"
let formButton = document.querySelector(".add button"); //Переменная - кнопка ввода
formButton.addEventListener('click', (event) => { //Событие нажатия на кнопку
    event.preventDefault();
    newFilms.filmInput(); //Вызов функции формирования нового списка
    });


//__________________________________________________________________________________________________
//ВЫЗОВ ФУНКЦИЙ
newFilms.createMovieList(movieDB.movies, movieList);
newFilms.visualCorr();
});

