//Концепция
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle { //Новый класс объявляет своим родителем Rectangle
    constructor(height, width, text, bgColor) {
        super(height, width); //Функция заимствует свойства у родителя
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}
//Экземпляры
const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);
const redSquare = new ColoredRectangleWithText(10, 10, 'Нушобля', 'red');

console.log(square.calcArea());
console.log(long.calcArea());
redSquare.showMyProps();
console.log(redSquare.calcArea());