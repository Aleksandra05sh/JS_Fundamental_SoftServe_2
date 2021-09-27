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



