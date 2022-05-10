//Задача: вернуть строку, удалив из неё все восклицательные знаки

function removeExclamationMarks(s) {
    console.log(s.replace(/[!]/g, ""));
}

//Решение: регулярное выражение + метод replace с заменой символа на пустую строку
removeExclamationMarks("!!Hello!");
