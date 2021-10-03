'use strict'
// Задание №1.
// Напишите код для "безопасного" вычисления периметра и площади прямоугольника в виде модуля.
// Сторонами прямоугольника может быть только число (тип данных Number, значения других типов данных нельзя устанавливать), значение которого, строго больше 0.


var perimetrSquare = (function () {
  var sideA = 1;
  var sideB = 1;

  function perimetr() {
    return 2 * (sideA + sideB);
  };

  function square() {
    return sideA * sideB;
  };

  function sideValid (side) {
    if (typeof side === "number" && side > 0 ){
      return true;
    } else {
      return false;
    }
  };

  return {
    setSideA: function(a) {
      if (sideValid(a)){
        sideA = a;
      }
    },
    setSideB: function(b) {
      if (sideValid(b)){
        sideB = b;
      }
    },

    perimetr: function () {
          return perimetr();
       },
    square: function () {
        return square();
     },
    }
 }());

perimetrSquare.setSideA(10);
perimetrSquare.setSideB(5);

console.log(perimetrSquare.perimetr());
console.log(perimetrSquare.square());