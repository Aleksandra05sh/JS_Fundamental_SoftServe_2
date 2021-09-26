'use strict'


/*Прототипное наследование 
Задание №1.
Создайте тип объектов Геометрическая фигура, определите в нем приватные свойства для задания центра фигуры. Для доступа к этим свойствам определите необходимые метод/методы.
На основе этого типа создайте два новых типа (наследники) – Прямоугольник и Круг. В этих типах определите особые приватные свойства. (Например, длина диагонали для Прямоугольника и радиус для Круга). В каждый из типов добавьте публичный метод info(), который выводит на экран всю доступную информацию о фигуре.*/

function GeometricFigure (x, y) {
  if (this._coordinateValid(x)) {
    this._axisX = x;
  } else {
    this._axisX = 0;
  }
 
  if (this._coordinateValid(y)) {
    this._axisY = y;
  } else {
    this._axisY = 0;
  }
};

GeometricFigure.prototype.getAxisX = function() {
  return this._axisX;
};

GeometricFigure.prototype.setAxisX = function(x) {
  if (this._coordinateValid(x)) {
    this._axisX = x;
  }
};

GeometricFigure.prototype.getAxisY = function() {
  return this._axisY;
};

GeometricFigure.prototype.setAxisY = function(y) {
  if (this._coordinateValid(y)) {
    this._axisY = y;
  }
};

GeometricFigure.prototype._coordinateValid = function(coordinate) {
  if (typeof coordinate === "number" && !isNaN(coordinate) && isFinite(coordinate)) {
    return true;
  } else {
    return false;
  }
};

var coordinateXY = new GeometricFigure("7", "6");

function Rectangle (x, y, diagonal){
  GeometricFigure.call(this, x, y);

  this._name = 'rectangle';

  if (this._diagonalLengthValid(diagonal)){
    this._diagonalLength = diagonal;
  } else {
    this._diagonalLength = 1;
  }
}
  
Rectangle.prototype = Object.create(GeometricFigure.prototype);

Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.info = function () {
  console.log("Имя фигуры: ", this._name, ". Координаты фигуры: ", " x: ", this._axisX, " y: ", this._axisY, " . Диагональ фигуры: ", this._diagonalLength);
};

Rectangle.prototype._diagonalLengthValid = function(value) {
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

  this._name = 'circle';

  if (this._radiusLengthValid(radius)){
    this._radiusLength = radius;
  } else {
    this._radiusLength = 1;
  }
};

Сircle.prototype = Object.create(GeometricFigure.prototype);

Сircle.prototype.constructor = Сircle;

Сircle.prototype.info = function () {
  console.log("Имя фигуры: ", this._name, ". Координаты фигуры: ", " x: ", this._axisX, " y: ", this._axisY, " . Радиус фигуры: ", this._radiusLength);
}

Сircle.prototype._radiusLengthValid = function(value) {
  if (typeof value === "number" &&  value > 0 && isFinite(value)){
    return true;
  } else {
    return false;
  }
}; 




var cir = new Сircle(-6, 6, -12);
cir.info();