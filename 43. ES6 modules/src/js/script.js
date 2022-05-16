import {one, two} from './main';
console.log(`${one} and ${two}`);

//Способ импортировать ВСЁ экспортируемое из указанного файлафайла
//Данные заключаются в объект data
import * as data from './main';
console.log(`${data.one} and ${data.two}`);
data.sayHi();

//В случае указания default в экспортируемом файле, импорт выглядит так:
// import sayHi from './main';