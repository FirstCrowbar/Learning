//ДИНАМИЧЕСКОЕ ДОБАВЛЕНИЕ СКРИПТА НА СТРАНИЦУ


function loadScript(src) {
    const script = document.createElement('script'); //Создаём переменную
    script.src = src; //Указываем, что путь будет прописан позже
    script.async = false; //Отменяем асинхронность выполнения
    document.body.append(script); //Помещаем в конец элемента
}

loadScript("12. Практика. Текстовая игра.js"); //Вызываем функцию с указанием пути к js-файлу