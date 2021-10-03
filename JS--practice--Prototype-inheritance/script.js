'use strict'


/*Прототипное наследование 
Задание №1.
Создайте тип объектов Геометрическая фигура, определите в нем приватные свойства для задания центра фигуры. Для доступа к этим свойствам определите необходимые метод/методы.
На основе этого типа создайте два новых типа (наследники) – Прямоугольник и Круг. В этих типах определите особые приватные свойства. (Например, длина диагонали для Прямоугольника и радиус для Круга). В каждый из типов добавьте публичный метод info(), который выводит на экран всю доступную информацию о фигуре.*/

function GeometricFigure (x, y) {
  if (this.__coordinateValid(x)) {
    this.__axisX = x;
  } else {
    this.__axisX = 0;
  }
 
  if (this.__coordinateValid(y)) {
    this.__axisY = y;
  } else {
    this.__axisY = 0;
  }
};

GeometricFigure.prototype.getAxisX = function() {
  return this.__axisX;
};

GeometricFigure.prototype.setAxisX = function(x) {
  if (this.__coordinateValid(x)) {
    this.__axisX = x;
  }
};

GeometricFigure.prototype.getAxisY = function() {
  return this.__axisY;
};

GeometricFigure.prototype.setAxisY = function(y) {
  if (this.__coordinateValid(y)) {
    this.__axisY = y;
  }
};

GeometricFigure.prototype.__coordinateValid = function(coordinate) {
  if (typeof coordinate === "number" && !isNaN(coordinate) && isFinite(coordinate)) {
    return true;
  } else {
    return false;
  }
};

var coordinateXY = new GeometricFigure("7", "6");

function Rectangle (x, y, diagonal){
  GeometricFigure.call(this, x, y);

  if (this.__diagonalLengthValid(diagonal)){
    this.__diagonalLength = diagonal;
  } else {
    this.__diagonalLength = 1;
  }
}
  
Rectangle.prototype = Object.create(GeometricFigure.prototype);

Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.info = function () {
  console.log("Координаты фигуры: ", " x: ", this.getAxisX(), " y: ", this.getAxisY(), " . Диагональ фигуры: ", this.__diagonalLength);
};

Rectangle.prototype.__diagonalLengthValid = function(value) {
  if (typeof value === "number" &&  value > 0 && isFinite(value)){
    return true;
  } else {
    return false;
  }
}; 


var rect = new Rectangle(5, 6, 12);
rect.info();


function Сircle (x, y, radius){
  GeometricFigure.call(this, x, y);

  if (this.__radiusLengthValid(radius)){
    this.__radiusLength = radius;
  } else {
    this.__radiusLength = 1;
  }
};

Сircle.prototype = Object.create(GeometricFigure.prototype);
Сircle.prototype.constructor = Сircle;

Сircle.prototype.info = function () {
  console.log("Координаты фигуры: ", " x: ", this.getAxisX(), " y: ", this.getAxisY(), " . Радиус фигуры: ", this.__radiusLength);
}

Сircle.prototype.__radiusLengthValid = function(value) {
  if (typeof value === "number" &&  value > 0 && isFinite(value)){
    return true;
  } else {
    return false;
  }
}; 


var cir = new Сircle(-6, 6, -12);
cir.info();



// Задание №2. Полиморфизм
// Создайте тип объектов Квадрат, определите защищенное свойство для хранения значения стороны. Для доступа к этому свойству определите необходимые метод/методы. Также определите публичный метод, который возвращает периметр.
// На основе этого типа создайте тип Куб и переопределите метод получения периметра.
// Реализуйте 2 версии текущего задания, используя следующие способы переопределения:
// 1. Без расширения (полностью переопределить метод родителя);
// 2. С расширением (использовать результат метода родителя для дальнейших расчетов)

function Square(unverifiedSide) {
  if (this._sideValid(unverifiedSide)) {
    this._side = unverifiedSide;
  } else {
    this._side = 1;
  }  
}

Square.prototype.getSide = function() {
  return this._side;
};

Square.prototype.setSide = function(unverifiedSide) {
  if (this._sideValid(unverifiedSide)) {
    this._side = unverifiedSide;
  }
};

Square.prototype._sideValid = function(side) {
  if (typeof side === "number" && side > 0 && isFinite(side)) {
    return true;
  } else {
    return false;
  }
};

Square.prototype.perimeterP = function() {
  return this._side * 4;
};

var sq = new Square(-6);

// 1. Без расширения (полностью переопределить метод родителя);

function Cube1(unverifiedSide) {
  Square.call(this, unverifiedSide);
}

Cube1.prototype = Object.create(Square.prototype);
Cube1.prototype.constructor = Cube1;
Cube1.prototype.perimeterP = function() {
  return this._side * 12;
};


// 2. С расширением (использовать результат метода родителя для дальнейших расчетов)

function Cube2(unverifiedSide) {
  Square.call(this, unverifiedSide);
}

Cube2.prototype = Object.create(Square.prototype);
Cube2.prototype.constructor = Cube2;
Cube2.prototype.perimeterP = function() {
  return 3 * Square.prototype.perimeterP.call(this);
};

var cb1 = new Cube1(4);
var cb2 = new Cube2(7);


