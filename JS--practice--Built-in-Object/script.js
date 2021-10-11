/*Задание №1.
Создайте тип объектов Прямоугольник со свойствами координат верхнего левого (x1, y1) и нижнего правого (x2, y2) углов. 
Переопределите методы toString() и valueOf(). Метод toString() должен возвращать строку с описанием текущего состояния. Метод valueOf() должен возвращать текущий периметр.*/

function Rectangle(x1, y1, x2, y2) {
  this.cornerUpperLeftX1 = x1;
  this.cornerUpperLeftY1 = y1;
  this.cornerLowerRightX2 = x2;
  this.cornerLowerRightY2 = y2;  
}
Rectangle.prototype.toString = function() {
  var infoCornerUpperLeft = " Координаты верхнего левого угла: " + this.cornerUpperLeftX1 + ", " + this.cornerUpperLeftY1 + "."
  var infoCornerLowerRight = " Координаты нижнего правого угла: " + this.cornerLowerRightX2 + ", " + this.cornerLowerRightY2 + ".";

  return infoCornerUpperLeft + infoCornerLowerRight;
};

Rectangle.prototype.valueOf = function(){
  var sideA = Math.abs(this.cornerUpperLeftY1 - this.cornerLowerRightY2);
  var sideB = Math.abs(this.cornerUpperLeftX1 - this.cornerLowerRightX2);
  var perimetr = 2 * (sideA + sideB);

  return perimetr;
}

var rect1 = new Rectangle(-5, 10, 5, 9);
console.dir(rect1);
console.log(rect1.toString());
console.log(rect1.valueOf());